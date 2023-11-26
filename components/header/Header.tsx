import React, { useState } from 'react';

// const handleClick = () => {
// };
// throw new Error('Click error');

export default function Header() {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error('Click error!');
  }

  const handleSubmit = () => {
    setIsError(true);
  };

  return (
    <header>
      <h1>Anime 💮</h1>
      <button className="btn_error" onClick={handleSubmit}>
        ERROR BUTTON
      </button>
    </header>
  );
}
