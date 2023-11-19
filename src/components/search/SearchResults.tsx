import Card from './Card';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchCharacters } from '../../store/reducers/ActionCreators';
import { characterAPI } from '../../services/CharacterService';

export default function SearchResults() {
  const dispatch = useAppDispatch();
  const { data } = characterAPI.useFetchAllCharactersQuery({
    limit: 5,
    page: 1,
    searchText: '',
  });
  // const { characters } = useAppSelector((state) => state.characterReducer);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div className="results">
      {!Array.isArray(data?.data) || data?.data.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        data?.data.map((e) => (
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
