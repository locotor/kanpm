package com.locotor.kanpm.services;

import java.util.HashMap;
import java.util.List;

import com.locotor.kanpm.model.entities.Project;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.locotor.kanpm.mappers.ProjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService extends ServiceImpl<ProjectMapper, Project> {

    @Autowired
    ProjectMapper projectMapper;

    public Project getProjectByName(String projectName, String teamId) {
        QueryWrapper<Project> wrapper = new QueryWrapper<>();
        HashMap<String, Object> condition = new HashMap<>();
        condition.put("project_name", projectName);
        condition.put("team_id", teamId);
        wrapper.allEq(condition);
        return getOne(wrapper);
    }

    public List<Project> getProjectListByTeamId(String teamId) {
        return projectMapper.getProjectListByTeamId(teamId);
    }

    public boolean archiveProject(String id) {
        UpdateWrapper<Project> wrapper = new UpdateWrapper<>();
        wrapper.set("is_archived", 1).eq("id", id);
        return update(wrapper);
    }

}