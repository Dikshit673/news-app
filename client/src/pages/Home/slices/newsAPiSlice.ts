import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import fetchNews from '../thunks/fetchNewsThunk';
import type { News } from '@/types/News';
import type { CategoryType } from '@/constants/CategoryArr';

type InitialState = {
  error: string | null;
  isLoading: boolean;
  articles: News[];
  totalResults: number;
  currentPage: number;
  pageSize: number;
  siblings: number;
  totalPages: number;
  query: string;
  category: CategoryType;
  country: string;
};

const initialState: InitialState = {
  error: null,
  isLoading: false,
  articles: [],
  totalResults: 0,
  // pagination and data details
  currentPage: 1,
  pageSize: 6,
  siblings: 2,
  totalPages: 1,
  query: '',
  category: 'general',
  country: 'us',
};

const newsApiSlice = createSlice({
  name: 'newsApiData',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setTotalPage: (state, { payload }: PayloadAction<number>) => {
      state.totalPages = payload;
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setCategory: (state, { payload }: PayloadAction<CategoryType>) => {
      state.category = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.articles = payload.articles;
        state.totalResults = payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
          ? payload.message || 'failed to fetch news'
          : 'something went wrong';
      });
  },
});

const { actions, reducer: newsApiReducer } = newsApiSlice;

export const { setCurrentPage, setTotalPage, setQuery, setCategory } = actions;

export default newsApiReducer;
