import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCols } from '../../../api'
import { ColumnState } from './types'

const initialState: ColumnState = {
    cols: [],
    status: 'Loading',
    errorMessage: '',
}
export const fetchColums = createAsyncThunk('colums/fetchColums', getCols)

const columnsSlice = createSlice({
    name: "columns", initialState, reducers: {
        deleteCol: (state, action) => {
            state.cols = state.cols.filter(
                (el) => el.id !== action.payload
            );
        }
    }, extraReducers: (builder) => {
        builder.addCase(fetchColums.pending, (state) => {
            state.status = 'Loading'
        }).addCase(fetchColums.fulfilled, (state, actions) => {
            state.status = 'Loaded'
            state.cols = actions.payload
        }).addCase(fetchColums.rejected, (state, actions) => {
            state.status = 'Error'
            state.errorMessage = actions.error.message
        })
    }
})

const { actions, reducer } = columnsSlice;
export default reducer;

