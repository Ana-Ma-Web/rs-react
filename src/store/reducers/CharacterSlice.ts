import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';

interface CharacterState {
  characters: ICharacter[];
  isLoading: boolean;
  error: string;
}

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: '',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<ICharacter[]>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload;
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
