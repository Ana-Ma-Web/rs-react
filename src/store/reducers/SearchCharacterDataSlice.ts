import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchCharactersData } from '../../models/ISearchCharactersData';

const initialState: ISearchCharactersData = {
  text: '',
  limit: '5',
  page: '1',
};

export const searchCharacterDataSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<{ text: string }>) {
      state.text = action.payload.text;
    },
    setSearchLimit(state, action: PayloadAction<{ limit: string }>) {
      state.limit = action.payload.limit;
    },
    setSearchPage(state, action: PayloadAction<{ page: string }>) {
      state.page = action.payload.page;
    },
  },
});

export default searchCharacterDataSlice.reducer;
