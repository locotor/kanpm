export interface ServerResponse<T> {
    code: string;
    message: string;
    data: T;
}
