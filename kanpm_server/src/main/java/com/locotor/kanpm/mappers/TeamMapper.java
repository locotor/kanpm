package com.locotor.kanpm.mappers;

import java.util.List;

import com.locotor.kanpm.entities.Team;

import org.apache.ibatis.annotations.Param;

public interface TeamMapper {

    Team getById(String id);

    Team getByName(String teamName);

    List<Team> getTeamListByUserId(String userId);

    int archiveById(String id);

    int insert(Team recode);

    int update(Team recode);

    int insertTeamMembers(@Param("teamId") String teamId, @Param("userIds") String[] userIds);

}