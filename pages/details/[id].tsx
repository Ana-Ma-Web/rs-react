// import Info from '../app/components/info/Info';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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

export const getServerSideProps = async (context: GetServerSideProps) => {
  console.log(context);
  const res = await fetch(`https://api.jikan.moe/v4/characters/${''}`);
  const item = await res.json();
  return { props: { item } };
};

export default function DetailsPage({} // item,
: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  const id = typeof query.id === 'string' ? query.id : '';
  // const item = await getData({ id });
  const item = {
    data: {
      name: 'iewefdd',
      name_kanji: 'ojneiuh',
      about: 'wsoekfwesf enfsoefn sejjd dnd dow sefon',
      images: {
        jpg: {
          image_url:
            'https://cdn.myanimelist.net/images/characters/11/516853.jpg',
        },
      },
    },
  };

  return (
    <div className="details">
      <Link className="details__overlay" href="/"></Link>
      <div className="details__wrapper">
        <Link href="/">
          <button>CLOSE {id}</button>
        </Link>

        <h2>{item?.data.name_kanji}</h2>
        {/* <Image
          alt="character"
          src={item?.data.images.jpg.image_url}
          className="details__img"
          height={200}
          width={200}
        ></Image> */}
        <h2>{item?.data.name}</h2>
        <div>{item?.data.about}</div>
        <div>id: {id}</div>
      </div>
    </div>
  );
}
