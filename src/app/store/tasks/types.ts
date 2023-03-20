export interface Tasks {
    id: number
    title: string
    body: string
    date: string 
    deadline: string
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
    id: number
    list: Tasks[]
}
export interface TaskEditProps {
    id: number
    list: Tasks[]
    val: Tasks
}