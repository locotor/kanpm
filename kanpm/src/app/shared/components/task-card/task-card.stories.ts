import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from 'shared/third-parties/material.module';
import { ZorroModule } from 'shared/third-parties/zorro.module';
import { TaskCardComponent } from './task-card.component';

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
        isComplete: false,
        subTasks: [
            {
                isComplete: true,
            },
            {
                isComplete: false,
            }
        ],
        priority: 'low',
        description: `task test: Some description about this task,
    if this description too long to display, it
    will be slice with...`,
        endTime: new Date().getTime(),
        remindTime: new Date().getTime(),
        repeat: 'daily',
    }
};
