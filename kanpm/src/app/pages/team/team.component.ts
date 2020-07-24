import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TeamService } from 'shared/services/team.service';
import { GlobalService } from 'shared/services/global.service';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  private teamId: string;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private globalService: GlobalService
  ) { }

  relevantNavs = [
    { name: '首页', icon: 'home' },
    { name: '我执行的', icon: 'how_to_reg' },
    { name: '我参与的', icon: 'person_add' },
    { name: '我创建的', icon: 'post_add' },
  ];

  collaborators = [];

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.globalService.currentTeamId = teamId;
    this.globalService.currentTeam$ = this.teamService.getTeam(teamId);
  }

}
