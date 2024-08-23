import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Watch from './watch';

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/watch' element={<Watch/>} />
       </Routes>
    </div>
  );
}

export default App;
