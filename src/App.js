import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import GoogleSingIn from './Components/GoogleSingIn/GoogleSingIn';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google" element={<GoogleSingIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
