import React, { useContext } from 'react';
import {
  SearchDataContext,
  SetIsLoadedContext,
  SetSearchDataContext,
} from '../../pages/MainPage';

export default function PaginationLimitBtn(props: { limit: string }) {
  const setIsLoaded = useContext(SetIsLoadedContext);

  const searchData = useContext(SearchDataContext);
  const setSearchData = useContext(SetSearchDataContext);

  const searchText = searchData.text;
  const activeLimit = searchData.limit || '5';

  const className = `pagination__btn pagination-limit-btn ${
    props.limit && props.limit === activeLimit
      ? 'pagination-limit-btn_active'
      : ''
  }`;

  const handleClick = () => {
    if (props.limit !== activeLimit) {
      setIsLoaded && setIsLoaded(false);
      setSearchData &&
        setSearchData({
          page: '1',
          limit: props.limit || '5',
          text: searchText || '',
        });
    }
  };

  return (
    <button className={className} onClick={handleClick} data-testid="pag-btn">
      {props.limit}
    </button>
  );
}
