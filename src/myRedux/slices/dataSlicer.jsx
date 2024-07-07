import { createSlice } from '@reduxjs/toolkit'
import fetchData from '../functions/fetchData'

const dataSlice = createSlice({
    name: 'newsData',
    initialState: {
        error: null,
        isLoading: false,
        myNewsApiData: {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.myNewsApiData = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default dataSlice.reducer