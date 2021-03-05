package com.locotor.kanpm.mappers;

import java.util.List;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.locotor.kanpm.model.entities.Team;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
public interface TeamMapper extends BaseMapper<Team> {

    List<Team> getTeamListByUserId(String userId);

    int insertTeamMembers(@Param("teamId") String teamId, @Param("userIds") String[] userIds);

}