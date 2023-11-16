import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props: { name: string; img: string; id: string }) {
  return (
    <div data-testid={'card'}>
      <Link
        to={{
          pathname: `/details/${props.id}`,
        }}
        data-testid={'card-link'}
      >
        <div className="card">
          <div className="card__name" data-testid="card-name">
            {props.name}
          </div>
          <div className="card__description">
            <img src={props.img}></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
