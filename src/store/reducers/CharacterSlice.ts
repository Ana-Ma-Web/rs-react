import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';
import { IPagination } from '../../models/IPagination';
import { fetchCharacters } from './ActionCreators';

interface CharacterState {
  characters: ICharacter[];
  isLoading: boolean;
  error: string;
  paginationData: IPagination;
}

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: '',
  paginationData: {
    current_page: 0,
    has_next_page: false,
    items: {
      count: 0,
      per_page: 0,
      total: 0,
    },
    last_visible_page: 1,
  },
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharactersError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled.type]: (
      state,
      action: PayloadAction<{ data: ICharacter[]; pagination: IPagination }>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload.data;
    },
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
