import { createSlice } from "@reduxjs/toolkit";

const pageDetailSlice = createSlice({
  name: "pageDetails",
  initialState: {
    myTotalPage: 1,
    myCurrentPage: 1,
    myPageSize: 6,
    mySiblings: 2,
    myQuarySearching: "",
    myCategoryData: "general",
  },
  reducers: {
    totalPageFn: (state, action) => {
      state.myTotalPage = action.payload;
    },
    quarySearchFn: (state, action) => {
      state.myQuarySearching = action.payload;
    },
    dropDownFn: (state, action) => {
      state.myCategoryData = action.payload;
    },
    currentPageFn: (state, action) => {
      state.myCurrentPage = action.payload;
    },
    footerCategoryFn: (state, action) => {
      state.myCategoryData = action.payload;
    },
  },
});

export const {
  quarySearchFn,
  dropDownFn,
  currentPageFn,
  footerCategoryFn,
  totalPageFn,
} = pageDetailSlice.actions;

export default pageDetailSlice.reducer;
