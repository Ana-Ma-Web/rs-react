import React from 'react';
import { useAppSelector } from '../hooks/redux';

export default function Datalist() {
  const { data } = useAppSelector((state) => state.countriesReducer);

  return (
    <div>
      <datalist id="countryList">
        {data.map((e) => (
          <option key={e} value={e} />
        ))}
      </datalist>
    </div>
  );
}
