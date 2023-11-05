import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) throw new Error('Click to error button 🪤');
  }, [isError]);

  return (
    <Routes>
      <Route
        path="/:page/:limit/:search"
        element={<Layout isError={isError} setIsError={setIsError} />}
      >
        <Route
          path="/:page/:limit/:search/details/:id"
          element={<DetailsPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
