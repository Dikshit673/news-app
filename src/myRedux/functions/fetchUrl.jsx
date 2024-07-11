const fetchUrl = (page, pageSize, query, category) => {
    // console.log(page, pageSize, query, category);
    if (query) {
        if (category !== 'general') {
            return `https://persist-news-server.vercel.app/news?q=${query}&category=${category}&page=${page}&pageSize=${pageSize}`
        } else {
            return `https://persist-news-server.vercel.app/news?q=${query}&page=${page}&pageSize=${pageSize}`
        }
    } else {
        if (category !== 'general') {
            return `https://persist-news-server.vercel.app/news?country=in&category=${category}&page=${page}&pageSize=${pageSize}`
        } else {
            return `https://persist-news-server.vercel.app/news?country=in&page=${page}&pageSize=${pageSize}`
        }
    }
}

export default fetchUrl;
