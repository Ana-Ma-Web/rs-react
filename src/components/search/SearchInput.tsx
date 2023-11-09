import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchInput(props: {
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const limit = searchParams.get('limit');

  const [value, setValue] = useState(searchText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || '');
  };

  const handleSubmit = () => {
    if (typeof value === 'string') {
      setSearchParams({
        search: value || '',
        limit: limit || '5',
        page: '1',
      });
      props.setIsLoaded(false);
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
