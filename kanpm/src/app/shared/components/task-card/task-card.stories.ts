import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from 'shared/third-parties/material.module';
import { ZorroModule } from 'shared/third-parties/zorro.module';
import { TaskCardComponent } from './task-card.component';

export const defaultTasksData = {
    description: `task test: Some description about this task`,
    endTime: new Date().getTime(),
};

export default {
    title: '组件/任务卡',
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                HttpClientModule,
                MaterialModule,
                ZorroModule
            ],
        })
    ]
};

const Template = (args: TaskCardComponent) => ({
    component: TaskCardComponent,
    props: args,
});

export const fullInfo = Template.bind({});
fullInfo.args = {
    task: {
        ...defaultTasksData,
        isComplete: false,
        subTasks: [
            { isComplete: true, },
            { isComplete: false, }
        ],
        priority: 'low',
        remindTime: new Date().getTime(),
        repeat: 'daily',
    }
};
fullInfo.storyName = '完整信息';
