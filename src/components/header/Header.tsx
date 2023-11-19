import React, { useEffect } from 'react';
import { errorSlice } from '../../store/reducers/ErrorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function Header() {
  const { error } = useAppSelector((state) => state.errorReducer);
  const { setCustomError } = errorSlice.actions;
  const dispatch = useAppDispatch();

  const handleClickError = () => {
    dispatch(setCustomError('Click to error button'));
  };

  useEffect(() => {
    if (error === 'Click to error button')
      throw new Error('Click to error button 🪤');
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
