import React from 'react';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { characterAPI } from '../services/CharacterService';

export default function MainPage() {
  const { isLoading, isError } = characterAPI.useFetchAllCharactersQuery({
    limit: 5,
    page: 1,
    searchText: '',
  });
  console.log('MainPage isError', isError);

  return (
    <>
      <SearchInput />
      {isLoading && !isError ? (
        <div>LOADING</div>
      ) : (
        <>
          <Pagination />
        </>
      )}
      <SearchResults />
      {/* {error !== '' && <div>{error}</div>} */}
    </>
  );
}
