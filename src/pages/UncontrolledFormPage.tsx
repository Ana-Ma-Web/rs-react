import React, { MouseEvent, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import CountryAutocomplete from '../components/CountryAutocomplete';
import GenderInput from '../components/GenderInput';
import ImageInput from '../components/ImageInput';
import { useAppDispatch } from '../hooks/redux';
import { formSlice } from '../store/reducers/FormSlice';

export default function UncontrolledFormPage() {
  const { addForm } = formSlice.actions;
  const dispatch = useAppDispatch();
  const inputAgeRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputGenderRef = useRef<HTMLSelectElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputTCAcceptRef = useRef<HTMLInputElement>(null);

  const [imageData, setImageData] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);

  const handleSubmit = async (formData: MouseEvent) => {
    formData.preventDefault();
    const gender =
      inputGenderRef.current?.value === 'male' ||
      inputGenderRef.current?.value === 'female' ||
      inputGenderRef.current?.value === 'other'
        ? inputGenderRef.current?.value
        : 'cat';
    dispatch(
      addForm({
        age: inputAgeRef.current?.value
          ? Number(inputAgeRef.current?.value)
          : 0,
        country: inputCountryRef.current?.value
          ? inputCountryRef.current?.value
          : 'country',
        email: inputEmailRef.current?.value
          ? inputEmailRef.current?.value
          : 'email@email.com',
        gender: gender,
        imgBase64: imageData,
        name: inputNameRef.current?.value
          ? inputNameRef.current?.value
          : 'undef',
        password: inputPasswordRef.current?.value
          ? inputPasswordRef.current?.value
          : '******',
        tcAccept: inputTCAcceptRef.current?.checked
          ? inputTCAcceptRef.current?.checked
          : true,
      })
    );
    setIsRedirect(true);
  };

  return (
    <>
      {isRedirect && <Navigate to="/" replace={true} />}
      <div className="wrapper">
        <h1>UncontrolledFormPage</h1>
        <form>
          <div className="form__item">
            <label>
              Age:
              <input name="age" type="number" ref={inputAgeRef} />
            </label>
          </div>
          <div className="form__item">
            <CountryAutocomplete inputCountryRef={inputCountryRef} />
          </div>
          <div className="form__item">
            <label>
              Email:
              <input name="email" type="text" ref={inputEmailRef} />
            </label>
          </div>
          <div className="form__item">
            <label>
              Password:
              <input name="email" type="text" ref={inputPasswordRef} />
            </label>
          </div>
          <div className="form__item">
            <GenderInput inputGenderRef={inputGenderRef} />
          </div>
          <div className="form__item">
            <label>
              Name:
              <input name="name" type="text" ref={inputNameRef} />
            </label>
          </div>
          <div className="form__item">
            <label>
              <ImageInput setImageData={setImageData} />
            </label>
          </div>
          <div className="form__item">
            <label>
              TC Accept:{' '}
              <input name="tc" type="checkbox" ref={inputTCAcceptRef} />
            </label>
          </div>
          <button onClick={handleSubmit}>Click</button>
          {/* <input onSubmit={handleSubmit} type="submit" value="Submit" /> */}
        </form>
        <Link to={'/'}>Home</Link>
      </div>
    </>
  );
}
