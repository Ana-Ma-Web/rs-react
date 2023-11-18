import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';
// import { useAppSelector } from './hooks/redux';

export default function App() {
  // const dispatch = useAppDispatch();

  // const { error } = useAppSelector((state) => state.characterReducer);
  // useEffect(() => {
  //   if (error) throw new Error('Click to error button 🪤');
  // }, [error]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
