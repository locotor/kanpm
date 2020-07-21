package com.locotor.kanpm.mappers;

import com.locotor.kanpm.entities.Project;

public interface ProjectMapper {

    Project getById(String id);

    Project getByName(String projectName, String teamId);

    int archiveById(String id);

    int insert(Project recode);

    int update(Project recode);
}