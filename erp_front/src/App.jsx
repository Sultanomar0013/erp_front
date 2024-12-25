import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './user_mod/pages/login';
import Home from './user_mod/pages/home';
import Panel from './user_mod/components/profileComponent/myProfile';
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
        <Route path="/home/*"
          element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          }
        >
          <Route path="myAccount/myProfile" element={<Panel />} />
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
