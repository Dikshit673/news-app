import newsPng from '@/assets/news.png';
import type { ReactNode } from 'react';
import type { News } from '@/types/News';

type CardProps = {
  news: News;
  icon: ReactNode;
};

// {functionality === 'save' && (
//               <i
//                 className='fa-regular fa-star'
//                 onClick={() => saveNews(news)}
//               ></i>
//             )}
//             {functionality === 'delete' && (
//               <i
//                 className='fa-regular fa-trash-can'
//                 onClick={() => deleteNews(url)}
//               ></i>
//             )}

const NewsCard = ({ news, icon }: CardProps) => {
  const { title, author, source, description, url, urlToImage, publishedAt } =
    news;

  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card-div'>
        <div className='star-div '>
          <div className='star-indiv'>{icon}</div>
        </div>

        <a href={url} target='_new'>
          <div className='card-image-div'>
            <img
              src={urlToImage ? urlToImage : newsPng}
              alt='Image Not Found'
              className='card-div-img'
            />
          </div>
          <div className='card-div-body'>
            <h5 className='card-div-heading'>
              <span>
                {title ? title.slice(0, 90) : 'Not Found'}
                {title && title?.length < 90 ? '' : '...'}
              </span>
            </h5>
            <p className='card-div-para'>
              <span>
                {description ? description.slice(0, 150) : 'Not Found'}
                {description && description.length < 150 ? '' : '...'}
              </span>
            </p>
            <div>
              <button className='btn btn-primary'>Read More...</button>
            </div>
            <div className=' d-flex flex-column align-items-end pt-2'>
              <small className='author-published'>
                <span>
                  {author
                    ? source.name
                      ? author === source.name
                        ? author
                        : `${author} | ${source.name}`
                      : author
                    : source.name
                      ? source.name
                      : ''}
                </span>
              </small>
              <small className='author-published'>
                <span>{publishedAt}</span>
              </small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
