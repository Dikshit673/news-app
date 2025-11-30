import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import type { News } from '@/types/News';
import { savePassedNews } from '@/pages/Saved/slices/savedNewsSlice';

import Loader from '@/components/ui/Loader';
import Card from '@/components/ui/NewsCard';
import NoNews from './NoNews';

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, articles } = useAppSelector((state) => state.news);

  const handleSaveNews = (news: News) => {
    dispatch(savePassedNews(news));
  };

  if (isLoading) return <Loader />;

  if (articles.length === 0) return <NoNews />;

  return (
    <>
      {articles.map((news, index) => {
        return (
          <Card
            key={index}
            news={news}
            icon={
              <i
                className='fa-regular fa-star'
                onClick={() => handleSaveNews(news)}
              ></i>
            }
          />
        );
      })}
    </>
  );
};
