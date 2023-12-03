import React from 'react';
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
          <Tile data={uncontrolledData} type="uncontrolled" />
          <Tile data={controlledData} type="controlled" />
        </div>
      </div>
    </>
  );
}
