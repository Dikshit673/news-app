// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../slices/dataSlicer';
import pageDetailReducer from '../slices/pageDetailSlicer';
import favouriteNewsReducer from '../slices/FavouriteNewsSlicer';

const store = configureStore({
    reducer: {
        apiData: dataReducer,
        pageDetail: pageDetailReducer,
        favouriteNewsData: favouriteNewsReducer,
    }
})

export default store;