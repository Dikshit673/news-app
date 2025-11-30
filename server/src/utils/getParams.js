const getParams = (query, category, page, pageSize, country) => {
  const apiKey = process.env.NEWS_API_KEY;
  const params = { page, pageSize, apiKey };

  if (query) {
    params.q = query;
  } else {
    params.country = country;
  }

  if (category !== 'general') {
    params.category = category;
  }

  return params;
};

module.exports = {
  getParams,
};
