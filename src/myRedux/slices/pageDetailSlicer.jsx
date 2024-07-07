import { createSlice } from '@reduxjs/toolkit'

const pageDetailSlice = createSlice({
    name: 'pageDetails',
    initialState: {
        myTotalPage: 1,
        myCurrentPage: 1,
        myPageSize: 6,
        mySiblings: 2,
        myQuarySearching: '',
        myCategoryData: 'general',
    },
    reducers: {
        totalPageFunction: (state, action) => {
            state.myTotalPage = action.payload
        },
        quarySearchFunction: (state, action) => {
            state.myQuarySearching = action.payload
        },
        dropDownFunction: (state, action) => {
            state.myCategoryData = action.payload
        },
        currentPageFunction: (state, action) => {
            state.myCurrentPage = action.payload
        },
        footerCategoryFunction: (state, action) => {
            state.myCategoryData = action.payload
        }
    },

})

export const { quarySearchFunction, dropDownFunction, currentPageFunction, footerCategoryFunction, totalPageFunction } = pageDetailSlice.actions;

export default pageDetailSlice.reducer