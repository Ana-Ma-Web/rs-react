import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';
import { IPagination } from '../../models/IPagination';

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
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(
      state,
      action: PayloadAction<{ data: ICharacter[]; pagination: IPagination }>
    ) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload.data;
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCharactersError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
