import React from 'react';

export default function Header(props: {
  setIsError: (isError: boolean) => void;
}) {
  const handleClickError = () => {
    props.setIsError(true);
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
