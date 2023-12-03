import React, { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { IUser } from '../models/IUser';
import { setBase64 } from '../utils/setBase64';
import { formSlice } from '../store/reducers/FormSlice';
import Datalist from '../components/Datalist';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserSchema } from '../utils/yup';

export default function ControlledFormPage() {
  const { addForm } = formSlice.actions;
  const [isRedirect, setIsRedirect] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(UserSchema) });
  const [imageData, setImageData] = useState('');

  const onSubmit: SubmitHandler<IUser> = (data) => {
    dispatch(
      addForm({
        age: data.age,
        country: data.country,
        email: data.email,
        gender: data.gender,
        imgBase64: imageData,
        name: data.name,
        password: data.password,
        tcAccept: data.tcAccept,
      })
    );
    setIsRedirect(true);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(imageData);
    setBase64({ files: e.target.files, setImageData: setImageData });
  };

  return (
    <>
      {isRedirect && <Navigate to="/" replace={true} />}
      <div className="wrapper">
        <h1>ControlledFormPage</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__item">
            <span>Age:</span>
            <input
              {...register('age', { required: true })}
              placeholder="age"
              type="number"
            />
            {errors.age && (
              <div className="form__error">This field is required</div>
            )}
          </div>

          <div className="form__item">
            <span>Country:</span>
            <input
              {...register('country', { required: true })}
              placeholder="country"
              type="text"
              list="countryList"
            />
            <Datalist />
            {errors.country && (
              <div className="form__error">This field is required</div>
            )}
          </div>

          <div className="form__item">
            <span>Email:</span>

            <input
              {...register('email', {
                required: true,
                pattern:
                  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
              })}
              placeholder="email"
            />
            {errors.email && (
              <div className="form__error">Please enter valid email</div>
            )}
          </div>

          <div className="form__item">
            <span>Gender:</span>
            <div>
              <label>
                <input
                  {...register('gender', { required: true })}
                  placeholder="gender"
                  type="radio"
                  name="gender"
                  value="cat"
                />
                Cat
              </label>
              <label>
                <input
                  {...register('gender', { required: true })}
                  placeholder="gender"
                  type="radio"
                  name="gender"
                  value="male"
                />
                Male
              </label>
              <label>
                <input
                  {...register('gender', { required: true })}
                  placeholder="gender"
                  type="radio"
                  name="gender"
                  value="female"
                />
                Female
              </label>
              <label>
                <input
                  {...register('gender', { required: true })}
                  placeholder="gender"
                  type="radio"
                  name="gender"
                  value="other"
                />
                Other
              </label>
            </div>
            {errors.gender && (
              <div className="form__error">This field is required</div>
            )}
          </div>

          <div className="form__item">
            <span>Image:</span>
            <input
              {...register('imgBase64', { required: true })}
              placeholder="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
            {errors.imgBase64 && (
              <div className="form__error">This field is required</div>
            )}
          </div>

          <div className="form__item">
            <span>Name:</span>
            <input
              {...register('name', { required: true })}
              placeholder="name"
            />
            {errors.name && (
              <div className="form__error">This field is required</div>
            )}
          </div>

          <div className="form__item">
            <span>Password:</span>
          </div>

          <div className="form__item">
            <span>TC accept:</span>
          </div>

          <input type="submit" />
          {/* <input onSubmit={handleSubmit} type="submit" value="Submit" /> */}
        </form>
        <Link to={'/'}>Home</Link>
      </div>
    </>
  );
}
