import { moduleMetadata } from "@storybook/angular";
import { SharedModule } from "shared/shared.module";
import { TaskCardComponent } from "./task-card.component";

export default {
    title: '组件/任务卡',
    component: TaskCardComponent,
    decorators: [
        moduleMetadata({
            imports: [SharedModule],
        })
    ]
}

const Template = (args: TaskCardComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    task: { name: '测试任务' }
};