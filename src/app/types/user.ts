export interface User {
    id: string;
    userName: string;
    password: string;
    alias: string;
    avator: string;
    phone: string;
    email: string;
    isVerified: boolean;
    createdTime: number;
    groups: string[];
}
