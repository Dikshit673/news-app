import { createSlice, current } from '@reduxjs/toolkit'

const favouriteNewsSlice = createSlice({
    name: 'FavouriteNews',
    initialState: {
        myFavouriteNews: JSON.parse(localStorage.getItem('favouriteNews')),
        favTotalPage: 1,
        favCurrentPage: 1,
        favPageSize: 6,
        favSiblings: 2,
    },
    reducers: {
        favNewsFunction: (state, action) => {
            let news = state.myFavouriteNews.find((item) => item.url === action.payload.url)
            // console.log(news);
            if (!news) {
                current(state.myFavouriteNews)
                state.myFavouriteNews = [...state.myFavouriteNews, action.payload]
                let newsData = JSON.stringify(state.myFavouriteNews)
                localStorage.setItem('favouriteNews', newsData)
            }
        },
        deleteNewsFunction: (state, action) => {
            current(state.myFavouriteNews)
            state.myFavouriteNews = state.myFavouriteNews.filter(item => item.url !== action.payload);
            let newsData = JSON.stringify(state.myFavouriteNews)
            localStorage.setItem('favouriteNews', newsData)
        },
        favPageSizeChangeFunction: (state, action) => {
            state.favPageSize = Number(action.payload);
            state.favCurrentPage = 1;
        },
        favTotalPageCalculFunction: (state, action) => {
            state.favTotalPage = action.payload;
        },
        favCurrentPageFunction: (state, action) => {
            state.favCurrentPage = action.payload;
        },
    },

})

export const { favNewsFunction, deleteNewsFunction, favPageSizeChangeFunction, favTotalPageCalculFunction, favCurrentPageFunction } = favouriteNewsSlice.actions;

export default favouriteNewsSlice.reducer