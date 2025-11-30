import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import CategoryArr, { type CategoryType } from '@/constants/CategoryArr';
import { setCategory, setCurrentPage } from '../slices/newsAPiSlice';

type DropDownListProps = {
  category: string;
  handleCategoryClick: (category: string) => void;
};

const CategoryItem = ({ category, handleCategoryClick }: DropDownListProps) => {
  return (
    <li>
      <div
        className='dropdown-item text-capitalize'
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </div>
    </li>
  );
};

export const CategoryDropdown = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.news);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleCategoryClick = (category: CategoryType) => {
    setIsDropdown(false);
    dispatch(setCurrentPage(1));
    dispatch(setCategory(category));
  };

  return (
    <div className='dropdown'>
      <button
        className={`btn btn-secondary dropdown-toggle text-capitalize ${
          isDropdown ? 'show' : ''
        }`}
        type='button'
        onClick={() => setIsDropdown(!isDropdown)}
      >
        {category}
      </button>
      <ul className={`dropdown-menu ${isDropdown ? 'show' : ''}`}>
        {CategoryArr.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              category={category}
              handleCategoryClick={() => handleCategoryClick(category)}
            />
          );
        })}
      </ul>
    </div>
  );
};
