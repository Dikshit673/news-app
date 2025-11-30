import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import Card from '@/components/ui/NewsCard';
import NoNewsSaved from './NoNewsSaved';
import { deleteNewsById } from '../slices/savedNewsSlice';

const SavedNewsList = () => {
  const dispatch = useAppDispatch();
  const { savedNews, currentPage, pageSize } = useAppSelector(
    (state) => state.favourites
  );
  const filteredSavedNews = useMemo(
    () =>
      savedNews.filter((_, ind) => {
        return (
          ind >= (currentPage - 1) * pageSize && ind < currentPage * pageSize
        );
      }),
    [savedNews, currentPage, pageSize]
  );

  const handleDelete = (id: string) => {
    dispatch(deleteNewsById(id));
  };

  if (filteredSavedNews.length === 0) return <NoNewsSaved />;

  return filteredSavedNews.map(({ saveId, ...news }, ind) => (
    <Card
      key={ind}
      news={news}
      icon={
        <i
          className='fa-regular fa-trash-can'
          onClick={() => handleDelete(saveId)}
        ></i>
      }
    />
  ));
};

export default SavedNewsList;
