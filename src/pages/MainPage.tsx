import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ErrorContext } from '../App';
import Pagination from '../components/pagination/Pagination';
import SearchInput from '../components/search/SearchInput';
import SearchResults from '../components/search/SearchResults';
import { PaginationData } from '../types';
import { ICharacter } from '../models/ICharacter';

type ItemsDataContextType = ICharacter[] | null;
export const ItemsDataContext = React.createContext<ItemsDataContextType>(null);

type PaginationDataContextType = null | PaginationData;
export const PaginationDataContext =
  React.createContext<PaginationDataContextType>(null);

type SetIsLoadedContextType = Dispatch<SetStateAction<boolean>> | null;
export const SetIsLoadedContext =
  React.createContext<SetIsLoadedContextType>(null);

interface SearchDataContextType {
  text: string;
  limit: string;
  page: string;
}
export const SearchDataContext = React.createContext<SearchDataContextType>({
  text: '',
  limit: '5',
  page: '1',
});

type SetSearchDataContextType = Dispatch<
  SetStateAction<SearchDataContextType>
> | null;
export const SetSearchDataContext =
  React.createContext<SetSearchDataContextType>(null);

export default function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  const [itemsData, setItemsData] = useState<ICharacter[] | null>(null);
  const [paginationData, setPaginationData] = useState<null | PaginationData>(
    null
  );

  const { isError } = useContext(ErrorContext);

  const [searchData, setSearchData] = useState<SearchDataContextType>({
    text: '',
    limit: '5',
    page: '1',
  });

  useEffect(() => {
    const str = `https://api.jikan.moe/v4/characters?limit=${
      searchData.limit || 5
    }&page=${searchData.page || 1}&q=${searchData.text || ''}`;

    if (!isLoaded) {
      fetch(str)
        .then((res) => res.json())
        .then(
          (result: {
            data: ICharacter[];
            pagination: PaginationData;
            status: string;
            message: string;
          }) => {
            setIsLoaded(true);
            setItemsData(result.data);
            setPaginationData(result.pagination);
            if (result.status === '429') {
              setSearchErrorMessage('Too Many Requests');
            }
          }
        );
    }
  }, [isLoaded, searchData]);

  return (
    <>
      <SearchDataContext.Provider value={searchData}>
        <SetSearchDataContext.Provider value={setSearchData}>
          <SetIsLoadedContext.Provider value={setIsLoaded}>
            <SearchInput />
            {!isLoaded && !isError ? (
              <div>LOADING</div>
            ) : (
              <>
                <PaginationDataContext.Provider value={paginationData}>
                  <Pagination />
                </PaginationDataContext.Provider>

                <ItemsDataContext.Provider value={itemsData}>
                  <SearchResults />
                </ItemsDataContext.Provider>

                {searchErrorMessage !== '' && <div>{searchErrorMessage}</div>}
              </>
            )}
          </SetIsLoadedContext.Provider>
        </SetSearchDataContext.Provider>
      </SearchDataContext.Provider>
    </>
  );
}
