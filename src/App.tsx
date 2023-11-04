import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';
// import { BrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './router/Router';

export default function App() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) throw new Error('Click to error button 🪤');
  }, [isError]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isError={isError} setIsError={setIsError} />}
      >
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
