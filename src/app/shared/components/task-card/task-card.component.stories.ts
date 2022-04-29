import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { TaskCardComponent } from './task-card.component';

export const defaultTasksData = {
    description: `test: description about this task`,
};

export default {
    title: '任务卡',
    excludeStories: /.*Data$/,
    component: TaskCardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                SharedModule
            ],
        })
    ],
    argTypes: {
        task: {
            description: '任务信息对象，包含当前任务的所有信息',
            type: {
                required: true
            },
            table: {
                type: {
                    summary: 'Task',
                },
                defaultValue: {
                    summary: 'null'
                }
            },
        }
    }
} as Meta;

const Template = (args: TaskCardComponent) => ({
    props: args,
});

export const basicInfo: any = Template.bind({});
basicInfo.args = {
    task: { ...defaultTasksData }
};
basicInfo.storyName = '基本信息';

export const completeTask: any = Template.bind({});
completeTask.args = {
    task: { ...defaultTasksData, isComplete: true }
};
completeTask.storyName = '已完成状态';

export const fullInfo: any = Template.bind({});
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
