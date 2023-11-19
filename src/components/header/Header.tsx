import React, { useEffect } from 'react';
import { characterSlice } from '../../store/reducers/CharacterSlice';
import { useAppDispatch } from '../../hooks/redux';
import { characterAPI } from '../../services/CharacterService';

export default function Header() {
  const { isError, status } = characterAPI.useFetchAllCharactersQuery({
    limit: 5,
    page: 1,
    searchText: '',
  });
  console.log('MainPage isError', isError);
  const { setCharactersError } = characterSlice.actions;
  const dispatch = useAppDispatch();

  const handleClickError = () => {
    dispatch(setCharactersError('Something went wrong'));
  };

  useEffect(() => {
    if (status === 'rejected') throw new Error('Click to error button 🪤');
  }, [isError]);

  return (
    <header>
      <h1>Anime 💮</h1>
      <button className="btn_error" onClick={handleClickError}>
        ERROR BUTTON
      </button>
    </header>
  );
}
