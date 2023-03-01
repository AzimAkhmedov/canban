import axios from "axios";
import { ColumnProps } from "../pages/Schedule/components/types";

export const instance = axios.create({
    baseURL: "http://localhost:3001/"
})


export const getCols: () => Promise<ColumnProps[]> = async () => {
    const res = await instance.get('columns')
    return res.data
}