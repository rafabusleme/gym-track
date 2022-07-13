import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import AuthContextProvider from './shared/contexts/AuthContext/AuthContext';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
