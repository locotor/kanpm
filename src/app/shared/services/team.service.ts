import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeam(id: string) {
    return this.http.get('api/team/getTeam/' + id);
  }

  getTeamListByMemberId(memberId: string) {
    return this.http.get('api/team/getTeamListByMemberId', { params: { memberId } });
  }

  addTeam(addTeamParam) {
    return this.http.post('api/team/addTeam', addTeamParam);
  }

  updateTeam(updateTeamParam) {
    return this.http.post('api/team/addTeam', updateTeamParam);
  }

}
