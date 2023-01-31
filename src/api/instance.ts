import axios from "axios";

export const todoInstance = axios.create({
    baseURL: 'http://localhost:3001/todo'
}
)

export const onprogress = axios.create({
    baseURL: "http://localhost:3001/on-progress"
})

export const doneInstance = axios.create({
    baseURL: 'http://localhost:3001/done'
})