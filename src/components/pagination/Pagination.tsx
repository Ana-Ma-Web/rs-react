import React from 'react';
import { PaginationData } from '../../types';

export default function Pagination(props: {
  paginationData: PaginationData | null;
}) {
  return (
    <>
      {props.paginationData !== null && props.paginationData !== undefined && (
        <div>Pagination: {props.paginationData?.has_next_page.toString()}</div>
      )}
    </>
  );
}
