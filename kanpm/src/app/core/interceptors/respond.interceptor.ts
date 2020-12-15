import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

const CODEMESSAGE: { [key: number]: string } = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

@Injectable()
export class RespondInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        // private snackBar: MatSnackBar
    ) { }

    private goTo(url: string): void {
        setTimeout(() => this.router.navigateByUrl(url));
    }

    private checkStatus(ev: HttpResponseBase): void {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }

        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        // this.snackBar.open(`请求错误 ${ev.status}: ${ev.url} -- ${errortext}`, null, {
        //     duration: 3000
        // });
    }

    private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理,例如响应内容：
                //  错误内容：{ code: 40001, msg: '非法参数' }
                //  正确内容：{ code: 20000, response: {  } }
                if (ev instanceof HttpResponse) {
                    const body = ev.body;
                    if (body && body.code !== '20000') {
                        // this.snackBar.open(body.msg);
                        // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                        // this.http.get('/').subscribe() 并不会触发
                        return throwError({ msg: body.msg });
                    } else {
                        // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                        return of(new HttpResponse(Object.assign(ev, { body: body.response })));
                    }
                }
                break;
            case 401:
                this.goTo('/authentication');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${ev.status}`);
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('未知错误，大部分是由于后端不支持跨域CORS或无效配置引起', ev);
                }
                break;
        }
        if (ev instanceof HttpErrorResponse) {
            return throwError(ev);
        } else {
            return of(ev);
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            mergeMap((ev) => {
                // 允许统一对请求错误处理
                if (ev instanceof HttpResponseBase) {
                    return this.handleData(ev, req, next);
                }
                // 若一切都正常，则后续操作
                return of(ev);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err, req, next)),
        );
    }
}
