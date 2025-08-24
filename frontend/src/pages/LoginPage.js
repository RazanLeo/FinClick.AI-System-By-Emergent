import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../App';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LoginPage = () => {
  const { user, login, language } = useContext(AuthContext);
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  // Predefined accounts - المطلوب 3 حسابات كما طلب المستخدم
  const predefinedAccounts = {
    subscriber: {
      email: 'subscriber@finclick.ai',
      password: 'subscriber123',
      label: language === 'ar' ? 'حساب المشتركين' : 'Subscriber Account',
      size: 'large' // الأكبر حجماً
    },
    admin: {
      email: 'Razan@FinClick.AI',
      password: 'RazanFinClickAI@056300',
      label: language === 'ar' ? 'حساب الإدارة' : 'Admin Account',
      size: 'small', // أصغر
      hideUsername: true // إخفاء اسم المستخدم
    },
    guest: {
      email: 'Guest@FinClick.AI',
      password: 'GuestFinClickAI@123321',
      label: language === 'ar' ? 'حساب الضيوف' : 'Guest Account',
      size: 'small', // أصغر
      hideUsername: true // إخفاء اسم المستخدم
    }
  };

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredefinedLogin = async (accountType) => {
    const account = predefinedAccounts[accountType];
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/auth/login`, {
        email: account.email,
        password: account.password
      });

      login(response.data.user, response.data.token);
      
      toast({
        title: language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Login Successful',
        description: language === 'ar' 
          ? `مرحباً بك في ${account.label}` 
          : `Welcome to ${account.label}`,
      });
    } catch (error) {
      // If predefined accounts don't exist, create them
      try {
        await axios.post(`${API}/auth/register`, {
          email: account.email,
          password: account.password,
          user_type: accountType
        });
        
        const loginResponse = await axios.post(`${API}/auth/login`, {
          email: account.email,
          password: account.password
        });

        login(loginResponse.data.user, loginResponse.data.token);
        
        toast({
          title: language === 'ar' ? 'تم إنشاء الحساب وتسجيل الدخول' : 'Account Created and Logged In',
          description: language === 'ar' 
            ? `تم إنشاء ${account.label} بنجاح` 
            : `${account.label} created successfully`,
        });
      } catch (createError) {
        toast({
          title: language === 'ar' ? 'خطأ' : 'Error',
          description: language === 'ar' 
            ? 'حدث خطأ أثناء تسجيل الدخول' 
            : 'An error occurred during login',
          variant: 'destructive'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const response = await axios.post(`${API}/auth/login`, {
          email: formData.email,
          password: formData.password
        });

        login(response.data.user, response.data.token);
        
        toast({
          title: language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Login Successful',
          description: language === 'ar' ? 'مرحباً بك في FinClick.AI' : 'Welcome to FinClick.AI',
        });
      } else {
        // Register
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: language === 'ar' ? 'خطأ' : 'Error',
            description: language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match',
            variant: 'destructive'
          });
          setLoading(false);
          return;
        }

        const response = await axios.post(`${API}/auth/register`, {
          email: formData.email,
          password: formData.password,
          user_type: 'subscriber'
        });

        login(response.data.user, response.data.token);
        
        toast({
          title: language === 'ar' ? 'تم إنشاء الحساب بنجاح' : 'Account Created Successfully',
          description: language === 'ar' 
            ? 'مرحباً بك في FinClick.AI! يمكنك الآن البدء في التحليل'
            : 'Welcome to FinClick.AI! You can now start analyzing',
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.detail || 
        (language === 'ar' ? 'حدث خطأ أثناء العملية' : 'An error occurred during the operation');
      
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)'
    }}>
      <div className="form-container" style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_ebc2f66e-7345-46c5-be16-9a3edd6d9822/artifacts/w6u97qyr_%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20FinClick.AI%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%A7%D8%B3%D9%85.jpg" 
            alt="FinClick.AI Logo" 
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
          />
          <h1 className={language === 'ar' ? 'arabic-text' : ''}>
            {isLogin 
              ? (language === 'ar' ? 'تسجيل الدخول' : 'Sign In')
              : (language === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account')
            }
          </h1>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{ opacity: 0.8 }}>
            {language === 'ar' 
              ? 'ادخل إلى نظام التحليل المالي الثوري'
              : 'Enter the Revolutionary Financial Analysis System'
            }
          </p>
        </div>

        {/* Quick Access Buttons */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ marginBottom: '1rem', textAlign: 'center' }}>
            {language === 'ar' ? 'دخول سريع' : 'Quick Access'}
          </h3>
          
          {/* حساب المشتركين - الأكبر والأول */}
          <div style={{ marginBottom: '1rem' }}>
            <button
              onClick={() => handlePredefinedLogin('subscriber')}
              disabled={loading}
              className="btn-primary"
              style={{ 
                width: '100%', 
                padding: '1.5rem', 
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E24A 100%)',
                color: '#000',
                fontWeight: 'bold'
              }}
            >
              👥 {predefinedAccounts.subscriber.label}
            </button>
          </div>
          
          {/* حسابات الإدارة والضيوف - أصغر */}
          <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '1fr 1fr' }}>
            <button
              onClick={() => handlePredefinedLogin('admin')}
              disabled={loading}
              className="btn-primary"
              style={{ 
                width: '100%', 
                padding: '0.75rem',
                fontSize: '0.9rem',
                opacity: 0.8
              }}
            >
              🔑 {language === 'ar' ? 'إدارة' : 'Admin'}
            </button>
            <button
              onClick={() => handlePredefinedLogin('guest')}
              disabled={loading}
              className="btn-primary"
              style={{ 
                width: '100%', 
                padding: '0.75rem',
                fontSize: '0.9rem',
                opacity: 0.8
              }}
            >
              👤 {language === 'ar' ? 'ضيف' : 'Guest'}
            </button>
          </div>
          
          <div style={{ textAlign: 'center', margin: '1rem 0', opacity: 0.6 }}>
            {language === 'ar' ? 'أو' : 'OR'}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder={language === 'ar' ? 'ادخل بريدك الإلكتروني' : 'Enter your email'}
              required
            />
          </div>

          <div className="form-group">
            <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
              {language === 'ar' ? 'كلمة المرور' : 'Password'}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder={language === 'ar' ? 'ادخل كلمة المرور' : 'Enter your password'}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter your password'}
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                {language === 'ar' ? 'جارٍ المعالجة...' : 'Processing...'}
              </div>
            ) : (
              <>
                {isLogin 
                  ? (language === 'ar' ? 'دخول' : 'Sign In')
                  : (language === 'ar' ? 'إنشاء حساب' : 'Create Account')
                }
              </>
            )}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-gold)',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
            className={language === 'ar' ? 'arabic-text' : ''}
          >
            {isLogin 
              ? (language === 'ar' ? 'ليس لديك حساب؟ إنشاء حساب جديد' : "Don't have an account? Create new account")
              : (language === 'ar' ? 'لديك حساب بالفعل؟ تسجيل الدخول' : 'Already have an account? Sign in')
            }
          </button>
        </div>


      </div>
    </div>
  );
};

export default LoginPage;