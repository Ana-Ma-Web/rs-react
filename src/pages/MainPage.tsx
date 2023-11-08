import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { PaginationData, SearchItem } from '../types';

export default function MainPage(props: { error: boolean }) {
  const { page, limit } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [searchRequest, setSearchRequest] = useState(
    localStorage.getItem('search-value')
      ? localStorage.getItem('search-value')
      : ''
  );
  const [activeLimit, setActiveLimit] = useState(
    limit !== undefined ? Number(limit) : 10
  );
  const [activePage, setActivePage] = useState(page ? Number(page) : 1);

  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [paginationData, setPaginationData] = useState<null | PaginationData>(
    null
  );

  useEffect(() => {
    if (!isLoaded) {
      fetch(
        `https://api.jikan.moe/v4/characters?limit=${activeLimit}&page=${activePage}&q=${searchRequest}`
      )
        .then((res) => res.json())
        .then(
          (result: {
            data: SearchItem[];
            pagination: PaginationData;
            status: string;
            message: string;
          }) => {
            setIsLoaded(true);
            setItems(result.data);
            setPaginationData(result.pagination);
            if (result.status === '429') {
              setSearchErrorMessage('Too Many Requests');
            }
          }
        );
    }
  }, [isLoaded, activeLimit, activePage]);

  useEffect(() => {
    setActivePage(1);
  }, [searchRequest]);

  const setSearchValue = (str: string) => {
    if (searchRequest !== str) {
      setSearchRequest(str);
      setIsLoaded(false);
      setSearchErrorMessage('');
    }
  };
  return (
    <>
      <SearchInput setName={setSearchValue} />
      {!isLoaded && !props.error ? (
        <div>LOADING</div>
      ) : (
        <>
          <Pagination
            paginationData={paginationData}
            activeLimit={activeLimit}
            setActiveLimit={setActiveLimit}
            setActivePage={setActivePage}
            setIsLoaded={setIsLoaded}
          />
          <SearchResults items={items} />
          {searchErrorMessage !== '' && <div>{searchErrorMessage}</div>}
        </>
      )}
    </>
  );
}
