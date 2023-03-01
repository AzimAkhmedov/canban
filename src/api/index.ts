import axios from "axios";
import { Tasks } from "../app/types";
import { ColumnProps } from "../pages/Schedule/components/types";

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
export const addTask = async (id: number) => {
    const res = await instance.get(String(id))
    return res.data
}