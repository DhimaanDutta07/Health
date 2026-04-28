import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Claims from './pages/Claims';
import Dashboard from './pages/Dashboard';
import ClaimStories from './pages/ClaimStories';

import './App.css';

import useAuthStore from './store/auth.store';
import useAdminAuthStore from './store/admin-auth.store';

import TermInsuranceCalculator from './pages/CalculatorPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/claims" element={<Claims />} />
      <Route path="/claim-stories" element={<ClaimStories />} />
      <Route path='/tools/calculator' element={<TermInsuranceCalculator />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}