import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PaginationData } from '../../types';

function PaginationLimitButton(props: {
  num: number;
  activeLimit: number;
  setActiveLimit: Dispatch<SetStateAction<number>>;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const { page, search } = useParams();
  const className = `pagination__btn ${
    props.num === props.activeLimit ? 'pagination-limit-btn-active' : ''
  }`;

  const handleClick = () => {
    props.setActiveLimit(props.num);
    navigate(`/${page}/${props.num}/${search}`);
    props.setIsLoaded(false);
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
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      {props.paginationData !== null && props.paginationData !== undefined && (
        <div className="pagination">
          Pagination: {props.paginationData?.has_next_page.toString()}
          <button
            className="pagination__btn"
            disabled={props.paginationData.current_page === 1}
          >
            &larr;
          </button>
          <button
            className="pagination__btn"
            disabled={
              props.paginationData.current_page ===
              props.paginationData.last_visible_page
            }
          >
            &rarr;
          </button>
          <div>
            <PaginationLimitButton
              num={5}
              activeLimit={props.activeLimit}
              setActiveLimit={props.setActiveLimit}
              setIsLoaded={props.setIsLoaded}
            />
            <PaginationLimitButton
              num={10}
              activeLimit={props.activeLimit}
              setActiveLimit={props.setActiveLimit}
              setIsLoaded={props.setIsLoaded}
            />
            <PaginationLimitButton
              num={25}
              activeLimit={props.activeLimit}
              setActiveLimit={props.setActiveLimit}
              setIsLoaded={props.setIsLoaded}
            />
          </div>
        </div>
      )}
    </>
  );
}
