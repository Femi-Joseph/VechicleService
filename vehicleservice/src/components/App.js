import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUpComponent/SignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/signup" element=<SignUp /> />
      </Routes>
    </div>
  );
};

export default App;
