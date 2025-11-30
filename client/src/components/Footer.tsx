import { setCategory } from '@/pages/Home/slices/newsAPiSlice';
import CategoryArr from '../constants/CategoryArr';
import { useAppDispatch } from '@/hooks/useRedux';

const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <section className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-5 mb-3'>
            <h3>News Monkey App</h3>
            <small>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum perferendis incidunt iusto optio voluptas? Aperiam quam
              quos mollitia repudiandae corrupti fuga quae tempora!{' '}
            </small>
            <div className=' d-flex align-items-center'>
              <p className=' m-0 me-2 fw-bold'>contact : </p>
              <small>+1 0123 456 7890</small>
            </div>
            <div className=' d-flex align-items-center'>
              <p className=' m-0 me-2 fw-bold'>email : </p>
              <small>react-news@gmail.com</small>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <h3>Category</h3>
            <div className='category-div d-flex flex-wrap'>
              {CategoryArr.map((category, ind) => {
                return (
                  <small
                    key={ind}
                    className=' m-1 text-capitalize'
                    onClick={() => {
                      dispatch(setCategory(category));
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                  >
                    {category}
                  </small>
                );
              })}
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-3'>
            <h3>Newsletter</h3>
            <div>
              <input
                type='text'
                name='email-subs'
                id='email-subscribe'
                placeholder='Email'
              />
              <button className='btn-primary'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
