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

export interface UserInStorage {
    id: string;
    email: string;
    alias: string;
    avator?: string;
    token: string;
}