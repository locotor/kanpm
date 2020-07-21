package com.locotor.kanpm.entities;

import java.util.HashSet;
import java.util.Set;

import lombok.Data;
import lombok.NonNull;
import lombok.ToString;

@Data
@ToString(exclude = "id")
public class User {

    @NonNull
    private String id;

    @NonNull
    private String username;

    private String alias;

    private String email;

    private String password;

    private Set<Role> roles = new HashSet<>();

    public User(String id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

}