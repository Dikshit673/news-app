import { useCallback, type ChangeEvent } from 'react';
import { useAppDispatch } from '@/hooks/useRedux';

import { setSavedNewsPageSize } from '../slices/savedNewsSlice';

const SelectInput = () => {
  const dispatch = useAppDispatch();

  const handleSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      dispatch(setSavedNewsPageSize(Number(value)));
    },
    [dispatch]
  );

  return (
    <select name='' id='' onChange={handleSelectChange}>
      <option value='6'>6</option>
      <option value='10'>10</option>
      <option value='15'>15</option>
      <option value='20'>20</option>
    </select>
  );
};

export default SelectInput;
