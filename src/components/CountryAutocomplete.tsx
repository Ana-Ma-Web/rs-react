import React, { RefObject } from 'react';
import { useAppSelector } from '../hooks/redux';

export default function CountryAutocomplete(props: {
  inputCountryRef: RefObject<HTMLInputElement>;
}) {
  const { data } = useAppSelector((state) => state.countriesReducer);

  return (
    <div>
      <label>
        Country:
        <input
          name="country"
          list="countryList"
          type="text"
          ref={props.inputCountryRef}
        />
        <datalist id="countryList">
          {data.map((e) => (
            <option key={e} value={e} />
          ))}
        </datalist>
      </label>
    </div>
  );
}
