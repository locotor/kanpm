import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from 'core/services/global.service';
import { TeamService } from 'core/services/team.service';

@Component({
  templateUrl: './team-root.component.html',
  styleUrls: ['./team-root.component.scss']
})
export class TeamRootComponent implements OnInit {

  private teamId?: string;

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
    // FIXME 用路由参数跳转
    // const teamId = this.route.snapshot.paramMap.get('teamId');
    // this.globalService.currentTeamId = teamId;
    // this.globalService.currentTeam$ = this.teamService.getTeam(teamId);
  }

}
