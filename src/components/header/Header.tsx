import React from 'react';
import { characterSlice } from '../../store/reducers/CharacterSlice';
import { useAppDispatch } from '../../hooks/redux';

export default function Header() {
  const { setCharactersError } = characterSlice.actions;
  const dispatch = useAppDispatch();

  const handleClickError = () => {
    dispatch(setCharactersError('Click error'));
  };
  return (
    <header>
      <h1>Anime 💮</h1>
      <button className="btn_error" onClick={handleClickError}>
        ERROR BUTTON
      </button>
    </header>
  );
}
