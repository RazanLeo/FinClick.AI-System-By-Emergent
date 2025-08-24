import React, { useContext } from 'react';
import { AuthContext } from '../App';

const CompliancePage = () => {
  const { language } = useContext(AuthContext);

  return (
    <div className={`page-container ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      padding: '2rem',
      color: '#D4AF37'
    }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚖️</div>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'سياسة الامتثال - اللوائح السعودية' : 'Compliance Policy - Saudi Regulations'}
          </h1>
        </div>

        {/* Content */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '20px',
          padding: '2rem',
          lineHeight: '1.8'
        }}>
          
          {/* نظام حماية البيانات الشخصية السعودي */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'نظام حماية البيانات الشخصية السعودي (PDPL – SDAIA):' : 'Saudi Personal Data Protection Law (PDPL – SDAIA):'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'عدم جمع أي بيانات شخصية إلا بهدف تقديم الخدمة فقط.' : 'No collection of personal data except for service provision purposes only.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'الحصول على موافقة المستخدم الصريحة قبل معالجة بياناته.' : 'Obtaining explicit user consent before processing their data.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'السماح للمستخدم بالوصول أو التعديل أو حذف بياناته متى ما أراد.' : 'Allowing users to access, modify, or delete their data whenever they wish.'}
              </li>
            </ul>
          </div>

          {/* تطبيق متطلبات البنك المركزي السعودي */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'تطبيق متطلبات البنك المركزي السعودي (SAMA) للأمن السيبراني:' : 'Implementation of Saudi Central Bank (SAMA) Cybersecurity Requirements:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'تطبيق ضوابط الأمن السيبراني الصادرة من SAMA بما يتوافق مع تطبيقات الخدمات المالية السحابية (SaaS).' : 'Implementation of SAMA cybersecurity controls in compliance with cloud financial services applications (SaaS).'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'إجراء تقييم مخاطر دوري ورفع تقارير الامتثال عند الطلب.' : 'Conducting periodic risk assessments and submitting compliance reports upon request.'}
              </li>
            </ul>
          </div>

          {/* هيئة الاتصالات والفضاء والتقنية */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'هيئة الاتصالات والفضاء والتقنية (CITC):' : 'Communications, Space & Technology Commission (CITC):'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'استضافة البيانات ومعالجتها داخل المملكة تماشيًا مع سياسات سيادة البيانات الوطنية.' : 'Data hosting and processing within the Kingdom in line with national data sovereignty policies.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'الالتزام بسياسة (Cloud Computing Regulatory Framework – CCF).' : 'Compliance with the Cloud Computing Regulatory Framework (CCF).'}
              </li>
            </ul>
          </div>

          {/* الإفصاح وإدارة الحوادث */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'الإفصاح وإدارة الحوادث:' : 'Disclosure and Incident Management:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'إخطار الجهات المتضررة والجهات المختصة خلال 72 ساعة في حال وقوع حادث أمني.' : 'Notifying affected parties and relevant authorities within 72 hours in case of a security incident.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'وجود فريق استجابة لحوادث الأمن السيبراني (CSIRT).' : 'Having a Cybersecurity Incident Response Team (CSIRT).'}
              </li>
            </ul>
          </div>

          {/* خصوصية البيانات المالية */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'خصوصية البيانات المالية:' : 'Financial Data Privacy:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'عدم مشاركة البيانات المالية أو التحليلات مع أي طرف خارجي دون إذن المستخدم.' : 'No sharing of financial data or analyses with any third party without user permission.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'استخدام البيانات فقط لغرض التحليل والتطوير الداخلي للنظام.' : 'Using data only for analysis and internal system development purposes.'}
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Home Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
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

export default CompliancePage;