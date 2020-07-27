package com.locotor.kanpm.mapper.mappers;

import java.util.List;

import com.locotor.kanpm.model.entities.Project;

public interface ProjectMapper {

    Project getById(String id);

    Project getByName(String projectName, String teamId);

    List<Project> getProjectListByTeamId(String teamId);

    int archiveById(String id);

    int insert(Project recode);

    int update(Project recode);
}