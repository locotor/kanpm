import { HttpResponse } from '@angular/common/http';
import { MockRequest } from '@delon/mock';

import * as Mock from 'mockjs';

export const MOCKDATA = {
    'GET api/projects': (req: MockRequest) => new HttpResponse({
        body: Mock.mock({
            'data|3': [{
                projectName: '@ctitle'
            }]
        })
    }),
};
