import axios from "axios";
import { Tasks } from "../app/types";
import { ColumnProps } from "../pages/Schedule/components/types";

interface Payload {
    id: number
    tasks: Tasks[]
    newTask: Tasks
    index: number
}
export const instance = axios.create({
    baseURL: "http://localhost:3001/columns"
})


export const getCols: () => Promise<ColumnProps[]> = async () => {
    const res = await instance.get('')
    return res.data
}
export const deleteCol = async (id: number) => {
    const res = await instance.delete(String(id))
    return id
}
export const addTask = async ({ id, newTask, tasks, index }: Payload) => {
    const res = await instance.patch(String(id), { list: [...tasks, newTask] })
    return { id, newTask, index }
}
