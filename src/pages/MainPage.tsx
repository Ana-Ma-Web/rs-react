import React from 'react';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import CardList from '../components/search/CardList';
import { characterAPI } from '../services/CharacterService';
import { useAppSelector } from '../hooks/redux';
import Info from '../components/info/Info';

export default function MainPage() {
  const { limit, page, text } = useAppSelector(
    (state) => state.searchCharacterDataReducer
  );
  const numberLimit = Number(limit);
  const numberPage = Number(page);
  const { status, error } = characterAPI.useFetchAllCharactersQuery({
    limit: numberLimit,
    page: numberPage,
    searchText: text,
  });

  return (
    <>
      <SearchInput />
      {status === 'fulfilled' ? (
        <>
          <Pagination />
          <CardList />
        </>
      ) : (
        <Info status={status} error={error} />
      )}
    </>
  );
}
