import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import StrainDetailPage from './pages/StrainDetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/strain/:id" element={<StrainDetailPage />} />
      </Routes>
    </div >
  );
};

export default App;