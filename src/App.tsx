import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

export const ErrorContext = React.createContext({ isError: false });

export default function App() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) throw new Error('Click to error button 🪤');
  }, [isError]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorContext.Provider value={{ isError }}>
            <Layout setIsError={setIsError} />
          </ErrorContext.Provider>
        }
      >
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
