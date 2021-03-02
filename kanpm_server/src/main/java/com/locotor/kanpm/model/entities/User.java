package com.locotor.kanpm.model.entities;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import com.baomidou.mybatisplus.annotation.TableField;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.NonNull;
import lombok.ToString;

@Data
@ToString(exclude = "id")
public class User implements UserDetails {

    private static final long serialVersionUID = 1L;

    private String id;

    @NonNull
    @TableField("user_name")
    private String username;

    private String password;

    private String alias;

    private String email;

    private transient Set<Role> roles = new HashSet<>();

    public User(String username) {
        this.username = username;
    }

    public User(String id, String username, String password, String alias, String email) {
        this.id = id;
        this.username = username;
    }

    public User(String id, String username) {
        this.id = id;
        this.username = username;
    }

    public User(String id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}