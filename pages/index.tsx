// import CardList from '@/components/card-list/CardList';
import RootLayout from '@/components/layout';
import { ICharacter } from '@/models/ICharacter';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.jikan.moe/v4/characters/');
  const json = await res.json();
  const data = json.data;
  return { props: { data } };
};

export default function HomePage(data: { data: ICharacter[] }) {
  return (
    <>
      <RootLayout data={data.data}></RootLayout>
      {/* <CardList items={data.data} />; */}
    </>
  );
}
