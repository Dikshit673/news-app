import { useState, type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setCurrentPage, setQuery } from '../slices/newsAPiSlice';

const Hero = () => {
  const [data, setData] = useState({
    query: '',
  });

  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.news);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    dispatch(setCurrentPage(1));
    dispatch(setQuery(data.query));
  };

  return (
    <div className='showcase'>
      <div className='overlay px-2'>
        <h1 className=' text-white text-center text-capitalize fw-bolder mb-3'>
          viewing news about {query ? query : 'all'}
        </h1>
        <div className='mb-3'>
          <input
            type='search'
            placeholder='search here'
            name='query'
            id='query'
            onChange={handleInputChange}
            value={data.query}
          />
          <button className='my-btn' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
