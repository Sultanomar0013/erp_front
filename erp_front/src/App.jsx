import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './user_mod/pages/login';
import Home from './user_mod/pages/home';
import Panel from './user_mod/components/profileComponent/myProfile';
import ItHome from './it_mod/pages/ithome';
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
        <Route path="/userMod/home/*"
          element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          }
        >
          </Route>
          <Route path="/itMod/home/*"
          element={
            // <PrivateRoute>
            <ItHome />
            // </PrivateRoute>
          }
        >
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
