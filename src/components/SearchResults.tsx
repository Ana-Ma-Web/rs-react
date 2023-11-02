import React from 'react';
import { SearchItem } from '../types';

export default function SearchResults(props: { items: SearchItem[] | null }) {
  return (
    <div className="results">
      {props.items === null || props.items === undefined ? (
        <div>NOT FOUND</div>
      ) : (
        props.items.map((e) => (
          <div className="card" key={e.url}>
            <div className="card__name">{e.name}</div>
            <div className="card__description">
              <div className="card__date">Date: {e.air_date}</div>
              <div className="card__episode">Episode: {e.episode}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
