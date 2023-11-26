import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Card(props: { name: string; img: string; id: string }) {
  const router = useRouter();
  const { limit, page, searchText } = router.query;

  return (
    <div data-testid={'card'}>
      <Link
        href={`/details/${props.id}?limit=${limit || '5'}&page=${page || 1}&q=${
          searchText || ''
        }`}
        data-testid={'card-link'}
      >
        <div className="card">
          <div className="card__name" data-testid="card-name">
            {props.name}
          </div>
          <div className="card__description">
            <Image
              alt="character"
              src={props.img}
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto' }}
              priority={true}
            ></Image>
          </div>
        </div>
      </Link>
    </div>
  );
}
