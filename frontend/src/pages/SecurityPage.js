import React, { useContext } from 'react';
import { AuthContext } from '../App';

const SecurityPage = () => {
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
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'سياسة الأمان' : 'Security Policy'}
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
          
          {/* حماية البنية التحتية */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'حماية البنية التحتية:' : 'Infrastructure Protection:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'استضافة البيانات داخل مراكز بيانات سعودية آمنة متوافقة مع معايير SAMA / CITC.' : 'Data hosting within secure Saudi data centers compliant with SAMA / CITC standards.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'استخدام جدر حماية متعددة الطبقات (Firewalls) وأنظمة كشف التسلل (IDS/IPS).' : 'Use of multi-layered firewalls and intrusion detection systems (IDS/IPS).'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'تشفير الاتصال بالكامل باستخدام TLS 1.3 / HTTPS.' : 'Complete communication encryption using TLS 1.3 / HTTPS.'}
              </li>
            </ul>
          </div>

          {/* حماية البيانات */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'حماية البيانات:' : 'Data Protection:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'تشفير جميع الملفات والبيانات داخل قواعد البيانات بتقنيات AES-256.' : 'Encryption of all files and data within databases using AES-256 technology.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'تقسيم الصلاحيات بحيث لا يُسمح لأي موظف بالوصول لبيانات المستخدمين إلا عند الضرورة وبتفويض.' : 'Permission segregation so no employee can access user data except when necessary and with authorization.'}
              </li>
            </ul>
          </div>

          {/* المراقبة والرصد */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'المراقبة والرصد:' : 'Monitoring and Surveillance:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'مراقبة مستمرة للنشاطات على مدار الساعة (24/7) لرصد أي نشاط مشبوه.' : 'Continuous 24/7 activity monitoring to detect any suspicious activity.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'سجل تدقيق (Audit Log) لكل المعاملات داخل النظام لكشف محاولات التلاعب أو الوصول غير المصرح به.' : 'Audit log for all system transactions to detect tampering or unauthorized access attempts.'}
              </li>
            </ul>
          </div>

          {/* النسخ الاحتياطي */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'النسخ الاحتياطي:' : 'Backup:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'نسخ احتياطي يومي آمن داخل مراكز بيانات منفصلة داخل المملكة.' : 'Secure daily backups within separate data centers inside the Kingdom.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'إمكانية الاسترجاع خلال دقائق في حال الطوارئ (Disaster Recovery).' : 'Recovery capability within minutes in case of emergencies (Disaster Recovery).'}
              </li>
            </ul>
          </div>

          {/* حماية الحسابات */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'حماية الحسابات:' : 'Account Protection:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'تسجيل دخول آمن باستخدام كلمات مرور قوية مع محدودية المحاولات.' : 'Secure login using strong passwords with limited attempts.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'ميزة التحقق الثنائي (2FA) متاحة عند التفعيل للحسابات الحساسة.' : 'Two-factor authentication (2FA) available when activated for sensitive accounts.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'حساب لكل مستخدم ومنع مشاركة الحسابات.' : 'Individual account for each user and prevention of account sharing.'}
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

export default SecurityPage;