
package com.locotor.kanpm.services;

import com.locotor.kanpm.entities.User;
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
        var result = userMapper.getById(id);
        return result;
    }

    public User getUserByUsername(String username) {
        var result = userMapper.getByUsername(username);
        return result;
    }

    public User getUserByUsernameOrEmail(String username) {
        var result = userMapper.getByUsernameOrEmail(username);
        return result;
    }
}