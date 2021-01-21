import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { TaskCardComponent } from './task-card.component';

export const defaultTasksData = {
    description: `task test: Some description about this task`,
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

export const basicInfo = Template.bind({});
basicInfo.args = {
    task: { ...defaultTasksData }
};
basicInfo.storyName = '基本信息';

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
        endTime: new Date().getTime(),
        remindTime: new Date().getTime(),
        repeat: 'daily',
    }
};
fullInfo.storyName = '完整信息';

export const completeTask = Template.bind({});
completeTask.args = {
    task: { ...defaultTasksData, isComplete: true }
};
completeTask.storyName = '已完成状态';
