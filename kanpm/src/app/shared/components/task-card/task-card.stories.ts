import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { TaskCardComponent } from './task-card.component';

export const defaultTasksData = {
    description: `task test: Some description about this task`,
    endTime: new Date().getTime(),
};

export default {
    title: '组件/任务卡',
    excludeStories: /.*Data$/,
    component: TaskCardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                SharedModule
            ],
        })
    ]
} as Meta;

const Template = (args: TaskCardComponent) => ({
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
