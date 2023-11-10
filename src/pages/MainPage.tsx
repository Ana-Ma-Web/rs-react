import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorContext } from '../App';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { PaginationData, SearchItem } from '../types';

export default function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [paginationData, setPaginationData] = useState<null | PaginationData>(
    null
  );

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const activePage = searchParams.get('page');
    const activeLimit = searchParams.get('limit');
    const searchText = searchParams.get('search');
    const str = `https://api.jikan.moe/v4/characters?limit=${
      activeLimit || 5
    }&page=${activePage || 1}&q=${searchText || ''}`;

    if (!isLoaded) {
      fetch(str)
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
  }, [isLoaded, searchParams]);

  return (
    <ErrorContext.Consumer>
      {({ isError }) => (
        <>
          <SearchInput setIsLoaded={setIsLoaded} />
          {!isLoaded && !isError ? (
            <div>LOADING</div>
          ) : (
            <>
              <Pagination
                paginationData={paginationData}
                setIsLoaded={setIsLoaded}
              />
              <SearchResults items={items} />
              {searchErrorMessage !== '' && <div>{searchErrorMessage}</div>}
            </>
          )}
        </>
      )}
    </ErrorContext.Consumer>
  );
}
