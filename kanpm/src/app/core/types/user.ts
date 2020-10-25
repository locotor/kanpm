export interface User {
    id: string;
    userName: string;
    isVerified: boolean;
    createdTime: number;
    alias?: string;
    avator?: string;
    mobileNumber?: string;
    email?: string;
    lastGroupId?: string;
    groups?: string[];
}