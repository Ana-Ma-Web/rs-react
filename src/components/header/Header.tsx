import React, { useContext } from 'react';
import { ErrorContext } from '../../App';

export default function Header() {
  const { setIsError } = useContext(ErrorContext);

  const handleClickError = () => {
    if (setIsError) setIsError(true);
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
