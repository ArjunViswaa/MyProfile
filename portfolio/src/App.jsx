import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/portfolio-dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;