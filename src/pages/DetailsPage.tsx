import { Link, useParams } from 'react-router-dom';
import { characterAPI } from '../services/CharacterService';
import Info from '../components/info/Info';

export default function DetailsPage() {
  const id = useParams().id || '1';
  const { data, status, error } = characterAPI.useFetchCharacterDetailsQuery({
    id,
  });

  return (
    <>
      <div className="details">
        <Link
          className="details__overlay"
          to={{
            pathname: '/',
          }}
        ></Link>
        <div className="details__wrapper">
          <Link
            to={{
              pathname: '/',
            }}
          >
            <button>CLOSE</button>
          </Link>

          {status === 'fulfilled' ? (
            <>
              <h2>{data?.data?.name_kanji}</h2>
              <img
                className="details__img"
                src={data?.data?.images.jpg.image_url}
              ></img>
              <h2>{data?.data?.name}</h2>
              <div>{data?.data?.about}</div>
              <div>id: {id}</div>
            </>
          ) : (
            <Info status={status} error={error} />
          )}
        </div>
      </div>
    </>
  );
}
