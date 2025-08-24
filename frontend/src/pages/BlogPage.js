import React, { useContext } from 'react';
import { AuthContext } from '../App';

const BlogPage = () => {
  const { language } = useContext(AuthContext);

  return (
    <div className={`page-container ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      padding: '2rem',
      color: '#D4AF37'
    }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'المدونة والأخبار' : 'Blog & News'}
          </h1>
        </div>

        {/* No Blog Message */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
          border: '2px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem', opacity: 0.7 }}>📰</div>
          
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: '1.8rem', 
            fontWeight: '600', 
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            {language === 'ar' ? 'لا توجد مدونات أو أخبار حالياً' : 'No Current Blogs or News'}
          </h2>
          
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: '1.2rem',
            lineHeight: '1.6',
            opacity: 0.8,
            fontFamily: 'Playfair Display, serif',
            marginBottom: '2rem'
          }}>
            {language === 'ar' 
              ? 'نعمل على إنشاء محتوى مفيد وثري يغطي آخر التطورات في عالم التحليل المالي والاستثمار. ترقبوا المقالات والأخبار القادمة.'
              : 'We are working on creating useful and rich content that covers the latest developments in financial analysis and investment. Stay tuned for upcoming articles and news.'
            }
          </p>

          <div style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '10px',
            padding: '1.5rem',
            fontSize: '1rem',
            lineHeight: '1.5'
          }}>
            <strong className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              color: '#D4AF37', 
              fontFamily: 'Playfair Display, serif' 
            }}>
              {language === 'ar' ? 'مواضيع قادمة:' : 'Upcoming Topics:'}
            </strong>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              marginTop: '1rem', 
              textAlign: language === 'ar' ? 'right' : 'left' 
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                • {language === 'ar' ? 'دليل شامل للتحليل المالي للمبتدئين' : 'Comprehensive guide to financial analysis for beginners'}
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                • {language === 'ar' ? 'أحدث الاتجاهات في الأسواق المالية' : 'Latest trends in financial markets'}
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                • {language === 'ar' ? 'استراتيجيات الاستثمار الذكي' : 'Smart investment strategies'}
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                • {language === 'ar' ? 'تأثير الذكاء الاصطناعي على التحليل المالي' : 'Impact of AI on financial analysis'}
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Home Button */}
        <div style={{ marginTop: '3rem' }}>
          <a href="/" style={{
            display: 'inline-block',
            backgroundColor: '#D4AF37',
            color: '#000000',
            padding: '1rem 2rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            fontFamily: 'Playfair Display, serif',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
          }}>
            {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;