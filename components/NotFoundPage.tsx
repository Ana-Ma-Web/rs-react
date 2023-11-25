import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <div data-testid="not-found-page">404 🔎</div>
      <span>Return to </span>
      <Link href="/">home</Link>
    </>
  );
}
