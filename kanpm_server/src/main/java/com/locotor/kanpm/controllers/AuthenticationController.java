package com.locotor.kanpm.controllers;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Properties;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.code.kaptcha.Producer;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import com.locotor.kanpm.entities.User;
import com.locotor.kanpm.payloads.ApiResponse;
import com.locotor.kanpm.payloads.JwtAuthenticationResponse;
import com.locotor.kanpm.payloads.SignInRequest;
import com.locotor.kanpm.payloads.SignUpRequest;
import com.locotor.kanpm.security.JwtTokenProvider;
import com.locotor.kanpm.security.UserPrincipal;
import com.locotor.kanpm.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/signIn")
    public ResponseEntity<JwtAuthenticationResponse> signIn(@RequestBody SignInRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsernameOrEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);
        UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, principal));
    }

    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest request) {
        User userTest = userService.getUserByUsernameOrEmail(request.getUserName());
        if (userTest != null) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Username is already taken!"));
        }

        User user = new User(UUID.randomUUID().toString(), request.getUserName(),
                passwordEncoder.encode(request.getPassword()));

        int insertResult = userService.addUser(user);
        if (insertResult > 0) {
            return ResponseEntity.ok(new ApiResponse(true, "sign up successfully"));
        } else {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "sign up failed"));
        }

    }

    @GetMapping("/verifyUserNameOrEmail")
    public ResponseEntity<?> verifyUserNameOrEmail(String userNameOrEmail) {
        if (userNameOrEmail.isBlank()) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "parameter should not be blank"));
        }
        User userTest = userService.getUserByUsernameOrEmail(userNameOrEmail);
        if (userTest != null) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

    @GetMapping("/captcha.jpg")
    public void getCaptcha(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("image/jpeg");
        Producer captchaProducer = initCaptcha();
        String captchaText = captchaProducer.createText();
        request.getSession().setAttribute("captcha", captchaText);
        BufferedImage bi = captchaProducer.createImage(captchaText);
        ServletOutputStream outputStream = response.getOutputStream();
        ImageIO.write(bi, "jpg", outputStream);
        try {
            outputStream.flush();
        } catch (Exception e) {
            outputStream.close();
        }
    }

    private Producer initCaptcha() {
        Properties properties = new Properties();
        properties.setProperty("kaptcha.image.witdh", "150");
        properties.setProperty("kaptcha.image.height", "50");
        properties.setProperty("kaptcha.textproducer.char.string", "0123456789");
        properties.setProperty("kaptcha.textproducer.char.length", "4");
        Config config = new Config(properties);
        DefaultKaptcha defaultKaptcha = new DefaultKaptcha();
        defaultKaptcha.setConfig(config);
        return defaultKaptcha;
    }

}