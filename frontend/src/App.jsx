import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import AccountSetting from './pages/AccountSetting';

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Toaster />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/profile' element={<AccountSetting />} />
      </Routes>
    </>
  );
}

export default App;
