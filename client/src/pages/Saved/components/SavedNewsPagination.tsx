import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import Pagination from '@/components/ui/Pagination';

import { createPaginationArray } from '@/helpers/createPaginationArray';
import {
  loadSavedNews,
  setSavedNewsCurrentPage,
} from '../slices/savedNewsSlice';

const SavedNewsPagination = () => {
  const dispatch = useAppDispatch();

  const { totalPages, currentPage, pageSize, siblings } = useAppSelector(
    (state) => state.favourites
  );

  useEffect(() => {
    dispatch(loadSavedNews());
  }, [dispatch]);

  const paginatingArr = createPaginationArray(
    totalPages,
    currentPage,
    pageSize,
    siblings
  );

  const handlePaginationClick = (page: number) => {
    dispatch(setSavedNewsCurrentPage(page));
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginatingArray={paginatingArr}
        handlePagination={() => handlePaginationClick(currentPage)}
      />
    </>
  );
};

export default SavedNewsPagination;
