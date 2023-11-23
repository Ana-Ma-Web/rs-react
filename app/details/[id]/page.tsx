// import Info from '../app/components/info/Info';

import Link from 'next/link';

interface Props {
  params: {
    id: number;
  };
}

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `Details ${id} `,
  };
}

export default function DetailsPage({ params: { id } }: Props) {
  return (
    <>
      <div className="details">
        <Link className="details__overlay" href="/"></Link>
        <div className="details__wrapper">
          <Link href="/">
            <button>CLOSE {id}</button>
          </Link>

          {/* {status === 'fulfilled' ? (
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
          )} */}
        </div>
      </div>
    </>
  );
}
