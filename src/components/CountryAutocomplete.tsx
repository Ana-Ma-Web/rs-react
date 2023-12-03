import React, { RefObject } from 'react';
import Datalist from './Datalist';

export default function CountryAutocomplete(props: {
  inputCountryRef: RefObject<HTMLInputElement>;
}) {
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
        <Datalist />
      </label>
    </div>
  );
}
