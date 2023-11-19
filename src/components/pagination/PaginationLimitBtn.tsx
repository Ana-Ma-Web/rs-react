import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchCharacterDataSlice } from '../../store/reducers/SearchCharacterDataSlice';
import { characterAPI } from '../../services/CharacterService';
import { cardsLoadingFlagSlice } from '../../store/reducers/CardsLoadingFlagSlice';

export default function PaginationLimitBtn(props: { limit: string }) {
  const dispatch = useAppDispatch();
  const { setCardsLoadingFlag } = cardsLoadingFlagSlice.actions;
  const { limit, page, text } = useAppSelector(
    (state) => state.searchCharacterDataReducer
  );
  const numberLimit = Number(limit);
  const numberPage = Number(page);
  const { data } = characterAPI.useFetchAllCharactersQuery({
    limit: numberLimit,
    page: numberPage,
    searchText: text,
  });
  const paginationData = data?.pagination;
  const activeLimit = paginationData?.items.count.toString();

  const className = `pagination__btn pagination-limit-btn ${
    props.limit && props.limit === activeLimit
      ? 'pagination-limit-btn_active'
      : ''
  }`;

  const handleClick = () => {
    if (props.limit !== activeLimit) {
      dispatch(setCardsLoadingFlag(true));

      dispatch(
        searchCharacterDataSlice.actions.setSearchLimit({
          limit: props.limit || '5',
        })
      );
      dispatch(
        searchCharacterDataSlice.actions.setSearchPage({
          page: '1',
        })
      );
    }
  };

  return (
    <button className={className} onClick={handleClick} data-testid="pag-btn">
      {props.limit}
    </button>
  );
}
