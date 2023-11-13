import React, { useContext } from 'react';
import { ItemsDataContext } from '../../pages/MainPage';
import Card from './Card';

export default function () {
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
