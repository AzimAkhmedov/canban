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
