import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'core/services/global.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqClone = request.clone({
      setHeaders: { Authorization: this.globalService.getJWT() },
      url: 'http://localhost:8080/' + request.url
    });
    return next.handle(reqClone);
  }
}
