import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'shared/shared.module';
import { TaskStackComponent } from './task-stack.component';

export default {
    title: '组件/任务列表',
    decorators: [
        moduleMetadata({
            imports: [
                SharedModule
            ],
        })
    ]
};

const Template = (args: TaskStackComponent) => ({
    component: TaskStackComponent,
    props: args,
});

export const empty = Template.bind({});
empty.storyName = '空列表';
