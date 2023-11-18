import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setError } from '../../store/reducers/ActionCreators';

export default function Header() {
  const dispatch = useAppDispatch();
  // const { characters, isLoading } = useAppSelector(
  //   (state) => state.characterReducer
  // );
  const handleClickError = () => {
    dispatch(setError());
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
