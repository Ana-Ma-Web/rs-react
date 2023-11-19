import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import characterReducer from './reducers/CharacterSlice';
import searchCharacterDataReducer from './reducers/SearchCharacterDataSlice';
import { characterAPI } from '../services/CharacterService';

const rootReducer = combineReducers({
  // characterReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
  searchCharacterDataReducer,
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
