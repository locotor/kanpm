package com.locotor.kanpm.model.entities;

import java.sql.Date;

import lombok.Data;
import lombok.NonNull;

@Data
public class Team {
    
    @NonNull
    private String id;

    private String teamName;

    private Date createTime;

    private String creatorId;

    private String ownerId;

    private String description;

    public Team(String teamName, String ownerId, String description) {
        this.teamName = teamName;
        this.ownerId = ownerId;
        this.description = description;
        this.createTime = new Date(new java.util.Date().getTime());
    }

    public Team(String id, String teamName, String ownerId, String description) {
        this.id = id;
        this.teamName = teamName;
        this.ownerId = ownerId;
        this.description = description;
        this.createTime = new Date(new java.util.Date().getTime());
    }

    public Team(String id, String teamName, Date createTime, String creatorId, String ownerId, String description) {
        this.id = id;
        this.teamName = teamName;
        this.createTime = createTime;
        this.creatorId = creatorId;
        this.ownerId = ownerId;
        this.description = description;
    }

}