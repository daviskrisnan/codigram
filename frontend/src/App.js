import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register, HomePage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Navigate replace to='/login' />} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/home/*' element= {<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
