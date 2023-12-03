import React, { RefObject } from 'react';

export default function GenderInput(props: {
  inputGenderRef: RefObject<HTMLSelectElement>;
}) {
  return (
    <div>
      <label>
        Gender:
        <select name="selectedFruit" ref={props.inputGenderRef}>
          <option value="cat">Cat</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>
  );
}
