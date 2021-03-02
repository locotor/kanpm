package com.locotor.kanpm.model.entities;

import java.util.Date;

import lombok.Data;
import lombok.NonNull;

@Data
public class Project {

    @NonNull
    private String id;

    private String projectName;

    private String avatar;

    private String ownerId;

    private String teamId;

    private String creatorId;

    private Date createTime;

    private Boolean isArchived;

    private String description;

    public Project(String projectName, String teamId, String creatorId, String ownerId, String description) {
        this.projectName = projectName;
        this.teamId = teamId;
        this.createTime = new Date(new java.util.Date().getTime());
        this.creatorId = creatorId;
        this.ownerId = ownerId;
        this.isArchived = false;
        this.description = description;
    }

    public Project(String id, String teamId, String projectName, String ownerId, Date createTime, String description,
            String avatar) {
        this.id = id;
        this.teamId = teamId;
        this.projectName = projectName;
        this.createTime = createTime;
        this.ownerId = ownerId;
        this.description = description;
        this.avatar = avatar;
    }

    public Project(String id, String teamId) {
        this.id = id;
        this.teamId = teamId;
    }

}