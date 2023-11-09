import React, { Dispatch, SetStateAction } from 'react';
import { PaginationData } from '../../types';
import PaginationArrowBtn from './PaginationArrowBtn';
import PaginationLimitButton from './PaginationLimitBtn';

export default function Pagination(props: {
  paginationData: PaginationData | null;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const paginationLimitOptions = [5, 10, 15];

  return (
    <>
      {props.paginationData !== null && props.paginationData !== undefined && (
        <div className="pagination">
          <PaginationArrowBtn
            type="left"
            paginationData={props.paginationData}
            setIsLoaded={props.setIsLoaded}
          />
          <div className="pagination__number">
            {props.paginationData.current_page}
          </div>
          <PaginationArrowBtn
            type="right"
            paginationData={props.paginationData}
            setIsLoaded={props.setIsLoaded}
          />
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
