package com.locotor.kanpm.controllers;

import com.locotor.kanpm.model.entities.User;
import com.locotor.kanpm.service.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "getUser/{id}", method = RequestMethod.GET)
    public User GetUser(@PathVariable String id) {
        return userService.getUserById(id);
    }
}