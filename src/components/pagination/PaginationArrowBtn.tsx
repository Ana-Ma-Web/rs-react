import React, { useContext } from 'react';
import {
  PaginationDataContext,
  SearchDataContext,
  SetIsLoadedContext,
  SetSearchDataContext,
} from '../../pages/MainPage';

export default function PaginationArrowBtn(props: { type: 'left' | 'right' }) {
  const setIsLoaded = useContext(SetIsLoadedContext);
  const paginationData = useContext(PaginationDataContext);

  const searchData = useContext(SearchDataContext);
  const setSearchData = useContext(SetSearchDataContext);

  const activeLimit = searchData.limit || '5';
  const searchText = searchData.text || '';

  const btnText = props.type === 'left' ? '\u21F7' : '\u21F8';
  const isDisabled =
    props.type === 'left'
      ? paginationData?.current_page === 1
      : paginationData?.current_page === paginationData?.last_visible_page;

  const handleClick = () => {
    const oldPage = paginationData?.current_page;
    if (props.type === 'left') {
      if (oldPage) {
        const newPage = oldPage - 1;
        setSearchData &&
          setSearchData({
            page: newPage.toString(),
            limit: activeLimit,
            text: searchText,
          });
        setIsLoaded && setIsLoaded(false);
      }
    } else {
      if (oldPage) {
        const newPage = oldPage + 1;
        setSearchData &&
          setSearchData({
            page: newPage.toString(),
            limit: activeLimit,
            text: searchText,
          });
        setIsLoaded && setIsLoaded(false);
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
