import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PaginationData } from '../../types';

function PaginationLimitButton(props: {
  num: number;
  activeLimit: number;
  setActiveLimit: Dispatch<SetStateAction<number>>;
  setActivePage: Dispatch<SetStateAction<number>>;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const { search } = useParams();
  const className = `pagination__btn ${
    props.num === props.activeLimit ? 'pagination-limit-btn-active' : ''
  }`;

  const handleClick = () => {
    if (props.num !== props.activeLimit) {
      props.setActiveLimit(props.num);
      navigate(`/1/${props.num}/${search}`);
      props.setActivePage(1);
      props.setIsLoaded(false);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {props.num}
    </button>
  );
}

export default function Pagination(props: {
  paginationData: PaginationData | null;
  activeLimit: number;
  setActiveLimit: Dispatch<SetStateAction<number>>;
  setActivePage: Dispatch<SetStateAction<number>>;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const { limit, search } = useParams();
  const navigate = useNavigate();
  const paginationLimitOptions = [5, 10, 15];

  const handleClick = (props: {
    paginationData: PaginationData | null;
    setActivePage: Dispatch<SetStateAction<number>>;
    isNext: boolean;
    setIsLoaded: Dispatch<SetStateAction<boolean>>;
  }) => {
    const oldPage = props.paginationData?.current_page;
    if (oldPage) {
      const newPage = props.isNext ? oldPage + 1 : oldPage - 1;
      props.setActivePage(newPage);
      props.setIsLoaded(false);
      navigate(`/${newPage}/${limit}/${search}`);
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
                setActivePage: props.setActivePage,
                isNext: false,
                setIsLoaded: props.setIsLoaded,
              });
            }}
          >
            &larr;
          </button>
          <button
            className="pagination__btn"
            disabled={
              props.paginationData.current_page ===
              props.paginationData.last_visible_page
            }
            onClick={() => {
              handleClick({
                paginationData: props.paginationData,
                setActivePage: props.setActivePage,
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
                num={e}
                activeLimit={props.activeLimit}
                setActiveLimit={props.setActiveLimit}
                setActivePage={props.setActivePage}
                setIsLoaded={props.setIsLoaded}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
