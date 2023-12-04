import React from 'react';
import { Link } from 'react-router-dom';
import Tile from '../components/Tile';
import { useAppSelector } from '../hooks/redux';

export default function MainPage() {
  const data = useAppSelector((state) => state.formReducer);

  return (
    <>
      <div className="wrapper">
        <h1>MainPage</h1>
        <nav className="nav">
          <Link to={`/uncontrolled`}>uncontrolled</Link>
          <Link to={`/controlled`}>controlled</Link>
        </nav>
        <div className="tiles">
          {data.map((e, i) => (
            <Tile key={i} data={e} />
          ))}
          {/* <Link className="tile-wrapper" to={`/controlled`}>
            <Tile data={controlledData} type="controlled" />
          </Link> */}
        </div>
      </div>
    </>
  );
}
