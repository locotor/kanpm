package com.locotor.kanpm.mappers;

import com.locotor.kanpm.entities.User;

public interface UserMapper {

    User getById(String id);

    User getByUsername(String username);

    User getByUsernameOrEmail(String userNameOrEmail);

    int insert(User user);
}