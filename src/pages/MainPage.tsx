import React from 'react';
import { Link } from 'react-router-dom';
import Tile from '../components/Tile';
import { useAppSelector } from '../hooks/redux';

export default function MainPage() {
  const uncontrolledData = useAppSelector(
    (state) => state.uncontrolledFormReducer.data
  );
  const controlledData = useAppSelector(
    (state) => state.controlledFormReducer.data
  );
  return (
    <>
      <div className="wrapper">
        <h1>MainPage</h1>
        <div className="tiles">
          <Link className="tile-wrapper" to={`/uncontrolled`}>
            <Tile data={uncontrolledData} type="uncontrolled" />
          </Link>
          <Link className="tile-wrapper" to={`/controlled`}>
            <Tile data={controlledData} type="controlled" />
          </Link>
        </div>
      </div>
    </>
  );
}
