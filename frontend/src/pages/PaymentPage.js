import React, { useContext } from 'react';
import { AuthContext } from '../App';

const PaymentPage = () => {
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
            {language === 'ar' ? 'سياسة الدفع والاشتراك والاسترجاع' : 'Payment, Subscription and Refund Policy'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Subscription Plans */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'خطط الاشتراك' : 'Subscription Plans'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{
              padding: '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              textAlign: 'center'
            }}>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#D4AF37' }}>
                {language === 'ar' ? 'الاشتراك الشهري' : 'Monthly Subscription'}
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>5,000 {language === 'ar' ? 'ريال سعودي' : 'SAR'}</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                {language === 'ar' ? 'يتم التجديد شهرياً' : 'Renews monthly'}
              </p>
            </div>
            
            <div style={{
              padding: '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              border: '2px solid #D4AF37',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                backgroundColor: '#D4AF37',
                color: '#000',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {language === 'ar' ? 'الأفضل' : 'Best Value'}
              </div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#D4AF37' }}>
                {language === 'ar' ? 'الاشتراك السنوي' : 'Annual Subscription'}
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>54,000 {language === 'ar' ? 'ريال سعودي' : 'SAR'}</p>
              <p style={{ fontSize: '1rem', textDecoration: 'line-through', opacity: 0.6, marginBottom: '1rem' }}>60,000 {language === 'ar' ? 'ريال' : 'SAR'}</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, color: '#4ADE80' }}>
                {language === 'ar' ? 'خصم 10% عند الدفع السنوي' : '10% discount for annual payment'}
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'وسائل الدفع' : 'Payment Methods'}
          </h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {['MADA', 'Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method, index) => (
              <span key={index} style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.8rem 1.5rem', 
                borderRadius: '8px', 
                border: '1px solid rgba(212, 175, 55, 0.3)',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {method}
              </span>
            ))}
          </div>
        </section>

        {/* Activation Process */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'عملية التفعيل' : 'Activation Process'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'عملية التفعيل بالكامل تلقائيًا بعد الدفع.',
                en: 'Complete activation automatically after payment.'
              },
              {
                ar: 'الإيقاف يتم تلقائيًا عند عدم السداد الشهري.',
                en: 'Suspension occurs automatically when monthly payment is missed.'
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

        {/* Refund Policy */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'سياسة الاسترجاع والإلغاء' : 'Refund and Cancellation Policy'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'لا يوجد استرجاع مالي بعد بدء تفعيل الاشتراك بأي خطة وإرسال بيانات الدخول.',
                en: 'No refunds after subscription activation and sending login credentials.'
              },
              {
                ar: 'يمكن إلغاء التجديد المقبل بإشعار قبل 7 أيام من انتهاء الاشتراك.',
                en: 'Future renewal can be cancelled with 7 days notice before subscription expires.'
              },
              {
                ar: 'تُحذف بيانات الحساب بعد مرور 30 يوم من الإلغاء.',
                en: 'Account data is deleted 30 days after cancellation.'
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

export default PaymentPage;