import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

export default function SearchInput() {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || '');
  };

  const handleSubmit = () => {
    if (typeof value === 'string') {
      // dispatch(
      //   searchCharacterDataSlice.actions.setSearchText({ text: value || '' })
      // );
      // dispatch(
      //   searchCharacterDataSlice.actions.setSearchPage({
      //     page: '1',
      //   })
      // );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search">
      <input
        value={value || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        aria-label="search"
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}
