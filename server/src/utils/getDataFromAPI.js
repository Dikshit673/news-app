const axios = require('axios');
const { getParams } = require('./getParams');

const getDataFromAPI = async (query, category, page, pageSize, country) => {
  const parameter = getParams(query, category, page, pageSize, country);
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: parameter,
    });
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getDataFromAPI,
};
