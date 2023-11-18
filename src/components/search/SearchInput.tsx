import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { searchCharacterDataSlice } from '../../store/reducers/SearchCharacterDataSlice';

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || '');
  };

  const handleSubmit = () => {
    if (typeof value === 'string') {
      dispatch(
        searchCharacterDataSlice.actions.setSearchText({ text: value || '' })
      );
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
