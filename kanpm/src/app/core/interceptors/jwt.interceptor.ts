import { Injectable } from '@angular/core';
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
    private globalService: GlobalService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt = this.globalService.getJWT();
    if (!jwt) { return next.handle(request); }
    const reqClone = request.clone({
      setHeaders: { Authorization: jwt }
    });
    return next.handle(reqClone);
  }
}
