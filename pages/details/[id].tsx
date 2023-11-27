import RootLayout from '@/components/layout';
import { DataProps, GetServerSidePropsParams } from '@/types';
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

export const getServerSideProps = async (context: GetServerSidePropsParams) => {
  const { limit, page, q } = context.query;
  const searchText = q;
  const res = await fetch(
    `https://api.jikan.moe/v4/characters/${context.params.id}`
  );
  const itemData = await res.json();

  const allRes = await fetch(
    `https://api.jikan.moe/v4/characters/?limit=${limit || '5'}&page=${
      page || 1
    }&q=${searchText || ''}`
  );
  const data = await allRes.json();

  return { props: { itemData, data } };
};

export default function DetailsPage({ itemData, data }: DataProps) {
  const router = useRouter();
  const { limit, page, searchText } = router.query;
  const id = typeof router.query.id === 'string' ? router.query.id : '';

  if (itemData.status === '429' || data.status === '429') {
    throw new Error(
      `Too many requests!! Please do not click more than once per second.`
    );
  }

  return (
    <RootLayout data={{ itemData, data }}>
      <div className="details">
        <Link
          className="details__overlay"
          href={`/?limit=${limit || '5'}&page=${page || 1}&q=${
            searchText || ''
          }`}
        ></Link>
        <div className="details__wrapper">
          <Link href="/">
            <button>CLOSE {id}</button>
          </Link>

          <h2>{itemData?.data.name_kanji}</h2>
          <Image
            alt="character"
            src={itemData?.data.images.jpg.image_url}
            className="details__img"
            layout="fill"
            objectFit="contain"
          ></Image>
          <h2>{itemData?.data.name}</h2>
          <div>{itemData?.data.about}</div>
          <div>id: {id}</div>
        </div>
      </div>
    </RootLayout>
  );
}
