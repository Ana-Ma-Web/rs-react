// import CardList from '@/components/card-list/CardList';
import RootLayout from '@/components/layout';
import { DataProps, GetServerSidePropsParams } from '@/types';

export const getServerSideProps = async (context: GetServerSidePropsParams) => {
  const { limit, page, q } = context.query;
  const searchText = q;

  const res = await fetch(
    `https://api.jikan.moe/v4/characters/?limit=${limit || '5'}&page=${
      page || 1
    }&q=${searchText || ''}`
  );
  const json = await res.json();
  const data = json;
  return { props: { data } };
};

export default function HomePage(data: DataProps) {
  return (
    <>
      <RootLayout data={data}></RootLayout>
    </>
  );
}
