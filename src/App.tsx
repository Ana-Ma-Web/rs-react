import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import ControlledFormPage from './pages/ControlledFormPage';
import MainPage from './pages/MainPage';
import UncontrolledFormPage from './pages/UncontrolledFormPage';

function App() {
  const { controlledFormReducer } = useAppSelector((state) => state);
  console.log('controlledFormReducer', controlledFormReducer);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
      <Route path="/controlled" element={<ControlledFormPage />} />
    </Routes>
  );
}

export default App;
