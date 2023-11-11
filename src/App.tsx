import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

interface ErrorContextType {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>> | null;
}

export const ErrorContext = React.createContext<ErrorContextType>({
  isError: false,
  setIsError: null,
});

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
          <ErrorContext.Provider value={{ isError, setIsError }}>
            <Layout />
          </ErrorContext.Provider>
        }
      >
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
