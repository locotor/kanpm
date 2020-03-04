export interface Project {
    id: string;
    projectName: string;
    description?: string;
    projectManager: string;
    organizationalUnit: string;
    expectedStartDate?: number;
    expectedCompletionDate?: number;
    createTime: number;
    projectTeam: string[];
    isArchived: boolean;
    archiveTime: number;
}
