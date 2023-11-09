import React, { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function PaginationLimitBtn(props: {
  limit: string;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get('search');
  const activeLimit = searchParams.get('limit') || '5';

  const className = `pagination__btn pagination-limit-btn ${
    props.limit && props.limit === activeLimit
      ? 'pagination-limit-btn_active'
      : ''
  }`;

  const handleClick = () => {
    if (props.limit !== activeLimit) {
      props.setIsLoaded(false);

      console.log('limit', props.limit);
      console.log(props.limit || '5');
      setSearchParams({
        page: '1',
        limit: props.limit || '5',
        search: searchText || '',
      });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {props.limit}
    </button>
  );
}
