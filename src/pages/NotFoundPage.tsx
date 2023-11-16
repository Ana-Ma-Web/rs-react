import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div data-testid="not-found-page">404 🔎</div>
      <span>Return to </span>
      <Link to="/">home</Link>
    </>
  );
}
