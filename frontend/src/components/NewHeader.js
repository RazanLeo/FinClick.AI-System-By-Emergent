import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../App';
import { Bell, Search, ChevronDown, Menu, X, Home, BarChart3, Building2, TrendingUp, Star, CreditCard, BookOpen, MessageSquare } from 'lucide-react';

const NewHeader = () => {
  const { user, language, toggleLanguage, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // بيانات المؤشرات المالية - تاسي أولاً ثم العالمية ثم الخليج
  const [marketIndices, setMarketIndices] = useState([
    // تاسي أولاً
    { name: 'تاسي', nameEn: 'TASI', value: '11,250.45', change: '+1.2%', flag: '🇸🇦' },
    
    // المؤشرات العالمية - أمريكا وأوروبا وآسيا
    { name: 'ناسداك', nameEn: 'NASDAQ', value: '13,760.84', change: '+1.1%', flag: '🇺🇸' },
    { name: 'إس آند بي 500', nameEn: 'S&P 500', value: '4,422.15', change: '+0.6%', flag: '🇺🇸' },
    { name: 'داو جونز', nameEn: 'DOW', value: '34,580.23', change: '+0.8%', flag: '🇺🇸' },
    { name: 'راسل 2000', nameEn: 'RUSSELL', value: '2,234.67', change: '+0.9%', flag: '🇺🇸' },
    { name: 'فتسي 100', nameEn: 'FTSE 100', value: '7,089.34', change: '+0.4%', flag: '🇬🇧' },
    { name: 'داكس', nameEn: 'DAX', value: '15,678.90', change: '+1.2%', flag: '🇩🇪' },
    { name: 'كاك 40', nameEn: 'CAC 40', value: '7,234.56', change: '+0.7%', flag: '🇫🇷' },
    { name: 'إيبيكس 35', nameEn: 'IBEX 35', value: '9,145.78', change: '+0.8%', flag: '🇪🇸' },
    { name: 'فتسي إم آي بي', nameEn: 'FTSE MIB', value: '27,890.34', change: '+1.0%', flag: '🇮🇹' },
    { name: 'يورو ستوكس 50', nameEn: 'EURO STOXX', value: '4,456.78', change: '+0.9%', flag: '🇪🇺' },
    { name: 'نيكي 225', nameEn: 'NIKKEI 225', value: '28,951.23', change: '-0.3%', flag: '🇯🇵' },
    { name: 'هانغ سنغ', nameEn: 'HANG SENG', value: '19,456.78', change: '+1.6%', flag: '🇭🇰' },
    { name: 'شنغهاي', nameEn: 'SHANGHAI', value: '3,234.90', change: '+0.8%', flag: '🇨🇳' },
    { name: 'شنزين', nameEn: 'SHENZHEN', value: '11,890.45', change: '+1.2%', flag: '🇨🇳' },
    { name: 'كوسبي', nameEn: 'KOSPI', value: '2,567.89', change: '+0.7%', flag: '🇰🇷' },
    { name: 'سينسكس', nameEn: 'SENSEX', value: '59,123.45', change: '+1.8%', flag: '🇮🇳' },
    { name: 'نيفتي 50', nameEn: 'NIFTY', value: '17,678.90', change: '+1.5%', flag: '🇮🇳' },
    { name: 'أول أورد', nameEn: 'ALL ORDS', value: '7,456.78', change: '+0.7%', flag: '🇦🇺' },
    { name: 'جوهانسبرغ', nameEn: 'JSE', value: '70,234.56', change: '+1.3%', flag: '🇿🇦' },
    { name: 'ستي تايمز', nameEn: 'STI', value: '3,234.56', change: '+0.6%', flag: '🇸🇬' },
    { name: 'كوالالمبور', nameEn: 'KLCI', value: '1,567.89', change: '+0.9%', flag: '🇲🇾' },
    { name: 'جاكرتا', nameEn: 'JKSE', value: '6,890.12', change: '+1.1%', flag: '🇮🇩' },
    { name: 'تايلاند سيت', nameEn: 'SET', value: '1,678.34', change: '+0.8%', flag: '🇹🇭' },
    
    // دول الخليج
    { name: 'نومو', nameEn: 'NOMU', value: '25,680.12', change: '+2.1%', flag: '🇸🇦' },
    { name: 'دبي المالي', nameEn: 'DFM', value: '4,125.89', change: '+0.8%', flag: '🇦🇪' },
    { name: 'أبوظبي', nameEn: 'ADX', value: '9,750.34', change: '+1.5%', flag: '🇦🇪' },
    { name: 'بورصة قطر', nameEn: 'QE', value: '12,445.67', change: '+0.9%', flag: '🇶🇦' },
    { name: 'بورصة الكويت', nameEn: 'KSE', value: '8,190.23', change: '+1.8%', flag: '🇰🇼' },
    { name: 'بورصة البحرين', nameEn: 'BHB', value: '1,890.45', change: '+0.7%', flag: '🇧🇭' },
    { name: 'بورصة عمان', nameEn: 'MSX', value: '4,567.89', change: '+1.1%', flag: '🇴🇲' },
    
    // مؤشرات السلع والعملات المشفرة
    { name: 'الذهب', nameEn: 'GOLD', value: '$1,987.45', change: '+0.5%', flag: '🥇' },
    { name: 'الفضة', nameEn: 'SILVER', value: '$24.67', change: '+0.8%', flag: '🥈' },
    { name: 'النفط برنت', nameEn: 'BRENT', value: '$78.90', change: '+1.2%', flag: '🛢️' },
    { name: 'النفط الخام', nameEn: 'WTI', value: '$75.34', change: '+1.1%', flag: '⛽' },
    { name: 'بيتكوين', nameEn: 'BTC', value: '$42,567.89', change: '+2.4%', flag: '₿' },
    { name: 'إيثريوم', nameEn: 'ETH', value: '$2,890.45', change: '+3.1%', flag: 'Ξ' }
  ]);

  // قائمة التنقل
  const navigationItems = [
    { 
      key: 'home',
      ar: 'الصفحة الرئيسية', 
      en: 'Home',
      href: '/',
      icon: Home
    },
    { 
      key: 'dashboard',
      ar: 'لوحة التحكم', 
      en: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3
    },
    { 
      key: 'company',
      ar: 'الشركة', 
      en: 'Company',
      href: '/about',
      icon: Building2
    },
    { 
      key: 'analysis',
      ar: 'أنواع التحليل', 
      en: 'Analysis Types',
      href: '#analysis-types',
      icon: TrendingUp
    },
    { 
      key: 'features',
      ar: 'مميزات النظام', 
      en: 'System Features',
      href: '#features',
      icon: Star
    },
    { 
      key: 'pricing',
      ar: 'الاشتراكات والأسعار', 
      en: 'Pricing & Plans',
      href: '#pricing',
      icon: CreditCard
    },
    { 
      key: 'guide',
      ar: 'خطوات الاستخدام', 
      en: 'User Guide',
      href: '#steps',
      icon: BookOpen
    },
    { 
      key: 'support',
      ar: 'التواصل والدعم', 
      en: 'Contact & Support',
      href: '#footer',
      icon: MessageSquare
    }
  ];

  // تحديث المؤشرات كل 30 ثانية (مثال)
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketIndices(prev => prev.map(index => ({
        ...index,
        // محاكاة تغيير بسيط في القيم
        value: (parseFloat(index.value.replace(/,/g, '')) + (Math.random() - 0.5) * 10).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // دالة toggleLanguage مُستقلة من AuthContext

  // دالة البحث
  const handleSearch = (query) => {
    if (!query.trim()) {
      setShowSearchResults(false);
      return;
    }
    
    // محاكاة نتائج البحث
    setShowSearchResults(true);
    
    // يمكن إضافة منطق البحث الحقيقي هنا لاحقاً
    console.log('Searching for:', query);
  };

  // دالة معالجة الإشعارات
  const handleNotifications = () => {
    alert(language === 'ar' ? 'لا توجد إشعارات جديدة' : 'No new notifications');
  };

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // التنقل إلى قسم في نفس الصفحة
      const element = document.querySelector(href === '#analysis-types' ? '#analysis-types' : 
                                           href === '#features' ? '#features' :
                                           href === '#pricing' ? '#pricing' :
                                           href === '#steps' ? '.steps-section' :
                                           href === '#footer' ? 'footer' : href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // التنقل إلى صفحة أخرى
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`w-full ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ backgroundColor: '#000000' }}>
      {/* الهيدر الرئيسي */}
      <header style={{ backgroundColor: '#000000', borderBottom: `1px solid #D4AF37` }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* الشعار واسم النظام */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* الشعار */}
              <div className="flex-shrink-0">
                <img 
                  src="https://customer-assets.emergentagent.com/job_finmetrics-hub/artifacts/gw8bcd94_%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20FinClick.AI%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%A7%D8%B3%D9%85.jpg"
                  alt="FinClick.AI Logo"
                  className="h-12 w-12 transition-all duration-300 hover:scale-110 rounded-full"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    background: 'none',
                    filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))',
                    animation: 'pulse 3s infinite'
                  }}
                />
              </div>
              
              {/* اسم النظام والشعار */}
              <div className="hidden md:block">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold font-playfair" style={{ color: '#D4AF37' }}>
                    FinClick.AI
                  </h1>
                  <p className="text-sm font-playfair leading-tight" style={{ color: '#D4AF37', opacity: 0.8 }}>
                    {language === 'ar' 
                      ? 'نظام التحليل المالي الذكي والثوري'
                      : 'Revolutionary Intelligent Financial Analysis System'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* شريط البحث - وسط الهيدر */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  placeholder={language === 'ar' ? 'البحث في النظام...' : 'Search in system...'}
                  className="w-full px-4 py-2 rounded-lg text-sm font-playfair transition-all duration-200"
                  style={{
                    backgroundColor: '#000000',
                    border: `2px solid #D4AF37`,
                    color: '#D4AF37',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.2)';
                    setTimeout(() => setShowSearchResults(false), 150);
                  }}
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4" style={{ color: '#D4AF37' }} />
                
                {/* نتائج البحث */}
                {showSearchResults && searchQuery && (
                  <div className="absolute top-12 left-0 right-0 bg-black border border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    <div className="p-3 text-sm text-gray-300">
                      {language === 'ar' ? 'نتائج البحث عن:' : 'Search results for:'} "{searchQuery}"
                    </div>
                    <div className="border-t border-gray-700">
                      <div className="p-3 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm font-medium text-yellow-400">
                          {language === 'ar' ? 'التحليل المالي' : 'Financial Analysis'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'ar' ? 'أكثر من 116 نوع تحليل مختلف' : 'More than 116 different analysis types'}
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-800 cursor-pointer">
                        <div className="text-sm font-medium text-yellow-400">
                          {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'ar' ? 'إدارة الحساب والتحليلات' : 'Account and analysis management'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* الأيقونات والأزرار - يمين الهيدر */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              
              {/* تبديل اللغة */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm font-medium font-playfair rounded-lg transition-all duration-200"
                style={{ 
                  color: '#D4AF37',
                  boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  e.target.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.boxShadow = '0 0 8px rgba(212, 175, 55, 0.3)';
                }}
              >
                <span className="text-lg animate-pulse">
                  {language === 'ar' ? '🇸🇦' : '🇺🇸'}
                </span>
                <span className="hidden sm:inline font-bold">
                  {language === 'ar' ? 'AR' : 'EN'}
                </span>
              </button>

              {/* أيقونة التنبيهات */}
              <button 
                onClick={handleNotifications}
                className="relative p-2 rounded-lg transition-all duration-200"
                style={{ color: '#D4AF37' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  e.target.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Bell className="h-5 w-5 animate-pulse" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* أزرار تسجيل الدخول أو معلومات المستخدم */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
                  >
                    <div className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="hidden sm:inline">{user.email}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* قائمة منسدلة للمستخدم */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
                        {user.user_type === 'admin' ? (language === 'ar' ? 'مدير النظام' : 'System Admin') : 
                         user.user_type === 'guest' ? (language === 'ar' ? 'ضيف' : 'Guest') : 
                         (language === 'ar' ? 'مستخدم' : 'User')}
                      </div>
                      <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-400">
                        {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
                      </a>
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-400">
                        {language === 'ar' ? 'الملف الشخصي' : 'Profile'}
                      </a>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                      >
                        {language === 'ar' ? 'تسجيل الخروج' : 'Logout'}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <a
                    href="/register"
                    className="px-4 py-2 text-sm font-medium font-playfair rounded-lg transition-all duration-200"
                    style={{ color: '#D4AF37' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                      e.target.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {language === 'ar' ? 'إنشاء حساب' : 'Register'}
                  </a>
                  <a
                    href="/login"
                    className="px-4 py-2 text-sm font-medium font-playfair rounded-lg transition-all duration-200"
                    style={{ 
                      backgroundColor: '#D4AF37', 
                      color: '#000000',
                      boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.8)';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.5)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                  </a>
                </div>
              )}

              {/* زر القائمة للموبايل */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* قائمة التنقل الرئيسية - سطح المكتب */}
          <nav className="hidden lg:block" style={{ borderTop: `1px solid rgba(212, 175, 55, 0.3)` }}>
            <div className="flex justify-center space-x-4 rtl:space-x-reverse py-3 px-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-xs font-medium font-playfair rounded-lg transition-all duration-300 whitespace-nowrap group flex-1 max-w-[140px]"
                    style={{ color: '#D4AF37' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                      e.target.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.25)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <IconComponent 
                      className="h-4 w-4 group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        color: '#D4AF37', 
                        filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.6))'
                      }}
                    />
                    <span className="font-semibold text-center flex-1 leading-tight">
                      {language === 'ar' ? item.ar : item.en}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* قائمة التنقل للموبايل */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800">
              <div className="py-4 space-y-2">
                {/* شريط البحث للموبايل */}
                <div className="px-3 pb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'البحث في النظام...' : 'Search in system...'}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-sm"
                    />
                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* عناصر التنقل */}
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center space-x-3 rtl:space-x-reverse w-full px-3 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span>{language === 'ar' ? item.ar : item.en}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* شريط المؤشرات المالية */}
      <div 
        className="py-3 overflow-hidden"
        style={{ 
          backgroundColor: '#000000', 
          borderBottom: `1px solid rgba(212, 175, 55, 0.3)`,
          background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.05) 0%, rgba(0, 0, 0, 1) 50%, rgba(212, 175, 55, 0.05) 100%)'
        }}
      >
        <div className="animate-scroll-continuous">
          <div className="flex space-x-8 rtl:space-x-reverse whitespace-nowrap">
            {/* تكرار المؤشرات 3 مرات للحصول على تمرير مستمر */}
            {[...Array(3)].map((_, repeatIndex) => (
              <React.Fragment key={`repeat-${repeatIndex}`}>
                {marketIndices.map((index, i) => (
                  <div 
                    key={`${repeatIndex}-${i}`} 
                    className="flex items-center space-x-4 rtl:space-x-reverse min-w-fit mx-4 px-3 py-1 rounded-lg transition-all duration-200"
                    style={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.05)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      boxShadow: '0 0 8px rgba(212, 175, 55, 0.1)'
                    }}
                  >
                    <span className="text-lg animate-pulse">
                      {index.flag}
                    </span>
                    <span className="text-sm font-bold font-playfair" style={{ color: '#D4AF37' }}>
                      {language === 'ar' ? index.name : index.nameEn}
                    </span>
                    <span className="text-sm font-mono font-bold" style={{ color: '#D4AF37' }}>
                      {index.value}
                    </span>
                    <span 
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{
                        color: index.change.startsWith('+') ? '#22C55E' : '#EF4444',
                        backgroundColor: index.change.startsWith('+') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        border: `1px solid ${index.change.startsWith('+') ? '#22C55E' : '#EF4444'}`
                      }}
                    >
                      {index.change}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-continuous {
          animation: scroll-continuous 120s linear infinite;
          display: flex;
        }
        
        @keyframes scroll-continuous {
          0% {
            transform: translateX(${language === 'ar' ? '100%' : '0%'});
          }
          100% {
            transform: translateX(${language === 'ar' ? '-33.33%' : '-33.33%'});
          }
        }
        
        .rtl {
          direction: rtl;
        }
        
        .ltr {
          direction: ltr;
        }
        
        /* تأثيرات إضافية للفخامة */
        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.6));
        }
        
        .gold-text {
          color: #D4AF37;
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        }
        
        .gold-border {
          border: 2px solid #D4AF37;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default NewHeader;