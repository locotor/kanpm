package com.locotor.kanpm.controllers;

import com.locotor.kanpm.entities.Team;
import com.locotor.kanpm.payloads.AddTeamRequest;
import com.locotor.kanpm.payloads.ApiResponse;
import com.locotor.kanpm.payloads.UpdateTeamRequest;
import com.locotor.kanpm.security.UserPrincipal;
import com.locotor.kanpm.services.TeamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/team")
public class TeamController extends ControllerBase {

    @Autowired
    private TeamService teamService;

    @GetMapping("getTeam")
    public ResponseEntity<?> getTeam(String id) {
        Team team = teamService.getTeamById(id);
        var resp = new ApiResponse(true, "Add team successfully");
        resp.setData(team);
        return ResponseEntity.ok(resp);
    }

    @GetMapping("/verifyTeamName")
    public ResponseEntity<?> verifyTeamName(String teamName) {
        if (teamName.isBlank()) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "parameter should not be blank"));
        }
        Team teamTest = teamService.getTeamByName(teamName);
        if (teamTest != null) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

    @GetMapping("getTeamListByMemberId")
    public ResponseEntity<?> getTeamListByMemberId(String memberId) {
        var teamList = teamService.getTeamListByMemberId(memberId);
        var resp = new ApiResponse(true, "get team list successfully");
        resp.setData(teamList);
        return ResponseEntity.ok(resp);
    }

    @PostMapping("addTeam")
    public ResponseEntity<?> addTeam(@RequestBody AddTeamRequest request) {
        Team teamTest = teamService.getTeamByName(request.getTeamName());
        if (teamTest != null) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Team name is already taken!"));
        }

        UserPrincipal currentUser = getCurrentUser();
        if (currentUser == null) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "need to signin first!"));
        }

        String currentUserId = currentUser.getId();
        Team team = new Team(request.getTeamName(), currentUser.getId(), request.getDescription());
        team.setCreatorId(currentUserId);
        int insertResult = teamService.addTeam(team);

        if (insertResult > 0) {
            String insertTeamId = team.getId();
            int insertTeamMemberResult = this.teamService.insertTeamMembers(insertTeamId,
                    new String[] { currentUserId });
            if (insertTeamMemberResult > 0) {
                return ResponseEntity.ok(new ApiResponse(true, "Add team successfully"));
            }
        }
        return ResponseEntity.badRequest().body(new ApiResponse(false, "Add team failed"));
    }

    @PutMapping("updateTeam")
    public ResponseEntity<?> updateTeam(@RequestBody UpdateTeamRequest request) {
        String teamId = request.getId();
        if (teamId.isBlank()) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Team id must not be null"));
        }

        Team teamTest = teamService.getTeamByName(request.getTeamName());
        if (teamTest != null) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Team name is already taken!"));
        }

        Team team = new Team(teamId, request.getTeamName(), request.getOwnerId(), request.getDescription());
        int updateResult = teamService.updateTeam(team);

        if (updateResult > 0) {
            return ResponseEntity.ok(new ApiResponse(true, "update team successfully"));
        } else {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "update team failed"));
        }
    }

    @PutMapping("archiveTeam")
    public ResponseEntity<?> archiveTeam(@RequestBody UpdateTeamRequest request) {
        String teamId = request.getId();
        if (teamId.isBlank()) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "Team id must not be null"));
        }

        int updateResult = teamService.archiveTeam(teamId);
        if (updateResult > 0) {
            return ResponseEntity.ok(new ApiResponse(true, "archive team successfully"));
        } else {
            return ResponseEntity.badRequest().body(new ApiResponse(false, "archive team failed"));
        }
    }

}