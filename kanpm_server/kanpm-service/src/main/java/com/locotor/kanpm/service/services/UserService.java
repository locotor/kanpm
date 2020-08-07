
package com.locotor.kanpm.service.services;

import com.locotor.kanpm.model.entities.User;
import com.locotor.kanpm.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public int addUser(User user) {
        return userMapper.insert(user);
    }

    public User getUserById(String id) {
        User result = userMapper.getById(id);
        return result;
    }

    public User getUserByUsername(String username) {
        User result = userMapper.getByUsername(username);
        return result;
    }

    public User getUserByUsernameOrEmail(String username) {
        User result = userMapper.getByUsernameOrEmail(username);
        return result;
    }
}