import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './user_mod/pages/login';
import Home from './user_mod/pages/home';
// import PrivateRoute from '../authenticate/private_route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
          <Route
          path="/"
          element={
            <LogIn />
          }
        />
        <Route
          path="/home/*"
          // path="/"
          element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
