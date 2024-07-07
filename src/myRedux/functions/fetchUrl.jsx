const fetchUrl = (page, pageSize, query, category) => {
    // console.log(page, pageSize, query, category);
    if (query) {
        if (category !== 'general') {
            return `https://newsapi.org/v2/top-headlines?q=${query}&category=${category}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        } else {
            return `https://newsapi.org/v2/top-headlines?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        }
    } else {
        if (category !== 'general') {
            return `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        } else {
            return `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        }
    }
}

export default fetchUrl;
