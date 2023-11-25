import React from 'react';

export default function PaginationLimitBtn(props: { limit: string }) {
  const limit = 5;
  const page = 1;
  const searchText = '';

  const data = {
    page,
    limit,
    searchText,
    pagination: {
      current_page: 1,
      last_visible_page: 1,
      items: {
        count: '5',
      },
    },
  };

  const paginationData = data?.pagination;
  const activeLimit = paginationData?.items.count.toString();

  const className = `pagination__btn pagination-limit-btn ${
    props.limit && props.limit === activeLimit
      ? 'pagination-limit-btn_active'
      : ''
  }`;

  const handleClick = () => {
    if (props.limit !== activeLimit) {
      // dispatch(setCardsLoadingFlag(true));
      // dispatch(
      //   searchCharacterDataSlice.actions.setSearchLimit({
      //     limit: props.limit || '5',
      //   })
      // );
      // dispatch(
      //   searchCharacterDataSlice.actions.setSearchPage({
      //     page: '1',
      //   })
      // );
    }
  };

  return (
    <button className={className} onClick={handleClick} data-testid="pag-btn">
      {props.limit}
    </button>
  );
}
