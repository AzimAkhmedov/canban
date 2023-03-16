import { Tasks, TasksAddingProps, TasksDeletingProps, TasksState } from "./types";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from "../../../shared/api/instance";
export const initialState: TasksState = {
    data: [],
    loading: "Loading",
    error: undefined
}

export const fetchingTasks = createAsyncThunk("tasks/fetch", async () => {
    const { data } = await instance.get('tasks')
    return data
})

export const addingTask = createAsyncThunk("tasks/addingTask", async (task: Tasks) => {
    const { data } = await instance.post("tasks", task);
    return { data, task };
})

export const deletingTask = createAsyncThunk("tasks/deletingTask", async ({ id, list }: TasksDeletingProps) => {
    const { data } = await instance.delete('tasks/' + id)
    return { data, id, list }
})

export const editingTask = createAsyncThunk("tasks/editingTask", async (id, val) => {
    const { data } = await instance.patch("tasks/" + id, val)
    return { id, val, data }
})
const tasksSlice = createSlice({
    name: "tasks", initialState, reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(fetchingTasks.pending, (state, action) => {
            state.loading = 'Loading'
        }).addCase(fetchingTasks.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = "Loaded"
        }).addCase(fetchingTasks.rejected, (state) => {
            state.error = "Sorry, something went wrong there! Checkout your connection"
            state.loading = "Loaded"

        }).addCase(addingTask.pending, (state) => {
            state.loading = "Loading"
        }).addCase(addingTask.fulfilled, (state, action) => {
            state.loading = 'Loaded'
            state.data.push(action.payload.task)
        }).addCase(addingTask.rejected, (state) => {
            state.loading = 'Loaded'
            state.error = "Sorry, something went wrong there! Checkout your connection"
        }).addCase(deletingTask.pending, (state, action) => {
            state.loading = "Loading"
        }).addCase(deletingTask.fulfilled, (state, action) => {
            state.loading = "Loaded"
            state.data = action.payload.list
        }).addCase(deletingTask.rejected, (state) => {
            state.loading = "Loaded"
            state.error = "Error by deleting"
        })
    }
})

const { actions, reducer } = tasksSlice

export default reducer