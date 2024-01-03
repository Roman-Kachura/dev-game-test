import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stagesReducer from './reducers/stagesReducer';

const rootReducer = combineReducers({
  stagesReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});

