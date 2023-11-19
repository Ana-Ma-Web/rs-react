import React, { useEffect } from 'react';
import { characterSlice } from '../../store/reducers/CharacterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function Header() {
  const { error } = useAppSelector((state) => state.characterReducer);
  const { setCharactersError } = characterSlice.actions;
  const dispatch = useAppDispatch();

  const handleClickError = () => {
    dispatch(setCharactersError('Click error'));
  };

  useEffect(() => {
    if (error) throw new Error('Click to error button 🪤');
  }, [error]);

  return (
    <header>
      <h1>Anime 💮</h1>
      <button className="btn_error" onClick={handleClickError}>
        ERROR BUTTON
      </button>
    </header>
  );
}
