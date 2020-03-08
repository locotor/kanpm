export interface User {
    id: string;
    userName: string;
    alias?: string;
    avator?: string;
    mobileNumber?: string;
    email?: string;
    isVerified: boolean;
    createdTime: number;
    groups?: string[];
}
