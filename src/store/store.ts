import { combineReducers, configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/ErrorSlice';
import searchCharacterDataReducer from './reducers/SearchCharacterDataSlice';
import { characterAPI } from '../services/CharacterService';

const rootReducer = combineReducers({
  errorReducer,
  searchCharacterDataReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
