import countriesReducer from './reducers/CountriesSlice';
import uncontrolledFormReducer from './reducers/UncontrolledFormSlice';
import controlledFormReducer from './reducers/ControlledFormSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  controlledFormReducer,
  uncontrolledFormReducer,
  countriesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
