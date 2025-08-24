import React, { useContext } from 'react';
import { AuthContext } from '../App';

const ManualPage = () => {
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
            {language === 'ar' ? 'كتيّب استخدام منصة FinClick.AI' : 'FinClick.AI Platform User Manual'}
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            {language === 'ar' ? 'دليل خطوة بخطوة لاستخدام النظام' : 'Step-by-Step Guide to Using the System'}
          </p>
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'مقدمة' : 'Introduction'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'مرحبًا بك في FinClick.AI — أقوى منصة ذكاء اصطناعي للتحليل المالي في العالم. يساعدك هذا الدليل على فهم كيفية استخدام المنصة خطوة بخطوة للحصول على تحليلات مالية شاملة وذكية في ثوانٍ.'
              : 'Welcome to FinClick.AI — the most powerful AI platform for financial analysis in the world. This guide helps you understand how to use the platform step by step to get comprehensive and intelligent financial analysis in seconds.'
            }
          </p>
        </section>

        {/* Steps */}
        {[
          {
            title: { ar: '١. كيفية إنشاء حساب وتفعيل الاشتراك', en: '1. How to Create Account and Activate Subscription' },
            steps: [
              { ar: 'انتقل إلى صفحة الاشتراك', en: 'Go to subscription page' },
              { ar: 'اختر الخطة (شهرية أو سنوية)', en: 'Choose plan (monthly or annual)' },
              { ar: 'أدخل بياناتك (الاسم – البريد – رقم الجوال – اسم الشركة)', en: 'Enter your data (name - email - phone - company name)' },
              { ar: 'قم بالدفع عبر MADA / Visa / Master Card / PayPal / Apple Pay', en: 'Pay via MADA / Visa / Master Card / PayPal / Apple Pay' },
              { ar: 'ستصلك رسالة تفعيل على بريدك تحتوي على: اسم المستخدم، كلمة المرور، رابط تسجيل الدخول', en: 'You will receive activation message with: username, password, login link' },
              { ar: 'يتم تفعيل الحساب فورًا بعد الدفع. إذا لم تصلك البيانات خلال 3 دقائق تواصل مع الدعم', en: 'Account is activated immediately after payment. If you don\'t receive data within 3 minutes contact support' }
            ]
          },
          {
            title: { ar: '٢. تسجيل الدخول لأول مرة', en: '2. First Time Login' },
            steps: [
              { ar: 'افتح الرابط المرسل لك', en: 'Open the link sent to you' },
              { ar: 'أدخل اسم المستخدم وكلمة المرور', en: 'Enter username and password' },
              { ar: 'اختر لغة الواجهة (العربية أو الإنجليزية)', en: 'Choose interface language (Arabic or English)' },
              { ar: 'اضغط على لوحة المستخدم الرئيسية', en: 'Click on main user dashboard' }
            ]
          },
          {
            title: { ar: '٣. بدء عملية التحليل', en: '3. Starting Analysis Process' },
            steps: [
              { ar: 'إرفاق المستندات: لديك 3 خيارات (تحميل قوائم مالية بأي صيغة، تحميل ميزان مراجعة، إدخال يدوي عبر قوالب القوائم المالية)', en: 'Attach documents: You have 3 options (upload financial statements in any format, upload trial balance, manual input via financial statement templates)' },
              { ar: 'يدعم النظام رفع حتى 10 سنوات مالية (10 ملفات بأي صيغة وأي حجم)', en: 'System supports uploading up to 10 financial years (10 files in any format and size)' },
              { ar: 'تحديد خيارات التحليل: اسم الشركة، القطاع، النشاط، الكيان القانوني، نوع المقارنة، سنوات التحليل، اللغة', en: 'Set analysis options: company name, sector, activity, legal entity, comparison type, analysis years, language' },
              { ar: 'اضغط زر "ابدأ التحليل" - يبدأ الذكاء الاصطناعي بتحليل البيانات خلال ثوانٍ', en: 'Click "Start Analysis" button - AI begins data analysis within seconds' },
              { ar: 'مشاهدة النتائج: تحليلات مفصلة (116) نوع مع الشرح والتفسير والمقارنات والتوصيات', en: 'View results: detailed analysis (116) types with explanation, interpretation, comparisons and recommendations' },
              { ar: 'تحميل التقارير: تقرير Word/PDF شامل (50+ صفحة) وعرض PowerPoint تلقائي', en: 'Download reports: comprehensive Word/PDF report (50+ pages) and automatic PowerPoint presentation' }
            ]
          },
          {
            title: { ar: '٤. الوصول إلى تحليلات سابقة', en: '4. Accessing Previous Analyses' },
            steps: [
              { ar: 'من قوائم التنقل اختر الشركات', en: 'From navigation menus choose Companies' },
              { ar: 'اختر اسم الشركة', en: 'Select company name' },
              { ar: 'استعرض آخر التحليلات المحفوظة', en: 'Browse latest saved analyses' },
              { ar: 'يمكنك إعادة التحليل أو إنشاء تحليل جديد', en: 'You can re-analyze or create new analysis' }
            ]
          },
          {
            title: { ar: '٥. إدارة الحساب والاشتراك', en: '5. Account and Subscription Management' },
            steps: [
              { ar: 'تغيير كلمة المرور', en: 'Change password' },
              { ar: 'تغيير الخطة (شهري ↔ سنوي)', en: 'Change plan (monthly ↔ annual)' },
              { ar: 'إيقاف أو تجديد الاشتراك', en: 'Stop or renew subscription' },
              { ar: 'تحديث بيانات الشركة', en: 'Update company data' }
            ]
          },
          {
            title: { ar: '٦. الدعم والمساعدة', en: '6. Support and Help' },
            steps: [
              { ar: 'قاعدة معرفة FAQ داخل النظام', en: 'FAQ knowledge base within system' },
              { ar: 'WhatsApp: +966 544 827 213', en: 'WhatsApp: +966 544 827 213' },
              { ar: 'Telegram: +966 544 827 213', en: 'Telegram: +966 544 827 213' },
              { ar: 'Email: finclick.ai@gmail.com', en: 'Email: finclick.ai@gmail.com' },
              { ar: 'دعم فني متوفر يوميًا من الساعة 10 صباحًا حتى 5 مساءً بتوقيت السعودية', en: 'Technical support available daily from 10 AM to 5 PM Saudi time' }
            ]
          }
        ].map((section, index) => (
          <section key={index} style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1.5rem',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? section.title.ar : section.title.en}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex} style={{
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
                    {language === 'ar' ? step.ar : step.en}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Tips */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'نصائح هامة' : 'Important Tips'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'كلما كانت القوائم المالية أكثر وضوحًا وتنظيمًا → كانت النتائج أعلى دقة',
                en: 'The clearer and more organized the financial statements → the more accurate the results'
              },
              {
                ar: 'يفضّل إدخال 5 سنوات فأكثر للحصول على تحليلات زمنية دقيقة',
                en: 'It is preferable to enter 5 years or more to get accurate time-series analysis'
              },
              {
                ar: 'يمكنك تغيير لغة التقرير إلى العربية أو الإنجليزية في أي وقت',
                en: 'You can change the report language to Arabic or English at any time'
              }
            ].map((tip, index) => (
              <li key={index} style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <span style={{ color: '#D4AF37', fontSize: '1.2rem', fontWeight: 'bold' }}>💡</span>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? tip.ar : tip.en}
                </p>
              </li>
            ))}
          </ul>
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

export default ManualPage;