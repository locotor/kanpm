import { HttpResponse } from '@angular/common/http';
import { MockRequest } from '@delon/mock';

import * as Mock from 'mockjs';

export const MOCKDATA = {
    'GET api/group-projects': (req: MockRequest) => new HttpResponse({
        body: Mock.mock({
            'data|3': [{
                'id|14': /[a-z][A-Z][0-9]/,
                projectName: /测试项目-\w\d{2}/
            }]
        })
    }),
    'GET api/group-collaborators': (req: MockRequest) => new HttpResponse({
        body: Mock.mock({
            'data|3': [{
                name: /用户-\w\d{2}/
            }]
        })
    }),
};
