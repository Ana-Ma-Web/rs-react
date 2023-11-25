// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { characterAPI } from '../../services/CharacterService';
// import { cardsLoadingFlagSlice } from '../../store/reducers/CardsLoadingFlagSlice';
// import { useEffect } from 'react';
// import Card from '../card/Card';

import { ICharacter } from '@/models/ICharacter';
import Card from '../card/Card';

export default function CardList(props: { items: ICharacter[] }) {
  // const { limit, page, text } = useAppSelector(
  //   (state) => state.searchCharacterDataReducer
  // );
  // const numberLimit = Number(limit);
  // const numberPage = Number(page);
  // const { data, isLoading } = characterAPI.useFetchAllCharactersQuery({
  //   limit: numberLimit,
  //   page: numberPage,
  //   searchText: text,
  // });

  // const { setCardsLoadingFlag } = cardsLoadingFlagSlice.actions;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setCardsLoadingFlag(isLoading));
  // }, [data]);
  return (
    <div className="results">
      {!Array.isArray(props.items) || props.items.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        props.items.map((e) => (
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
