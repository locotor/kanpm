export interface Project {
    id: string;
    teamId: string;
    avatar?: string;
    projectName: string;
    description?: string;
    ownerId: string;
    creatorId: string;
    expectedStartDate?: Date;
    expectedCompletionDate?: Date;
    createTime: Date;
    isArchived: boolean;
    archiveTime?: Date;
}
