import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import {
  SearchDataContext,
  SetIsLoadedContext,
  SetSearchDataContext,
} from '../../pages/MainPage';

export default function SearchInput() {
  const setIsLoaded = useContext(SetIsLoadedContext);
  const searchData = useContext(SearchDataContext);
  const setSearchData = useContext(SetSearchDataContext);

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || '');
  };

  const handleSubmit = () => {
    if (typeof value === 'string') {
      if (setSearchData) {
        setSearchData({
          text: value || '',
          page: '1',
          limit: searchData.limit,
        });
        setIsLoaded && setIsLoaded(false);
      }
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
