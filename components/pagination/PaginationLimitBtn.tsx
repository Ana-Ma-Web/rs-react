import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function PaginationLimitBtn(props: { limit: string }) {
  const router = useRouter();
  const { limit, q } = router.query;
  const searchText = q;

  const activeLimit = limit;
  const newLimit = props.limit;

  const className = `btn pagination__btn pagination-limit-btn ${
    newLimit && newLimit === activeLimit ? 'pagination-limit-btn_active' : ''
  }`;

  return (
    <>
      <Link href={`?limit=${newLimit}&page=${1}&q=${searchText || ''}`}>
        <button className={className} data-testid="pag-btn">
          {props.limit}
        </button>
      </Link>
    </>
  );
}
