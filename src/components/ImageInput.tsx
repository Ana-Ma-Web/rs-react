import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { setBase64 } from '../utils/setBase64';

export default function ImageInput(props: {
  setImageData: Dispatch<SetStateAction<string>>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBase64({ files: e.target.files, setImageData: props.setImageData });
  };

  return (
    <>
      <label htmlFor="file">Image:</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        id="file"
      />
    </>
  );
}
