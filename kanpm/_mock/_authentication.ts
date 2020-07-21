import { MockRequest } from '@delon/mock';
import { HttpResponse } from '@angular/common/http';
import * as Mock from 'mockjs';

export const AuthenticationMockData = {
    'POST api/auth/login': (req: MockRequest) => new HttpResponse({
        body: {
            accessToken: Mock.Random.id(),
            user: Mock.mock({
                'id|14': /[a-z][A-Z][0-9]/,
                userName: /测试项目-\w\d{2}/,
                isVerified: true,
                createdTime: new Date().getTime(),
            })
        }
    }),

    'POST api/verify-username': (req: MockRequest) => new HttpResponse({
        body: {
            code: '20000',
            data: Mock.mock({
                'isUnique|1': true
            })
        }
    })
};
