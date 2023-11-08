import React, { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationData } from '../../types';

function PaginationLimitButton(props: {
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

      setSearchParams({
        page: '1',
        limit: props.limit ? props.limit : '5',
        search: searchText ? searchText : '',
      });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {props.limit}
    </button>
  );
}

export default function Pagination(props: {
  paginationData: PaginationData | null;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const paginationLimitOptions = [5, 10, 15];

  const [searchParams, setSearchParams] = useSearchParams();
  const activeLimit = searchParams.get('limit');
  const searchText = searchParams.get('search');

  const handleClick = (props: {
    paginationData: PaginationData | null;
    isNext: boolean;
    setIsLoaded: Dispatch<SetStateAction<boolean>>;
  }) => {
    const oldPage = props.paginationData?.current_page;
    if (oldPage) {
      const newPage = props.isNext ? oldPage + 1 : oldPage - 1;
      setSearchParams({
        page: newPage.toString(),
        limit: activeLimit || '5',
        search: searchText || '',
      });
      props.setIsLoaded(false);
    }
  };
  return (
    <>
      {props.paginationData !== null && props.paginationData !== undefined && (
        <div className="pagination">
          <button
            className="pagination__btn"
            disabled={props.paginationData.current_page === 1}
            onClick={() => {
              handleClick({
                paginationData: props.paginationData,
                isNext: false,
                setIsLoaded: props.setIsLoaded,
              });
            }}
          >
            &larr;
          </button>
          <div className="pagination__number">
            {props.paginationData.current_page}
          </div>
          <button
            className="pagination__btn"
            disabled={
              props.paginationData.current_page ===
              props.paginationData.last_visible_page
            }
            onClick={() => {
              handleClick({
                paginationData: props.paginationData,
                isNext: true,
                setIsLoaded: props.setIsLoaded,
              });
            }}
          >
            &rarr;
          </button>
          <div>
            {paginationLimitOptions.map((e) => (
              <PaginationLimitButton
                key={e}
                limit={e ? e.toString() : '5'}
                setIsLoaded={props.setIsLoaded}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
