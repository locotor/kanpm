import {
    HttpErrorResponse, HttpHandler,
    HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageService } from 'core/services/message.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
        private router: Router,
        private message: MessageService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                // 网络错误处理
                return this.handleHttpError(err);
            }),
        );
    }

    private handleHttpError(err: HttpErrorResponse) {
        // 构造错误信息。
        let errorData: { message: string; };
        if (err.error.message) {
            errorData = { message: err.error.message };
        } else if (CODE_MESSAGE.has(err.status)) {
            errorData = { message: CODE_MESSAGE.get(err.status) || '' };
        } else {
            errorData = { message: '未知错误，请联系管理员' };
        }

        this.message.openMessage(errorData.message);

        // 特定网络错误，跳转到提示页
        switch (err.status) {
            case 401:
                this.goTo('/authentication/sign-in');
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

    private goTo(url: string): void {
        // 在下个执行周期开始时执行跳转
        setTimeout(() => this.router.navigateByUrl(url));
    }
}
