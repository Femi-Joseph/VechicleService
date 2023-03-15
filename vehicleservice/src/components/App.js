import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUpComponent/SignUp';
import Login from './Login/Login';
import DashBoard from './DashBoard/DashBoard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/signup" element=<SignUp /> />
        <Route path="/login" element=<Login /> />
        <Route path="/dashboard" element=<DashBoard /> />
      </Routes>
    </div>
  );
};

export default App;
