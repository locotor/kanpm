package com.locotor.kanpm.service.services;

import java.util.List;

import com.locotor.kanpm.model.entities.Project;
import com.locotor.kanpm.mappers.ProjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    ProjectMapper projectMapper;

    public Project getProjectById(String projectId) {
        return projectMapper.getById(projectId);
    }

    public Project getProjectByName(String projectName, String teamId) {
        return projectMapper.getByName(projectName, teamId);
    }

    public List<Project> getProjectListByTeamId(String teamId) {
        return projectMapper.getProjectListByTeamId(teamId);
    }

    public int addProject(Project project) {
        return projectMapper.insert(project);
    }

    public int updateProject(Project project) {
        return projectMapper.update(project);
    }

    public int archiveProject(String projectId) {
        return projectMapper.archiveById(projectId);
    }

}