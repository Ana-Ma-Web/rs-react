import React from 'react';
import { Outlet } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import Header from '../header/Header';

export default function Layout(props: {
  isError: boolean;
  setIsError: (isError: boolean) => void;
}) {
  return (
    <div className="wrapper">
      <main>
        <Header setIsError={props.setIsError} />
        <MainPage error={props.isError} />
      </main>
      <Outlet />
    </div>
  );
}
