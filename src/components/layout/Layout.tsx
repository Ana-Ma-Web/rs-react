import React from 'react';
import { Outlet } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import Header from '../header/Header';

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <main>
          <Header />
          <MainPage />
        </main>
      </div>
      <Outlet />
    </>
  );
}
