export interface Columns {
    id: number;
    title: string;
    list: Tasks[];
}
export interface Tasks {
    id: number;
    title: string;
    body: string;
}