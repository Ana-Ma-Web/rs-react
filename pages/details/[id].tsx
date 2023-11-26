import RootLayout from '@/components/layout';
import { ICharacter } from '@/models/ICharacter';
import { IPagination } from '@/models/IPagination';
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
  const itemData = await res.json();

  const allRes = await fetch(`https://api.jikan.moe/v4/characters/`);
  const allData = await allRes.json();

  return { props: { itemData, allData } };
};

interface DataProps {
  itemData: { data: ICharacter; status: string };
  allData: {
    pagination: IPagination;
    data: ICharacter[];
    status: string;
  };
}

export default function DetailsPage({ itemData, allData }: DataProps) {
  const { query } = useRouter();
  const id = typeof query.id === 'string' ? query.id : '';

  if (itemData.status === '429' || allData.status === '429') {
    throw new Error(
      `Too many requests!! Please do not click more than once per second.`
    );
  }

  return (
    <RootLayout data={allData.data}>
      <div className="details">
        <Link className="details__overlay" href="/"></Link>
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
