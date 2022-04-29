import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { defaultTasksData, fullInfo } from '../task-card/task-card.component.stories';
import { TaskStackComponent } from './task-stack.component';

export default {
    title: '任务列表',
    excludeStories: /.*Data$/,
    component: TaskStackComponent,
    decorators: [
        moduleMetadata({
            imports: [SharedModule]
        }),
        (storyFunc) => {
            const story = storyFunc();
            return {
                ...story,
                template: `<div style="height: 720px; padding:20px">${story.template}</div>`,
            };
        },
    ]
} as Meta;

// 模拟数据
export const defaultTasksListData = [
    { ...defaultTasksData, isComplete: true, id: '1', title: 'Task 1' },
    { ...defaultTasksData, id: '2', title: 'Task 2' },
];

const Template = (args: TaskStackComponent) => ({
    props: args
});

export const defaultStatus: any = Template.bind({});
defaultStatus.storyName = '默认状态';
defaultStatus.args = {
    stack: { name: 'Todo' },
    tasks: defaultTasksListData
};

export const overflowStatus: any = Template.bind({});
overflowStatus.storyName = '滚动条';
overflowStatus.args = {
    stack: { name: 'Many Task' },
    tasks: [
        ...defaultTasksListData,
        {
            ...fullInfo.args.task,
            priority: '', id: '3', title: 'Task 3'
        },
        {
            ...fullInfo.args.task,
            priority: 'normal', id: '4', title: 'Task 4'
        },
        { ...fullInfo.args.task, id: '5', title: 'Task 5' },
        {
            ...fullInfo.args.task,
            priority: '', id: '6', title: 'Task 6'
        },
        {
            ...fullInfo.args.task,
            priority: 'high', id: '7', title: 'Task 7'
        },
        { ...fullInfo.args.task, id: '7', title: 'Task 7' },
    ]
};

export const empty: any = Template.bind({});
empty.storyName = '空列表';
empty.args = {
    stack: { name: 'Empty' },
    tasks: []
};

export const isLoading: any = Template.bind({});
isLoading.storyName = '加载中';
isLoading.args = {
    stack: { name: 'Empty' },
    tasks: [],
    isLoading: true
};

