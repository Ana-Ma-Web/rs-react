import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
// import NotFound from '../pages/not-found/NotFound';
// import Layout from '../components/layout/Layout';
// import LoginPage from '../pages/login/LoginPage';
// import MainPage from '../pages/main/MainPage';
// import RegisterPage from '../pages/register/RegisterPage';
// import About from '../pages/about/About';
// import Catalog from '../pages/catalog/Catalog';
// import Profile from '../pages/profile/Profile';
// import CartPage from '../pages/cart/CartPage';
// import ProductPage from '../pages/product/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    // children: [
    //   {
    //     path: '/',
    //     element: <MainPage />,
    //   },
    //   {
    //     path: '/product',
    //     element: <ProductPage />,
    //     children: [
    //       {
    //         path: ':key',
    //         element: <ProductPage />,
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default router;
