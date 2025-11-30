import type { News, SavedNews } from '@/types/News';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { SAVED_NEWS_KEY } from '../constants';

const getNewsFromLS = (): SavedNews[] => {
  const news = localStorage.getItem(SAVED_NEWS_KEY);
  return news ? JSON.parse(news) : [];
};

type InitialState = {
  savedNews: SavedNews[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  siblings: number;
};

const initialState: InitialState = {
  savedNews: [],
  currentPage: 1,
  pageSize: 6,
  totalPages: 1,
  siblings: 2,
};

const savedNewsSlice = createSlice({
  name: 'savedNews',
  initialState,
  reducers: {
    loadSavedNews: (state) => {
      const savedNews = getNewsFromLS();
      state.savedNews = savedNews;
      state.totalPages = Math.ceil(savedNews.length / state.pageSize);
      state.currentPage = 1;
      state.pageSize = 6;
    },
    savePassedNews: (state, { payload }: PayloadAction<News>) => {
      const isExist = state.savedNews.some((item) => item.url === payload.url);
      if (isExist) return;
      const id = nanoid(8);
      state.savedNews.push({ ...payload, saveId: id });
      localStorage.setItem(SAVED_NEWS_KEY, JSON.stringify(state.savedNews));
    },
    deleteNewsById: (state, { payload }: PayloadAction<string>) => {
      state.savedNews = state.savedNews.filter(
        (item) => item.saveId !== payload
      );
      localStorage.setItem(SAVED_NEWS_KEY, JSON.stringify(state.savedNews));
    },
    setSavedNewsCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setSavedNewsPageSize: (state, { payload }: PayloadAction<number>) => {
      state.pageSize = payload;
    },
    setSavedNewsTotalPages: (state, { payload }: PayloadAction<number>) => {
      state.totalPages = payload;
    },
  },
});

const { actions, reducer: savedNewsReducer } = savedNewsSlice;

export const {
  loadSavedNews,
  savePassedNews,
  deleteNewsById,
  setSavedNewsCurrentPage,
  setSavedNewsPageSize,
  setSavedNewsTotalPages,
} = actions;

export default savedNewsReducer;
