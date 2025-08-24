import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const Header = () => {
  const { user, logout, language, toggleLanguage } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const marketData = [
    { symbol: 'TASI', value: '11,234.56', change: '+1.2%' },
    { symbol: 'NOMU', value: '25,678.90', change: '+0.8%' },
    { symbol: 'S&P 500', value: '4,567.89', change: '+0.5%' },
    { symbol: 'NASDAQ', value: '14,234.67', change: '+0.7%' },
    { symbol: 'DOW', value: '34,567.89', change: '+0.3%' },
    { symbol: 'FTSE', value: '7,456.78', change: '+0.4%' },
    { symbol: 'DAX', value: '15,789.23', change: '+0.6%' },
    { symbol: 'NIKKEI', value: '28,456.78', change: '+0.9%' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_ebc2f66e-7345-46c5-be16-9a3edd6d9822/artifacts/w6u97qyr_%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20FinClick.AI%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%A7%D8%B3%D9%85.jpg" 
              alt="FinClick.AI Logo" 
              className="logo"
            />
            <div className="logo-text">
              <h1>
                {language === 'ar' ? 'FinClick.AI' : 'FinClick.AI'}
              </h1>
              <p className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' 
                  ? 'نظام التحليل المالي الذكي الثوري'
                  : 'Revolutionary Intelligent Financial Analysis System'
                }
              </p>
            </div>
          </div>

          <nav className="nav-menu">
            <Link to="/" className="nav-link">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            {user && (
              <Link to="/dashboard" className="nav-link">
                {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
              </Link>
            )}
            <a href="#features" className="nav-link">
              {language === 'ar' ? 'المميزات' : 'Features'}
            </a>
            <a href="#analysis-types" className="nav-link">
              {language === 'ar' ? 'أنواع التحليل' : 'Analysis Types'}
            </a>
            <a href="#pricing" className="nav-link">
              {language === 'ar' ? 'الاشتراكات' : 'Pricing'}
            </a>
            <a href="#contact" className="nav-link">
              {language === 'ar' ? 'التواصل' : 'Contact'}
            </a>
          </nav>

          <div className="header-actions">
            <button onClick={toggleLanguage} className="language-toggle">
              {language === 'ar' ? '🇺🇸 EN' : '🇸🇦 AR'}
            </button>
            
            {user ? (
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="user-greeting">
                  {language === 'ar' ? 'مرحباً' : 'Welcome'} {user.email}
                </span>
                <button onClick={handleLogout} className="btn-primary">
                  {language === 'ar' ? 'تسجيل الخروج' : 'Logout'}
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link to="/login" className="btn-primary">
                  {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Market Ticker */}
      <div className="market-ticker">
        <div className="ticker-content">
          {marketData.map((item, index) => (
            <span key={index} style={{ marginRight: '3rem' }}>
              <strong>{item.symbol}:</strong> {item.value} 
              <span style={{ color: item.change.startsWith('+') ? '#22C55E' : '#EF4444', marginLeft: '0.5rem' }}>
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;