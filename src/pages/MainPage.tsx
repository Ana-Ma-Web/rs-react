import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <h1>MainPage</h1>
      <Link to={'/uncontrolled'}>Uncontrolled</Link>
      <Link to={'/controlled'}>Controlled</Link>
    </>
  );
}
