import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import { setCurrentPage, setTotalPage } from '../slices/newsAPiSlice';
import { createPaginationArray } from '@/helpers/createPaginationArray';
import Pagination from '@/components/ui/Pagination';

const NewsPagination = () => {
  const dispatch = useAppDispatch();
  const { totalResults, totalPages, currentPage, pageSize, siblings } =
    useAppSelector((state) => state.news);

  useEffect(() => {
    const myresults = totalResults ? Math.ceil(totalResults / pageSize) : 1;

    dispatch(setTotalPage(myresults));
  }, [totalResults, pageSize, dispatch]);

  const paginatingArr = createPaginationArray(
    totalPages,
    currentPage,
    pageSize,
    siblings
  );

  const handlePagination = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginatingArray={paginatingArr}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default NewsPagination;
