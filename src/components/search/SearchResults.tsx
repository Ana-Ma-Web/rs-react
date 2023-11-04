import React from 'react';
import { Link } from 'react-router-dom';
import { SearchItem } from '../../types';

function Card(props: { name: string; img: string }) {
  return (
    <div className="card">
      <div className="card__name">{props.name}</div>
      <div className="card__description">
        <img src={props.img}></img>
      </div>
    </div>
  );
}

export default function SearchResults(props: { items: SearchItem[] | null }) {
  return (
    <div className="results">
      {!Array.isArray(props.items) || props.items.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        props.items.map((e) => (
          <Link key={e?.url} to="/details">
            <Card name={e?.name} img={e?.images.jpg.image_url} />
          </Link>
        ))
      )}
    </div>
  );
}
