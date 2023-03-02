import axios from "axios";
import { Tasks, Columns } from "../app/types";

interface Payload {
    id: number
    tasks: Tasks[]
    newTask: Tasks
    index: number
}
export const instance = axios.create({
    baseURL: "http://localhost:3001/columns"
})


export const getCols: () => Promise<Columns[]> = async () => {
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
