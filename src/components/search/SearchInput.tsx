import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

export default function SearchInput(props: { setName: (str: string) => void }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const searchValue = localStorage.getItem('search-value');
    const str = searchValue ? searchValue : '';
    setValue(str);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value ? e.target.value : '');
  };

  const handleSubmit = () => {
    if (value !== null) {
      props.setName(value);
      localStorage.setItem('search-value', value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search">
      <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}
