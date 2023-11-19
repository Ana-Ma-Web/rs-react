import Card from './Card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { characterAPI } from '../../services/CharacterService';
import { cardsLoadingFlagSlice } from '../../store/reducers/CardsLoadingFlagSlice';
import { useEffect } from 'react';

export default function SearchResults() {
  const { limit, page, text } = useAppSelector(
    (state) => state.searchCharacterDataReducer
  );
  const numberLimit = Number(limit);
  const numberPage = Number(page);
  const { data, isLoading } = characterAPI.useFetchAllCharactersQuery({
    limit: numberLimit,
    page: numberPage,
    searchText: text,
  });

  const { setCardsLoadingFlag } = cardsLoadingFlagSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardsLoadingFlag(isLoading));
  }, [data]);

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
