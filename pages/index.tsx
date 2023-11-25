// import CardList from '@/components/card-list/CardList.jsx';
import { ICharacter } from '@/models/ICharacter';

// export const getServerSideProps = async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const items = await res.json();
//   return { props: { items } };
// };

export default function HomePage(items: ICharacter[]) {
  console.log(items);
  return <></>;
  // return <CardList items={items} />;
}
