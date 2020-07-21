package com.locotor.kanpm.entities;

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

    public Project(String id, String projectName, String ownerId, String teamId, String creatorId, Date createTime) {
        this.id = id;
        this.projectName = projectName;
        this.createTime = createTime;
        this.creatorId = creatorId;
        this.ownerId = ownerId;
        this.isArchived = false;
    }

}