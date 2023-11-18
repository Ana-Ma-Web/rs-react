import React from 'react';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { useAppSelector } from '../hooks/redux';

export default function MainPage() {
  const { isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  return (
    <>
      <SearchInput />
      {isLoading && !error ? (
        <div>LOADING</div>
      ) : (
        <>
          <Pagination />
        </>
      )}
      <SearchResults />
      {error !== '' && <div>{error}</div>}
    </>
  );
}
