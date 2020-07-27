package com.locotor.kanpm.model.payloads;

import com.locotor.kanpm.model.entities.UserPrincipal;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {

    private String accessToken;

    private UserPrincipal user;

    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(String token, UserPrincipal principal) {
        this.accessToken = token;
        this.user = principal;
    }

}