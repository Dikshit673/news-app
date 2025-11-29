import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "./fetchUrl";
const fetchData = createAsyncThunk(
  "fetchData",
  async ({ page, pageSize, query, category }) => {
    try {
      const apiUrl = fetchUrl(page, pageSize, query, category);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      return res;
    } catch (error) {
      return error;
    }
  }
);

export default fetchData;
