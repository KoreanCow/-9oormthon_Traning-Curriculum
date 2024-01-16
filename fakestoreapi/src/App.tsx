import { Route, Routes } from 'react-router-dom';
import './App.css';
import TestingComponent from './components/TestingComponent';
import HeaderComponents from './components/HeaderComponents';
import CartPageComponent from './components/CartPageComponent';
import LoginPageComponent from './components/LoginPageComponent';
import SignUpComponent from './components/SignUpComponent';
import React from 'react';
// import { useState } from 'react';

function App() {
  // const [userData, setUserData] = useState(null);

  return (
    <div>
      <HeaderComponents />
      <Routes>
        <Route path='/' element={<TestingComponent />} />
        <Route path='/cart' element={<CartPageComponent />} />
        <Route path='/login' element={<LoginPageComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
      </Routes>
    </div>
  );
}

export default App;
