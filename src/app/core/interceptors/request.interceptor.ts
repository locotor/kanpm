import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const reqClone = request.clone({
            url: environment.SERVER_URL + request.url
        });
        return next.handle(reqClone);
    }
}
