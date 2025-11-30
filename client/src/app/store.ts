import { configureStore } from '@reduxjs/toolkit';

import newsApiReducer from '@/pages/Home/slices/newsAPiSlice';
import savedNewsReducer from '@/pages/Saved/slices/savedNewsSlice';

const store = configureStore({
  reducer: {
    news: newsApiReducer,
    favourites: savedNewsReducer,
  },
});

export default store;
