import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import { SearchItem } from './types';

export default function App() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null as SearchItem[] | null);
  const [name, setName] = useState(
    localStorage.getItem('search-value')
      ? localStorage.getItem('search-value')
      : ''
  );

  useEffect(() => {
    if (!isLoaded) updateItems();
  }, [name]);

  useEffect(() => {
    if (error) throw new Error('Click to error button 🪤');
  }, [error]);

  const updateItems = () => {
    fetch(`https://api.jikan.moe/v4/characters?limit=25&page=1&q=${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setIsLoaded(true);
          setItems(result.data);
        },
        () => {
          setIsLoaded(true);
          setError(true);
        }
      );
  };

  const setSearchValue = (str: string) => {
    if (name !== str) {
      setName(str);
      setIsLoaded(false);
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
      {!isLoaded ? <div>LOADING</div> : <SearchResults items={items} />}
    </div>
  );
}
