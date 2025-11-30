const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { getDataFromAPI } = require('./utils/getDataFromAPI.js');
const { defaultParams } = require('./constants/defaultparams.js');

// dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5585;

// Cors middleware
const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.static('public', {
    setHeaders: (res, _) => {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    },
  })
);

// handle "/" route
app.get('/', (_, res, next) => {
  res.status(200).json({ message: 'hello from Express App' });
  next();
});

// Handle favicon requests
app.get('/favicon.ico', (_, res, next) => {
  res.status(204).end();
  next();
});

// News API endpoint
app.get('/news', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600');

  const {
    page = defaultParams.page,
    pageSize = defaultParams.pageSize,
    query = defaultParams.query,
    category = defaultParams.category,
    country = defaultParams.country,
  } = req.query;

  try {
    const data = await getDataFromAPI(query, category, page, pageSize, country);
    res.status(200).json({
      success: true,
      messsage: 'News fetched successfully',
      ...data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messsage: 'Error in fetching news',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
