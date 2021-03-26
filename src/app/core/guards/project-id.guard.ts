import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { ProjectService } from 'core/services/project.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectIdGuard implements CanLoad {

    constructor(private projectApi: ProjectService) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const projectId = segments[1].path;
        if (!projectId) { return false; }
        return this.projectApi.getProject(projectId).pipe(
            map(resp => {
                return resp.code === '20000' ? true : false;
            })
        );
    }

}
