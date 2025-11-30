import { useEffect } from 'react';

import fetchNews from '../thunks/fetchNewsThunk';
import { NewsList } from './NewsList';
import { CategoryDropdown } from './CategoryDropdown';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

const NewsSection = () => {
  const dispatch = useAppDispatch();
  const { currentPage, pageSize, query, category, country } = useAppSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(
      fetchNews({ page: currentPage, pageSize, query, category, country })
    );
  }, [currentPage, pageSize, query, category, country, dispatch]);

  return (
    <section className=' min-vh-100'>
      <div className='container'>
        <h2 className=' text-capitalize text-black my-4 '>top headlines</h2>

        <div className=' d-flex mb-3'>
          <h4 className=' me-3'>Categories : </h4>
          <CategoryDropdown />
        </div>

        <div className='row'>
          <NewsList />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
