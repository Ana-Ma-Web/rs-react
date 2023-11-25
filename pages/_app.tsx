import { JSXElementConstructor } from 'react';
import Layout from '../components/layout';
import './styles/global.css';

export default function MyApp(props: {
  Component: JSXElementConstructor<{ a: number }>;
  pageProps: { a: number };
}) {
  const { Component, pageProps } = props;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
