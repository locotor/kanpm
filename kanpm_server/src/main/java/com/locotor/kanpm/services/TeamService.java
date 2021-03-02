package com.locotor.kanpm.services;

import java.util.List;

import com.locotor.kanpm.model.entities.Team;
import com.locotor.kanpm.mappers.TeamMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {
    @Autowired
    TeamMapper teamMapper;

    public Team getTeamById(String teamId) {
        return teamMapper.getById(teamId);
    }

    public Team getTeamByName(String teamName) {
        return teamMapper.getByName(teamName);
    }

    public List<Team> getTeamListByMemberId(String MemberId) {
        return teamMapper.getTeamListByUserId(MemberId);
    }

    public int addTeam(Team team) {
        return teamMapper.insert(team);
    }

    public int updateTeam(Team team) {
        return teamMapper.update(team);
    }

    public int archiveTeam(String teamId) {
        return teamMapper.archiveById(teamId);
    }

    public int insertTeamMembers(String teamId, String[] userIds) {
        return teamMapper.insertTeamMembers(teamId, userIds);
    }
}