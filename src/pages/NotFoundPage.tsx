import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div>404 🔎</div>
      <span>Return to </span>
      <Link to="/1/10/lili">home</Link>
    </>
  );
}
