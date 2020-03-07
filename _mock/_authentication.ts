import { MockRequest } from '@delon/mock';
import { HttpResponse } from '@angular/common/http';
import * as Mock from 'mockjs';

export const AuthenticationMockData = {
    'POST api/verify-username': (req: MockRequest) => new HttpResponse({
        body: Mock.mock({
            'data|1': true
        })
    })
};
