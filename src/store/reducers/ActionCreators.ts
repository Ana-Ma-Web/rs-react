import axios from 'axios';
import { AppDispatch } from '../store';
import { ICharacter } from '../../models/ICharacter';
import { characterSlice } from './CharacterSlice';
import { searchCharacterDataSlice } from './SearchCharacterDataSlice';
import { IPagination } from '../../models/IPagination';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCharacters = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(characterSlice.actions.charactersFetching());
//     const str = `https://api.jikan.moe/v4/characters?limit=5&page=1&q=`;

//     const response = await axios.get<{
//       data: ICharacter[];
//       pagination: IPagination;
//     }>(str);

//     dispatch(
//       characterSlice.actions.charactersFetchingSuccess({
//         data: response.data.data,
//         pagination: response.data.pagination,
//       })
//     );
//   } catch (error) {
//     const knownError = error as Error;
//     dispatch(
//       characterSlice.actions.charactersFetchingError(knownError.message)
//     );
//   }
// };

export const fetchCharacters = createAsyncThunk(
  'character/fetchAll',
  async (_, thunkAPI) => {
    try {
      const str = `https://api.jikan.moe/v4/characters?limit=5&page=1&q=`;

      const response = await axios.get<{
        data: ICharacter[];
        pagination: IPagination;
      }>(str);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('load error');
    }
  }
);

export const setError = () => (dispatch: AppDispatch) => {
  dispatch(characterSlice.actions.setCharactersError('Click error'));
};

export const setSearchCharacterLimit = () => (dispatch: AppDispatch) => {
  dispatch(searchCharacterDataSlice.actions.setSearchLimit({ limit: '10' }));
};
