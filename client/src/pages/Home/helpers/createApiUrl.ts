const defaultParams = {
  page: 1,
  pageSize: 10,
  query: '',
  category: 'general',
  country: 'us',
};

const createApiUrl = (
  page: number,
  pageSize: number,
  query: string,
  category: string,
  country: string
) => {
  const baseUrl = String(import.meta.env.VITE_API_URL);

  const params = new URLSearchParams();

  if (query) {
    params.set('q', (query || defaultParams.query).toString());
  } else {
    params.set('country', (country || defaultParams.country).toString());
  }

  if (category !== 'general') {
    params.set('category', (category || defaultParams.category).toString());
  }

  params.set('page', (page || defaultParams.page).toString());
  params.set('pageSize', (pageSize || defaultParams.pageSize).toString());

  return `${baseUrl}/news?${params.toString()}`;
};

export default createApiUrl;
