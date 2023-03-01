import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCols, deleteCol, addTask, instance } from '../../../api'
import { Tasks } from '../../types'
import { ColumnState } from './types'

const initialState: ColumnState = {
    cols: [],
    status: 'Loading',
    errorMessage: '',
}

export const fetchColums = createAsyncThunk('colums/fetchColums', getCols)
export const deleteColums = createAsyncThunk('colums/deleteColums', deleteCol)
export const addTaskCols = createAsyncThunk('colums/addTask', addTask)

const columnsSlice = createSlice({
    name: "columns", initialState, reducers: {
        deleteColumns: (state, action) => {
            state.cols = state.cols.filter(
                (el) => el.id !== action.payload
            );
        },
    }, extraReducers: (builder) => {
        builder.addCase(fetchColums.pending, (state) => {
            state.status = 'Loading'
        }).addCase(fetchColums.fulfilled, (state, action) => {
            state.status = 'Loaded'
            state.cols = action.payload
        }).addCase(fetchColums.rejected, (state, action) => {
            state.status = 'Error'
            state.errorMessage = action.error.message
        }).addCase(deleteColums.pending, (state) => {
            state.status = 'Loading'
        }).addCase(deleteColums.fulfilled, (state, action) => {
            state.cols = state.cols.filter(
                (el) => el.id !== action.payload
            )
            state.status = 'Loaded'
        }).addCase(deleteColums.rejected, (state, action) => {
            state.errorMessage = action.error.message
            state.status = 'Error'
        }).addCase(addTaskCols.pending, (state) => {
            state.status = 'Loading'
        }).addCase(addTaskCols.fulfilled, (state, action) => {
            state.cols[action.payload.index].list = [...state.cols[action.payload.index].list, action.payload.newTask]
            state.status = 'Loaded'
        })
    }
})

const { actions, reducer } = columnsSlice;
export default reducer;


export const { } = actions