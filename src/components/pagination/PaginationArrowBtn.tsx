import React, { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationData } from '../../types';

export default function PaginationArrowBtn(props: {
  type: 'left' | 'right';
  paginationData: PaginationData;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeLimit = searchParams.get('limit') || '5';
  const searchText = searchParams.get('search') || '';
  const btnText = props.type === 'left' ? '\u21F7' : '\u21F8';
  const isDisabled =
    props.type === 'left'
      ? props.paginationData.current_page === 1
      : props.paginationData.current_page ===
        props.paginationData.last_visible_page;

  const handleClick = () => {
    const oldPage = props.paginationData?.current_page;
    if (props.type === 'left') {
      if (oldPage) {
        const newPage = oldPage - 1;
        setSearchParams({
          page: newPage.toString(),
          limit: activeLimit,
          search: searchText,
        });
        props.setIsLoaded(false);
      }
    } else {
      if (oldPage) {
        const newPage = oldPage + 1;
        setSearchParams({
          page: newPage.toString(),
          limit: activeLimit,
          search: searchText,
        });
        props.setIsLoaded(false);
      }
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
