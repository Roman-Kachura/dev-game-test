import { store } from '../store/store';

export type DispatchFunc = () => AppDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;