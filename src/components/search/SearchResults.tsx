import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsDataContext } from '../../pages/MainPage';

function Card(props: { name: string; img: string; id: string }) {
  return (
    <Link
      to={{
        pathname: `/details/${props.id}`,
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

export default function SearchResults() {
  const items = useContext(ItemsDataContext);

  return (
    <div className="results">
      {!Array.isArray(items) || items.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        items.map((e) => (
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
