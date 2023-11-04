import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchInput(props: { setName: (str: string) => void }) {
  const [value, setValue] = useState('');
  const { limit, search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const str = search ? search : '';
    props.setName(str);
    setValue(str);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value ? e.target.value : '');
  };

  const handleSubmit = () => {
    if (value !== null) {
      navigate(`/1/${limit}/${value}`);
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
