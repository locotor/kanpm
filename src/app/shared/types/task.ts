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
    listName: string;
    taskCount: number;
    completedTaskCount: number;
    index: number;
}

export interface Task {
    id: string;
    taskName: string;
    principalUserId: string;
    startTime: number;
    endTime: number;
    completedTime: number;
    tags: string[];
    description: string;
    createdTime: number;
    collaboratorsId: string[];
}

export interface Tag {
    id: string;
    name: string;
    color: string;
    isInCommonUse: boolean;
}

export interface Comment {
    id: string;
    taskId: string;
    creatorId: string;
    content: string;
    createdTime: number;
    mentionedFlags: MentionedFlag[];
}
