import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout(props: {
  setError: (isError: boolean) => void;
}) {
  return (
    <>
      <div className="wrapper">
        {/* <RouterProvider router={router} /> */}
        <Header setError={props.setError} />
        <Outlet />
      </div>
    </>
  );
}
