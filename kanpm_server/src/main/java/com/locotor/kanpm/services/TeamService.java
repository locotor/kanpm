package com.locotor.kanpm.services;

import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.locotor.kanpm.model.entities.Team;
import com.locotor.kanpm.mappers.TeamMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService extends ServiceImpl<TeamMapper, Team> {

    @Autowired
    TeamMapper teamMapper;

    public Team getTeamByName(String teamName) {
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.eq("team_name", teamName);
        return getOne(wrapper);
    }

    public boolean archiveTeam(String teamId) {
        UpdateWrapper<Team> wrapper = new UpdateWrapper<Team>();
        wrapper.set("is_archived",1).eq("team_id",teamId);
        return update(wrapper);
    }

    public List<Team> getTeamListByMemberId(String MemberId) {
        return teamMapper.getTeamListByUserId(MemberId);
    }

    public int insertTeamMembers(String teamId, String[] userIds) {
        return teamMapper.insertTeamMembers(teamId, userIds);
    }
}