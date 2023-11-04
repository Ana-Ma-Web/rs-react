import React from 'react';
import { Link } from 'react-router-dom';
import { SearchItem } from '../../types';

function Card(props: { name: string; img: string; id: string }) {
  return (
    <Link to={`/details/${props.id}`}>
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
