export interface Project {
    projectName: string;
    description?: string;
    projectSponsor: string;
    projectManager: string;
    organizationalUnit: string;
    expectedStartDate?: number;
    expectedCompletionDate?: number;
    createTime: number;
    projectTeam: string[];
    isArchived: boolean;
}
