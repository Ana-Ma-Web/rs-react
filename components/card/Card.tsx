import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card(props: { name: string; img: string; id: string }) {
  return (
    <div data-testid={'card'}>
      <Link href={`/details/${props.id}`} data-testid={'card-link'}>
        <div className="card">
          <div className="card__name" data-testid="card-name">
            {props.name}
          </div>
          <div className="card__description">
            <Image alt="character" src={props.img}></Image>
          </div>
        </div>
      </Link>
    </div>
  );
}
