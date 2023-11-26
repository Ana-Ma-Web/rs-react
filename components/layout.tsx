// import CardList from '@/components/card-list/CardList';
import Header from '@/components/header/Header';
import { ICharacter } from '@/models/ICharacter';
import CardList from './card-list/CardList';
// import { ICharacter } from '@/models/ICharacter';
// import { IPagination } from '@/models/IPagination';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Anime',
//   description: 'Anime characters',
// };

// const searchData = {
//   limit: 5,
//   page: 1,
//   text: '',
// };

// async function getData(): Promise<{
//   data: ICharacter[];
//   pagination: IPagination;
// }> {
//   const response = await fetch(
//     `https://api.jikan.moe/v4/characters?limit=${searchData.limit || 5}&page=${
//       searchData.page || 1
//     }&q=${searchData.text || ''}`
//   );

//   return response.json();
// }

export default function RootLayout({
  children,
  data,
}: {
  children?: React.ReactNode;
  data: ICharacter[];
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    <div className="wrapper">
      <Header />
      {/* <CardList items={await (await getData()).data} /> */}
      <CardList items={data} />
      {children}
    </div>

    //   </body>
    // </html>
  );
}
