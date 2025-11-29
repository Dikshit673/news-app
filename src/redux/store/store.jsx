// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { configureStore } from "@reduxjs/toolkit";
import data from "../slices/dataSlicer";
import pageDetails from "../slices/pageDetailSlicer";
import favPageDetails from "../slices/FavouriteNewsSlicer";

const store = configureStore({
  reducer: {
    data,
    pageDetails,
    favPageDetails,
  },
});

export default store;
