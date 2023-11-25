import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

interface GetServerSidePropsParams {
  params: {
    id: string;
  };
}

export const getServerSideProps = async (context: GetServerSidePropsParams) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/characters/${context.params.id}`
  );
  const item = await res.json();
  return { props: { item } };
};

export default function DetailsPage({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  const id = typeof query.id === 'string' ? query.id : '';

  return (
    <div className="details">
      <Link className="details__overlay" href="/"></Link>
      <div className="details__wrapper">
        <Link href="/">
          <button>CLOSE {id}</button>
        </Link>

        <h2>{item?.data.name_kanji}</h2>
        <Image
          alt="character"
          src={item?.data.images.jpg.image_url}
          className="details__img"
          layout="fill"
          objectFit="contain"
        ></Image>
        <h2>{item?.data.name}</h2>
        <div>{item?.data.about}</div>
        <div>id: {id}</div>
      </div>
    </div>
  );
}
