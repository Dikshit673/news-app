import { createSlice, current } from '@reduxjs/toolkit'

const getItemFromLocalStorage = () => {
    let news = localStorage.getItem("favouriteNews")

    if (news) {
        return JSON.parse(news);
    }
    else {
        return [];
    }
}

const favouriteNewsSlice = createSlice({
    name: 'FavouriteNews',
    initialState: {
        favNewsApiArray: getItemFromLocalStorage(),
        favTotalPage: 1,
        favCurrentPage: 1,
        favPageSize: 6,
        favSiblings: 2,
    },
    reducers: {
        favNewsFunction: (state, action) => {
            // console.log(action.payload)
            let news = state.favNewsApiArray.some((item) => {
                return item.url === action.payload.url
            })
            // console.log(news);
            if (!news) {
                current(state.favNewsApiArray)
                state.favNewsApiArray.push(action.payload)
            }
        },
        deleteNewsFunction: (state, action) => {
            current(state.favNewsApiArray)
            state.favNewsApiArray = state.favNewsApiArray.filter(item => item.url !== action.payload);
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