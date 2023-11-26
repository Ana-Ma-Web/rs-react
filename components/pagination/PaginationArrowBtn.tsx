import { IPagination } from '@/models/IPagination';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function PaginationArrowBtn(props: {
  type: 'left' | 'right';
  paginationData: IPagination;
}) {
  const router = useRouter();
  const { limit, searchText } = router.query;

  const paginationData = props.paginationData;

  const btnText = props.type === 'left' ? '\u21F7' : '\u21F8';
  const isDisabled =
    props.type === 'left'
      ? paginationData?.current_page === 1
      : paginationData?.current_page === paginationData?.last_visible_page;

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

  return (
    <Link
      href={`?limit=${limit}&page=${newPage ? newPage : oldPage}&q=${
        searchText || ''
      }`}
    >
      <button className="pagination__btn" disabled={isDisabled}>
        {btnText}
      </button>
    </Link>
  );
}
