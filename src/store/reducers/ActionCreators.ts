import axios from 'axios';
import { ICharacter } from '../../models/ICharacter';
import { IPagination } from '../../models/IPagination';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
