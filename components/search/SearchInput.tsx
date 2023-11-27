import { useRouter } from 'next/router';
import React, { KeyboardEvent, useRef } from 'react';

export default function SearchInput() {
  const router = useRouter();
  const { limit, q } = router.query;
  const oldSearchText = q;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const newSearchText2 = inputRef.current?.value || '';
    router.push(`?limit=${limit ? limit : 5}&page=${1}&q=${newSearchText2}`);
  };

  return (
    <div className="search">
      <input
        defaultValue={oldSearchText}
        onKeyDown={handleKeyDown}
        type="text"
        aria-label="search"
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}
