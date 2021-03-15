import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from 'core/types/response';
import { Team } from 'core/types/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeam(id: string) {
    return this.http.get<ServerResponse<Team | null>>('/api/team/getTeam', { params: { id } });
  }

  verifyTeamName(teamName: string) {
    return this.http.get<ServerResponse<boolean>>('/api/team/verifyTeamName', { params: { teamName } });
  }

  getTeamListByMemberId(memberId: string) {
    return this.http.get<ServerResponse<Team[] | null>>('/api/team/getTeamListByMemberId', { params: { memberId } });
  }

  addTeam(addTeamParam: any) {
    return this.http.post<ServerResponse<boolean>>('/api/team/addTeam', addTeamParam);
  }

  updateTeam(updateTeamParam: any) {
    return this.http.put<ServerResponse<boolean>>('/api/team/updateTeam', updateTeamParam);
  }

}
