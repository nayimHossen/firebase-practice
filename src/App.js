import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import GoogleSingIn from './Components/GoogleSingIn/GoogleSingIn';
import Header from './Components/Header/Header';
import EmailPassword from './Components/Email-password/EmailPassword';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<GoogleSingIn />} />
        <Route path="/email" element={<EmailPassword />} />
      </Routes>
    </div>
  );
}

export default App;
