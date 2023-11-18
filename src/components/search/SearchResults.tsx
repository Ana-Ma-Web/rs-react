import Card from './Card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchCharacters } from '../../store/reducers/ActionCreators';

export default function SearchResults() {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characterReducer);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div className="results">
      {!Array.isArray(characters) || characters.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        characters.map((e) => (
          <Card
            key={e?.url}
            name={e?.name}
            img={e?.images.jpg.image_url}
            id={e?.mal_id}
          />
        ))
      )}
    </div>
  );
}
