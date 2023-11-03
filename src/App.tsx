import React, { useEffect, useState } from 'react';
import Pagination from './components/pagination/Pagination';
import SearchInput from './components/search/SearchInput';
import SearchResults from './components/search/SearchResults';
import { PaginationData, SearchItem } from './types';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchRequest, setSearchRequest] = useState(
    localStorage.getItem('search-value')
      ? localStorage.getItem('search-value')
      : ''
  );

  const [error, setError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  const [items, setItems] = useState(null as SearchItem[] | null);
  const [paginationData, setPaginationData] = useState(
    null as null | PaginationData
  );

  useEffect(() => {
    if (!isLoaded) {
      fetch(
        `https://api.jikan.moe/v4/characters?limit=25&page=1&q=${searchRequest}`
      )
        .then((res) => res.json())
        .then(
          (result: {
            data: SearchItem[];
            pagination: PaginationData;
            status: string;
            message: string;
          }) => {
            console.log('result', result);
            setIsLoaded(true);
            setItems(result.data);
            setPaginationData(result.pagination);
            if (result.status === '429') {
              setSearchErrorMessage('Too Many Requests');
            }
          }
        );
    }
  }, [searchRequest, isLoaded]);

  useEffect(() => {
    if (error) throw new Error('Click to error button 🪤');
  }, [error]);

  const setSearchValue = (str: string) => {
    if (searchRequest !== str) {
      setSearchRequest(str);
      setIsLoaded(false);
      setSearchErrorMessage('');
    }
  };

  const handleClickError = () => {
    setError(true);
  };

  return (
    <div className="wrapper">
      <h1>Anime 💮</h1>
      <button onClick={handleClickError}>ERROR BUTTON</button>
      <SearchInput setName={setSearchValue} />
      {!isLoaded && !error ? (
        <div>LOADING</div>
      ) : (
        <>
          <Pagination paginationData={paginationData} />
          <SearchResults items={items} />
          {searchErrorMessage !== '' && <div>{searchErrorMessage}</div>}
        </>
      )}
    </div>
  );
}
