package com.locotor.kanpm.web.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.locotor.kanpm.web.common.ResponseData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {

        ResponseData responseData = new ResponseData();
        // 创建token
        String token = jwtTokenProvider.generateToken(authentication);
        responseData.setData(token);
        response.setCharacterEncoding("utf-8");
        response.setHeader("WWW-Authenticate", JwtTokenProvider.TOKEN_PREFIX + token);
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getWriter(), responseData);
    }

}
