import CardList from '@/components/card-list/CardList';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime',
  description: 'Anime characters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CardList />

        {children}
      </body>
    </html>
  );
}
