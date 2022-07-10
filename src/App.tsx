import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
