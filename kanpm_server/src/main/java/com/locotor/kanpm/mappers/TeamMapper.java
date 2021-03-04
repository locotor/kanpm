package com.locotor.kanpm.mappers;

import java.util.List;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.locotor.kanpm.model.entities.Team;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Component
public interface TeamMapper extends BaseMapper<Team> {

    Team getById(String id);

    Team getByName(String teamName);

    List<Team> getTeamListByUserId(String userId);

    int archiveById(String id);

    int insert(Team recode);

    int update(Team recode);

    int insertTeamMembers(@Param("teamId") String teamId, @Param("userIds") String[] userIds);

}