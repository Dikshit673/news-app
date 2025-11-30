import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import createApiUrl from '../helpers/createApiUrl';

type FetchNewsPayload = {
  page: number;
  pageSize: number;
  query: string;
  category: string;
  country: string;
};

type SuccessResponse = {
  success: true;
  message: string;
  status: string;
  totalResults: number;
  articles: [];
};

type RejectValueType = {
  success: false;
  message: string;
};

export const No_Network_Response = {
  success: false,
  message: 'network error',
} satisfies RejectValueType;

export const No_Server_Response = {
  success: false,
  message: 'no response by api',
} satisfies RejectValueType;

const fetchNews = createAsyncThunk<
  SuccessResponse,
  FetchNewsPayload,
  { rejectValue: RejectValueType }
>(
  'fetchNews',
  async ({ page, pageSize, query, category, country }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const apiUrl = createApiUrl(page, pageSize, query, category, country);
      const { data } = await axios.get<SuccessResponse>(apiUrl);
      return data;
    } catch (error) {
      const err = error as AxiosError<RejectValueType>;
      const { response, code } = err;
      if (code === 'ERR_NETWORK') return rejectWithValue(No_Network_Response);
      if (!response) return rejectWithValue(No_Server_Response);
      return rejectWithValue(response.data);
    }
  }
);

export default fetchNews;
