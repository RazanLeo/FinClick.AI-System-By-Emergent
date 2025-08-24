import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Dashboard = () => {
  const { user, language } = useContext(AuthContext);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalysisHistory();
  }, []);

  const fetchAnalysisHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API}/analysis-history`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAnalysisHistory(response.data);
    } catch (error) {
      console.error('Error fetching analysis history:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className={language === 'ar' ? 'arabic-text' : ''}>
          {language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
        </h1>
        <p className={language === 'ar' ? 'arabic-text' : ''}>
          {language === 'ar' 
            ? `مرحباً ${user?.user_type === 'admin' || user?.user_type === 'guest' ? '' : user?.email} - يمكنك الآن بدء التحليل المالي الثوري`
            : `Welcome ${user?.user_type === 'admin' || user?.user_type === 'guest' ? '' : user?.email} - You can now start revolutionary financial analysis`
          }
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'تحليل جديد' : 'New Analysis'}
          </h3>
          <p className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' 
              ? 'ابدأ تحليل مالي شامل جديد لشركتك'
              : 'Start a new comprehensive financial analysis for your company'
            }
          </p>
          <Link to="/advanced-analysis" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
            {language === 'ar' ? 'بدء التحليل الثوري ⚡' : 'Start Revolutionary Analysis ⚡'}
          </Link>
        </div>

        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'التحليلات السابقة' : 'Previous Analyses'}
          </h3>
          <p className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' 
              ? `لديك ${analysisHistory.length} تحليل محفوظ`
              : `You have ${analysisHistory.length} saved analyses`
            }
          </p>
          {loading ? (
            <div className="loading-spinner" style={{ margin: '1rem 0' }}></div>
          ) : (
            <div style={{ marginTop: '1rem' }}>
              {analysisHistory.slice(0, 3).map((analysis, index) => (
                <div key={index} style={{ 
                  padding: '0.5rem 0', 
                  borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: '0.9rem'
                }}>
                  <strong>{analysis.company_name}</strong>
                  <br />
                  <small style={{ opacity: 0.7 }}>
                    {new Date(analysis.created_at).toLocaleDateString()}
                  </small>
                </div>
              ))}
              {analysisHistory.length === 0 && (
                <p style={{ opacity: 0.7, fontStyle: 'italic' }} className={language === 'ar' ? 'arabic-text' : ''}>
                  {language === 'ar' ? 'لا توجد تحليلات سابقة' : 'No previous analyses'}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'إحصائيات سريعة' : 'Quick Stats'}
          </h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'نوع الحساب:' : 'Account Type:'}
              </span>
              <strong style={{ color: 'var(--primary-gold)' }}>
                {user?.user_type === 'admin' && (language === 'ar' ? 'مدير' : 'Admin')}
                {user?.user_type === 'guest' && (language === 'ar' ? 'ضيف' : 'Guest')}
                {user?.user_type === 'subscriber' && (language === 'ar' ? 'مشترك' : 'Subscriber')}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'عدد التحليلات:' : 'Total Analyses:'}
              </span>
              <strong style={{ color: 'var(--primary-gold)' }}>{analysisHistory.length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'حالة الاشتراك:' : 'Subscription Status:'}
              </span>
              <strong style={{ color: user?.subscription_status === 'active' ? 'var(--success-green)' : 'var(--warning-yellow)' }}>
                {user?.subscription_status === 'active' 
                  ? (language === 'ar' ? 'نشط' : 'Active')
                  : (language === 'ar' ? 'غير نشط' : 'Inactive')
                }
              </strong>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'أدوات مجانية' : 'Free Tools'}
          </h3>
          <p className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' 
              ? 'أدوات حسابية مجانية لتحليل سريع'
              : 'Free calculation tools for quick analysis'
            }
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button className="btn-primary" style={{ padding: '0.5rem', fontSize: '0.9rem' }}>
              {language === 'ar' ? 'حاسبة السعر العادل للسهم' : 'Fair Value Calculator'}
            </button>
            <button className="btn-primary" style={{ padding: '0.5rem', fontSize: '0.9rem' }}>
              {language === 'ar' ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
            </button>
            <button className="btn-primary" style={{ padding: '0.5rem', fontSize: '0.9rem' }}>
              {language === 'ar' ? 'مؤشر مزاج السوق' : 'Market Sentiment Index'}
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'الأخبار المالية' : 'Financial News'}
          </h3>
          <div style={{ marginTop: '1rem' }}>
            {[
              {
                title: language === 'ar' ? 'السوق السعودي يرتفع بنسبة 1.2%' : 'Saudi Market rises 1.2%',
                time: '2 ' + (language === 'ar' ? 'ساعات' : 'hours ago')
              },
              {
                title: language === 'ar' ? 'أسعار النفط تواصل الارتفاع' : 'Oil prices continue to rise',
                time: '4 ' + (language === 'ar' ? 'ساعات' : 'hours ago')
              },
              {
                title: language === 'ar' ? 'نتائج إيجابية للقطاع المصرفي' : 'Positive results for banking sector',
                time: '6 ' + (language === 'ar' ? 'ساعات' : 'hours ago')
              }
            ].map((news, index) => (
              <div key={index} style={{ 
                padding: '0.5rem 0', 
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                fontSize: '0.9rem'
              }}>
                <div className={language === 'ar' ? 'arabic-text' : ''}>{news.title}</div>
                <small style={{ opacity: 0.7 }}>{news.time}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'دليل سريع' : 'Quick Guide'}
          </h3>
          <p className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' 
              ? 'خطوات بسيطة للحصول على تحليل شامل'
              : 'Simple steps to get comprehensive analysis'
            }
          </p>
          <ol style={{ marginTop: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
            <li className={language === 'ar' ? 'arabic-text' : ''} style={{ margin: '0.5rem 0' }}>
              {language === 'ar' ? 'ارفع قوائمك المالية' : 'Upload financial statements'}
            </li>
            <li className={language === 'ar' ? 'arabic-text' : ''} style={{ margin: '0.5rem 0' }}>
              {language === 'ar' ? 'اختر نوع التحليل' : 'Choose analysis type'}
            </li>
            <li className={language === 'ar' ? 'arabic-text' : ''} style={{ margin: '0.5rem 0' }}>
              {language === 'ar' ? 'اضغط زر التحليل' : 'Click analyze button'}
            </li>
            <li className={language === 'ar' ? 'arabic-text' : ''} style={{ margin: '0.5rem 0' }}>
              {language === 'ar' ? 'احصل على النتائج والتقارير' : 'Get results and reports'}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;