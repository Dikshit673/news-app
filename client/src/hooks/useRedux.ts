import { useDispatch, useSelector } from 'react-redux';
import store from '../app/store';

export type StoreState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();
export const useAppSelector = useSelector.withTypes<StoreState>();
