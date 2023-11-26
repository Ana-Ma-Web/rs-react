import ErrorBoundary from '@/components/ErrorBoundary';
import { JSXElementConstructor } from 'react';
import './styles/global.css';

export default function MyApp(props: {
  Component: JSXElementConstructor<{ a: number }>;
  pageProps: { a: number };
}) {
  const { Component, pageProps } = props;
  return (
    <div className="AAAAAAAAAAAAAAAA">
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </div>
  );
}
