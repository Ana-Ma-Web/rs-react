import { Dispatch, SetStateAction } from 'react';

export const setBase64 = (props: {
  files: FileList | null | undefined;
  setImageData: Dispatch<SetStateAction<string>>;
}) => {
  new Promise(() => {
    if (props.files && props.files.length > 0) {
      const file = props.files[0];
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          props.setImageData(fileReader.result);
        }
      };
    }
  });
};
