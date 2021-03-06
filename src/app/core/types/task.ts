interface MentionedFlag {
    type: 'file' | 'task' | 'collaborator';
    id: string;
    label: string;
}

export interface TaskGroup {
    id: string;
    groupName: string;
}

export interface TaskStack {
    id: string;
    stackName: string;
    projectId: string;
    creatorId: string;
    createTime: Date;
    nextId?: string;
    sortBy?: number;
}

export interface Task {
    id: string;
    stackId: string;
    isComplete: boolean;
    description: string;
    nextId?: string;
    priority?: number;
    principalUserId?: string;
    endTime?: number;
    remark?: string;
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
