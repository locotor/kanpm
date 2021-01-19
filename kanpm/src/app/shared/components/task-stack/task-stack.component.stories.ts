import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { defaultTasksData } from '../task-card/task-card.stories';
import { TaskStackComponent } from './task-stack.component';

export default {
    title: '组件/任务列表',
    excludeStories: /.*Data$/,
    component: TaskStackComponent,
    decorators: [
        moduleMetadata({
            imports: [SharedModule]
        })
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

export const defaultStatus = Template.bind({});
defaultStatus.args = {
    tasks: defaultTasksListData
};
defaultStatus.storyName = '默认状态';

export const overflowStatus = Template.bind({});
overflowStatus.args = {
    tasks: [
        ...defaultTasksListData,
        { ...defaultTasksData, id: '3', title: 'Task 3' },
        { ...defaultTasksData, id: '4', title: 'Task 4' },
        { ...defaultTasksData, id: '5', title: 'Task 5' },
        { ...defaultTasksData, id: '6', title: 'Task 6' }
    ]
};
overflowStatus.decorators = [
    (storyFunc) => {
        const story = storyFunc();
        return {
            ...story,
            template: `<div style="height: 800px; padding:20px">${story.template}</div>`,
        };
    },
];
overflowStatus.storyName = '滚动条';

export const empty = Template.bind({});
empty.storyName = '空列表';
empty.args = {
    tasks: []
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true
};
isLoading.storyName = '加载中';

