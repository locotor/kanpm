interface MentionedFlag {
    type: 'file' | 'task' | 'collaborator';
    id: string;
    label: string;
}

export interface TaskGroup {
    id: string;
    groupName: string;
}

export interface TaskList {
    id: string;
    name: string;
    index: number;
}

export interface Task {
    id: string;
    isComplete: boolean;
    description: string;
    index?: number;
    subTasks?: Task[];
    priority?: 'high' | 'normal' | 'low';
    principalUserId?: string;
    endTime?: number;
    repeat?: 'daily' | 'workday' | 'weekly' | 'monthly' | 'yearly';
    remindTime?: number;
    remark?: string;
    attachments?: string[];
    tags?: number[];
    createdTime?: number;
    completedTime?: number;
    collaboratorsId?: string[];
}

export enum TaskRepeat {

}

export interface Tag {
    id: number;
    name: string;
    color: string;
}

export interface Comment {
    id: string;
    taskId: string;
    creatorId: string;
    content: string;
    createdTime: number;
    mentionedFlags: MentionedFlag[];
}
