package com.locotor.kanpm.mappers;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.locotor.kanpm.model.entities.User;

import org.springframework.stereotype.Component;

@Component
public interface UserMapper extends BaseMapper<User> {

    User getById(String id);

    User getByUsername(String username);

    User getByUsernameOrEmail(String userNameOrEmail);

    int insert(User user);
}