import React, { useContext } from 'react';
import { AuthContext } from '../App';

const PrivacyPage = () => {
  const { language } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: '#000000', color: '#D4AF37', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1rem',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'مرحبًا بك في FinClick.AI. نحن نحترم خصوصيتك ونلتزم بحماية البيانات الشخصية الخاصة بك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا ومشاركتنا لمعلوماتك عند استخدامك لمنصتنا الذكية للتحليل المالي.'
              : 'Welcome to FinClick.AI. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, protect, and share your information when you use our intelligent financial analysis platform.'
            }
          </p>
        </section>

        {/* Information We Collect */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'المعلومات التي نجمعها' : 'Information We Collect'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'بيانات التسجيل (الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، القطاع، النشاط، الكيان القانوني ومعلومات الشركة العامة).',
                en: 'Registration data (name, email, phone number, company name, sector, activity, legal entity and general company information).'
              },
              {
                ar: 'بيانات الدفع (لا يتم تخزين بيانات البطاقة كاملة على خوادمنا).',
                en: 'Payment data (complete card data is not stored on our servers).'
              },
              {
                ar: 'الملفات المالية التي تقوم برفعها (قوائم مالية، موازين مراجعة، جداول).',
                en: 'Financial files you upload (financial statements, trial balances, spreadsheets).'
              },
              {
                ar: 'بيانات الاستخدام والتفاعل داخل المنصة.',
                en: 'Usage and interaction data within the platform.'
              }
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? item.ar : item.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* How We Use Information */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'طرق استخدام المعلومات' : 'How We Use Information'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'تنفيذ التحليلات المالية وإصدار التقارير المطلوبة.',
                en: 'Executing financial analyses and generating required reports.'
              },
              {
                ar: 'تحسين جودة الخدمة، وتطوير نماذج الذكاء الاصطناعي.',
                en: 'Improving service quality and developing AI models.'
              },
              {
                ar: 'التواصل معك للتحديثات، والإشعارات، والدعم الفني.',
                en: 'Communicating with you for updates, notifications, and technical support.'
              },
              {
                ar: 'التحقق من الهوية ومنع الاستخدام غير المصرّح به.',
                en: 'Identity verification and preventing unauthorized use.'
              }
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? item.ar : item.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Data Protection */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'حماية البيانات' : 'Data Protection'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'تشفير كامل للبيانات أثناء النقل (SSL) وداخل الخوادم.',
                en: 'Complete data encryption during transmission (SSL) and within servers.'
              },
              {
                ar: 'سياسات وصول صارمة، ونسخ احتياطي دوري، ورصد اختراقات.',
                en: 'Strict access policies, regular backups, and breach monitoring.'
              },
              {
                ar: 'لا تتم مشاركة بياناتك مع أي طرف ثالث إلا بموافقتك أو وفقًا للقانون.',
                en: 'Your data is not shared with any third party except with your consent or according to law.'
              }
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? item.ar : item.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Data Retention */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الاحتفاظ بالبيانات' : 'Data Retention'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'نحتفظ ببيانات المستخدم طوال فترة الاشتراك الفعّال.',
                en: 'We retain user data throughout the active subscription period.'
              },
              {
                ar: 'يتم حذف البيانات خلال 30 يومًا من إلغاء الاشتراك أو طلب الحذف.',
                en: 'Data is deleted within 30 days of subscription cancellation or deletion request.'
              }
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? item.ar : item.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* User Rights */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'حقوقك' : 'Your Rights'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'الوصول إلى بياناتك.',
                en: 'Access to your data.'
              },
              {
                ar: 'تعديل/تحديث بياناتك.',
                en: 'Modify/update your data.'
              },
              {
                ar: 'طلب حذف البيانات.',
                en: 'Request data deletion.'
              },
              {
                ar: 'إلغاء الاشتراك في الرسائل التسويقية.',
                en: 'Unsubscribe from marketing messages.'
              }
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>▶</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? item.ar : item.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Information */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الاتصال' : 'Contact'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '1rem',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar' 
              ? 'لأي استفسار بخصوص الخصوصية:'
              : 'For any privacy inquiries:'
            }
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            <p><strong>Email:</strong> finclick.ai@gmail.com</p>
            <p><strong>Phone:</strong> 00966544827213</p>
          </div>
        </section>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            onClick={() => window.history.back()}
            style={{
              backgroundColor: '#D4AF37',
              color: '#000',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;