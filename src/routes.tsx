/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
