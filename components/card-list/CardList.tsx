import React from 'react';
// import Card from '../card/Card';

export default function CardList() {
  return (
    <div className="results">
      CardList
      {/* {!Array.isArray(data?.data) || data?.data.length === 0 ? (
        <div>NOT FOUND</div>
      ) : (
        data?.data.map((e) => (
          <Card
            key={e?.url}
            name={e?.name}
            img={e?.images.jpg.image_url}
            id={e?.mal_id}
          />
        ))
      )} */}
    </div>
  );
}
