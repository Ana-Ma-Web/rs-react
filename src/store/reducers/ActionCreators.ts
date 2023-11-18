import axios from 'axios';
import { AppDispatch } from '../store';
import { ICharacter } from '../../models/ICharacter';
import { characterSlice } from './CharacterSlice';
import { PaginationData } from '../../types';

export const fetchCharacters = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(characterSlice.actions.charactersFetching());
    const str = `https://api.jikan.moe/v4/characters?limit=5&page=1&q=`;

    const response = await axios.get<{
      data: ICharacter[];
      pagination: PaginationData;
    }>(str);

    dispatch(
      characterSlice.actions.charactersFetchingSuccess(response.data.data)
    );
  } catch (error) {
    const knownError = error as Error;
    dispatch(
      characterSlice.actions.charactersFetchingError(knownError.message)
    );
  }
};
