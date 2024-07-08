import { createAsyncThunk } from "@reduxjs/toolkit"
import fetchUrl from "./fetchUrl";
const fetchData = createAsyncThunk("fetchData", async ({ page, pageSize, query, category }) => {
    try {
        const apiUrl = fetchUrl(page, pageSize, query, category);
        // (query ? `https://newsapi.org/v2/top-headlines?q=${query}&sortBy=popularity&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        //     : `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        // console.log(page, pageSize, query, category);
        console.log("apiUrl: ", apiUrl);
        // console.log(!query);
        const data = await fetch(apiUrl);
        const res = await data.json();
        console.log("fetchData", res);
        return res;
    } catch (error) {
        return error;
    }
})

export default fetchData;