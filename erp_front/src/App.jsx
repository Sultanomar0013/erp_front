import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './user_mod/pages/login';
import MainHome from './user_mod/pages/mainHome';
import ItHome from './it_mod/pages/mainHome';
import HRHome from './hr_mod/pages/mainHome';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/userMod/home/*" element={<MainHome />} />
        <Route path="/itMod/home/*" element={<ItHome />} />
        <Route path="/hrMod/home/*" element={<HRHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
