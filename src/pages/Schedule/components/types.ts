export interface TaskProps {
    id: number;
    title: string;
    body: string;
}
export interface ColumnProps {
    id: number;
    title: string;
    list: TaskProps[];
}