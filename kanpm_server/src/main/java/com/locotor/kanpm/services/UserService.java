
package com.locotor.kanpm.services;

import com.locotor.kanpm.model.entities.User;
import com.locotor.kanpm.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserMapper userMapper;

    public int addUser(User user) {
        return userMapper.insert(user);
    }

    @Override
    @Transactional
    public User loadUserByUsername(String username) {
        return userMapper.getByUsername(username);
    }

    public User loadUserById(String id) {
        return userMapper.getById(id);
    }

    public User loadUserByUsernameOrEmail(String username) {
        return userMapper.getByUsernameOrEmail(username);
    }
}