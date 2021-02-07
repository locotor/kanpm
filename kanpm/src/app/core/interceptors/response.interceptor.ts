import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServerResponse } from 'core/types/response';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

const CODE_MESSAGE = new Map([
    [200, '服务器成功返回请求的数据'],
    [201, '新建或修改数据成功'],
    [202, '请求已经进入后台排队（异步任务）'],
    [204, '删除数据成功'],
    [400, '发出的请求有错误，服务器没有进行新建或修改数据的操作'],
    [401, '用户没有权限（令牌、用户名、密码错误）'],
    [403, '用户得到授权，但是访问是被禁止的'],
    [404, '发出的请求针对的是不存在的记录，服务器没有进行操作'],
    [406, '请求的格式不可得'],
    [410, '请求的资源被永久删除，且不会再得到的'],
    [422, '当创建对象时，发生一个验证错误'],
    [500, '服务器发生错误，请检查服务器'],
    [502, '网关错误'],
    [503, '服务不可用，服务器暂时过载或维护'],
    [504, '网关超时'],
]);

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            mergeMap((ev) => {
                if (ev instanceof HttpResponse) {
                    // 请求成功 status >= 200 && ev.status < 300
                    return this.handleServerStatus(ev);
                }
                return of(ev);
            }),
            catchError((err: HttpErrorResponse) => {
                // 网络错误处理
                return this.handleHttpError(err);
            }),
        );
    }

    private handleHttpError(err: HttpErrorResponse) {
        // 构造错误信息。
        let errorData: { message: string; };
        if (CODE_MESSAGE.has(err.status)) {
            errorData = { message: CODE_MESSAGE.get(err.status) };
        } else {
            errorData = { message: '未知错误，请联系管理员' };
        }

        // TODO 发出错误信息事件，由弹窗服务注册
        console.error('HTTP错误', errorData.message);

        // 特定网络错误，跳转到提示页
        switch (err.status) {
            case 401:
                this.goTo('/authentication');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${err.status}`);
                break;
        }

        // 抛出异常消息
        return throwError(errorData);
    }

    private handleServerStatus(ev: HttpResponse<ServerResponse<any>>): Observable<any> {
        const body = ev.body;
        if (body && body.code === '20000') {
            return of({ data: body.data });
        } else {
            //TODO 业务层报错，弹窗提示后端错误信息。
            console.warn('服务出错:', body.message);
            return of(null);
        }
    }

    private goTo(url: string): void {
        // 在下个执行周期开始时执行跳转
        setTimeout(() => this.router.navigateByUrl(url));
    }
}
