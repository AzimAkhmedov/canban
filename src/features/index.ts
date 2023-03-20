import { instance } from "../shared/api/instance"
import { Task } from "../shared/models"

export const getSingleTask = async (id: number) => {
    const { data } = await instance.get("tasks/" + id)
    return data
}

export const filterTask = (tasks: Task[], val: Task, id: number) => {
    return tasks.forEach(el => {
        if (el.id == id) {
            el = val
        }
    })
}