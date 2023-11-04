import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  return (
    <>
      <div className="details">
        <h2>DetailsPage</h2>
        <div>id: {useParams().id}</div>
      </div>
    </>
  );
}
