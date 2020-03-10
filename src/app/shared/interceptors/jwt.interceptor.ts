import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'shared/services/global.service';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqClone = request.clone({ setHeaders: { Authorization: this.globalService.jwt } });
    return next.handle(reqClone).pipe(
      filter(event => event instanceof HttpResponse),
      tap((event: HttpResponse<any>) => {
        if (event.body.code === '10001') {
          this.router.navigate(['/authentication']);
        }
      })
    );
  }
}
