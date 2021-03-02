package com.locotor.kanpm.model.entities;

import lombok.Data;
import lombok.NonNull;

@Data
public class Role {
    @NonNull
    private String id;
    
    @NonNull
    private String roleName;
}