import React from 'react';
import { createSearchParams, Link, useSearchParams } from 'react-router-dom';
import { SearchItem } from '../../types';

function Card(props: { name: string; img: string; id: string }) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '5';
  const search = searchParams.get('search') || '';

  return (
    <Link
      to={{
        pathname: `/details/${props.id}`,
        search: `?${createSearchParams({ page, limit, search })}`,
      }}
    >
      <div className="card">
        <div className="card__name">{props.name}</div>
        <div className="card__description">
          <img src={props.img}></img>
        </div>
      </div>
    </Link>
  );
}

export default function SearchResults(props: { items: SearchItem[] | null }) {
  return (
    <div className="results">
      {!Array.isArray(props.items) || props.items.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        props.items.map((e) => (
          <Card
            key={e?.url}
            name={e?.name}
            img={e?.images.jpg.image_url}
            id={e?.mal_id}
          />
        ))
      )}
    </div>
  );
}
