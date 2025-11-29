const fetchUrl = (page, pageSize, query, category) => {
  let baseUrl = import.meta.env.VITE_BACKEND_URL;

  if (query) {
    if (category !== "general") {
      return `${baseUrl}/news?q=${query}&category=${category}&page=${page}&pageSize=${pageSize}`;
    } else {
      return `${baseUrl}/news?q=${query}&page=${page}&pageSize=${pageSize}`;
    }
  } else {
    if (category !== "general") {
      return `${baseUrl}/news?category=${category}&page=${page}&pageSize=${pageSize}`;
    } else {
      return `${baseUrl}/news?page=${page}&pageSize=${pageSize}`;
    }
  }
};

export default fetchUrl;
