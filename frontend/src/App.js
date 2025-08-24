import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Components  
import NewHeader from './components/NewHeader';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AnalysisPage from './pages/AnalysisPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ManualPage from './pages/ManualPage';
import PoliciesPage from './pages/PoliciesPage';
import OtherPoliciesPage from './pages/OtherPoliciesPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import MediaPage from './pages/MediaPage';
import JobsPage from './pages/JobsPage';
import SecurityPage from './pages/SecurityPage';
import CompliancePage from './pages/CompliancePage';
import IPPolicyPage from './pages/IPPolicyPage';
import PaymentPolicyPage from './pages/PaymentPolicyPage';
import AdvancedAnalysisPage from './pages/AdvancedAnalysisPage';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '/api';

// Auth Context
export const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    // Check for stored token
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend
      axios.get(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>جارٍ التحميل...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, language, toggleLanguage }}>
      <div className={`App ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Router>
          <NewHeader />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/manual" element={<ManualPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/other-policies" element={<OtherPoliciesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/ip-policy" element={<IPPolicyPage />} />
              <Route path="/payment-policy" element={<PaymentPolicyPage />} />
              <Route path="/advanced-analysis" element={<AdvancedAnalysisPage />} />
              <Route 
                path="/dashboard" 
                element={user ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/analysis" 
                element={user ? <AnalysisPage /> : <Navigate to="/login" />} 
              />
            </Routes>
          </main>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;