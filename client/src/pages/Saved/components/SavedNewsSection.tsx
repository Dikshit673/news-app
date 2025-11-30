import SelectInput from './SelectInput';
import SavedNewsList from './SavedNewsList';

const SavedNewsSection = () => {
  return (
    <section>
      <div className='container'>
        <h1 className=' text-capitalize text-center'>Favourite News</h1>
        <div>
          <p className=' d-inline-block me-2'>Show news uptp : </p>
          <SelectInput />
        </div>
        <div className='row'>
          <SavedNewsList />
        </div>
      </div>
    </section>
  );
};

export default SavedNewsSection;
