export interface Tasks {
    id: number
    title: string
    body: string
    date: string
}
export interface TasksState {
    data: Tasks[]
    loading: string
    error?: string
}
export interface TasksAddingProps {
    title: string
    body: string
    date: string
}
export interface TasksDeletingProps {
    id: number,
    list: Tasks[]
}