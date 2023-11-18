import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchCharacterDataSlice } from '../../store/reducers/SearchCharacterDataSlice';

export default function PaginationLimitBtn(props: { limit: string }) {
  const dispatch = useAppDispatch();
  const activeLimit = useAppSelector(
    (state) => state.searchCharacterDataReducer.limit
  );

  const className = `pagination__btn pagination-limit-btn ${
    props.limit && props.limit === activeLimit
      ? 'pagination-limit-btn_active'
      : ''
  }`;

  const handleClick = () => {
    if (props.limit !== activeLimit) {
      dispatch(
        searchCharacterDataSlice.actions.setSearchLimit({
          limit: props.limit || '5',
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
