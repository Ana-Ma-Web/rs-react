import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchCharacterDataSlice } from '../../store/reducers/SearchCharacterDataSlice';
import { characterAPI } from '../../services/CharacterService';

export default function PaginationArrowBtn(props: { type: 'left' | 'right' }) {
  const dispatch = useAppDispatch();
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

  const btnText = props.type === 'left' ? '\u21F7' : '\u21F8';
  const isDisabled =
    props.type === 'left'
      ? paginationData?.current_page === 1
      : paginationData?.current_page === paginationData?.last_visible_page;

  const handleClick = () => {
    const oldPage = paginationData?.current_page;
    let newPage = 0;
    if (props.type === 'left') {
      if (oldPage) {
        newPage = oldPage - 1;
      }
    } else {
      if (oldPage) {
        newPage = oldPage + 1;
      }
    }
    if (newPage !== oldPage) {
      dispatch(
        searchCharacterDataSlice.actions.setSearchPage({
          page: newPage.toString(),
        })
      );
    }
  };

  return (
    <button
      className="pagination__btn"
      disabled={isDisabled}
      onClick={() => {
        handleClick();
      }}
    >
      {btnText}
    </button>
  );
}
