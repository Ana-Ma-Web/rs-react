import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetails } from '../types';

export default function DetailsPage() {
  const { page, limit, search } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null as ItemDetails | null);
  const id = useParams().id;

  useEffect(() => {
    if (!isLoaded) {
      fetch(`https://api.jikan.moe/v4/characters/${id}`)
        .then((res) => res.json())
        .then((result: { data: ItemDetails }) => {
          setData(result.data);
          setIsLoaded(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="details">
        <Link
          className="details__overlay"
          to={`/${page}/${limit}/${search}`}
        ></Link>
        <div className="details__wrapper">
          <Link to={`/${page}/${limit}/${search}`}>
            <button>CLOSE</button>
          </Link>

          {!isLoaded ? (
            <>
              <div className="details__loading-text">LOADING</div>
              <div className="details__loading-img">
                <div>💮</div>
              </div>
            </>
          ) : (
            <>
              <h2>{data?.name_kanji}</h2>
              <img
                className="details__img"
                src={data?.images.jpg.image_url}
              ></img>
              <h2>{data?.name}</h2>
              <div>{data?.about}</div>
              <div>id: {id}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
