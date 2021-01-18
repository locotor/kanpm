import { HttpClientModule } from "@angular/common/http";
import { moduleMetadata } from "@storybook/angular";
import { SharedModule } from "shared/shared.module";
import { TaskDetailComponent } from "./task-detail.component";

export default {
    title: '组件/任务详情',
    decorators: [
        moduleMetadata({
            imports: [
                HttpClientModule,
                SharedModule
            ],
        })
    ]
};

const Template = (args: TaskDetailComponent) => ({
    component: TaskDetailComponent,
    props: args,
});

export const fullInfo = Template.bind({});
