import React from 'react';

export default function PaginationArrowBtn(props: { type: 'left' | 'right' }) {
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
    },
  };

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
      // dispatch(setCardsLoadingFlag(true));
      // dispatch(
      //   searchCharacterDataSlice.actions.setSearchPage({
      //     page: newPage.toString(),
      //   })
      // );
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
