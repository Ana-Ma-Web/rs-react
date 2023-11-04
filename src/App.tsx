import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
// import { BrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './router/Router';

export default function App() {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw new Error('Click to error button 🪤');
  }, [error]);

  return (
    <Routes>
      <Route path="/" element={<Layout setError={setError} />}>
        <Route path="/" element={<MainPage error={error} />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
