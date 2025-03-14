import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;