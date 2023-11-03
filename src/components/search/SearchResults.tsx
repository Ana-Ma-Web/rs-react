import React from 'react';
import { SearchItem } from '../../types';

export default function SearchResults(props: { items: SearchItem[] | null }) {
  return (
    <div className="results">
      {!Array.isArray(props.items) || props.items.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        props.items.map((e) => (
          <div className="card" key={e?.url}>
            <div className="card__name">{e?.name}</div>
            <div className="card__description">
              <img src={e?.images.jpg.image_url}></img>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
