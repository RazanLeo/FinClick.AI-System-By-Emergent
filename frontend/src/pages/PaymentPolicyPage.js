import React, { useContext } from 'react';
import { AuthContext } from '../App';

const PaymentPolicyPage = () => {
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
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💳</div>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'سياسة الدفع والاشتراك والاسترجاع' : 'Payment, Subscription and Refund Policy'}
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
          
          {/* خطط الاشتراك */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'خطط الاشتراك:' : 'Subscription Plans:'}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {/* الخطة الشهرية */}
              <div style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  {language === 'ar' ? 'الاشتراك الشهري' : 'Monthly Subscription'}
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#D4AF37', marginBottom: '0.5rem' }}>
                  {language === 'ar' ? '5,000 ريال سعودي' : '5,000 SAR'}
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  {language === 'ar' ? 'شهرياً' : 'per month'}
                </div>
              </div>

              {/* الخطة السنوية */}
              <div style={{
                background: 'rgba(212, 175, 55, 0.2)',
                border: '3px solid #D4AF37',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#D4AF37',
                  color: '#000000',
                  padding: '0.3rem 1rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {language === 'ar' ? 'الأفضل' : 'Best Value'}
                </div>
                <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  {language === 'ar' ? 'الاشتراك السنوي' : 'Annual Subscription'}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ textDecoration: 'line-through', color: '#EF4444', fontSize: '1.2rem' }}>
                    {language === 'ar' ? '60,000' : '60,000'}
                  </span>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: '#D4AF37' }}>
                    {language === 'ar' ? '54,000 ريال' : '54,000 SAR'}
                  </span>
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '0.5rem' }}>
                  {language === 'ar' ? 'سنوياً' : 'annually'}
                </div>
                <div style={{ 
                  background: 'rgba(34, 197, 94, 0.2)', 
                  color: '#22C55E', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '15px', 
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}>
                  {language === 'ar' ? 'خصم 10% = وفر 6,000 ر.س' : '10% discount = Save 6,000 SAR'}
                </div>
              </div>
            </div>
          </div>

          {/* وسائل الدفع */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'وسائل الدفع:' : 'Payment Methods:'}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {['MADA', 'Visa', 'Master Card', 'PayPal', 'Apple Pay'].map((method) => (
                <div key={method} style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* عملية التفعيل */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              {language === 'ar' ? 'التفعيل والإيقاف:' : 'Activation and Suspension:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#22C55E' }}>✓</strong> {language === 'ar' ? 'عملية التفعيل بالكامل تلقائيًا بعد الدفع.' : 'Full activation process automatically after payment.'}
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#EF4444' }}>✗</strong> {language === 'ar' ? 'الإيقاف يتم تلقائيًا عند عدم السداد الشهري.' : 'Suspension occurs automatically when monthly payment is not made.'}
              </li>
            </ul>
          </div>

          {/* سياسة الاسترجاع */}
          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '10px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#EF4444'
            }}>
              {language === 'ar' ? 'سياسة الاسترجاع:' : 'Refund Policy:'}
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#EF4444' }}>⚠️</strong> {language === 'ar' ? 'لا يوجد استرجاع مالي بعد بدء تفعيل الاشتراك بأي خطة وإرسال بيانات الدخول' : 'No financial refund after subscription activation begins with any plan and login credentials are sent'}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#D4AF37' }}>📅</strong> {language === 'ar' ? 'يمكن إلغاء التجديد المقبل بإشعار قبل 7 أيام من انتهاء الاشتراك' : 'Future renewal can be cancelled with 7 days notice before subscription expiry'}
            </div>
            <div>
              <strong style={{ color: '#EF4444' }}>🗑️</strong> {language === 'ar' ? 'تُحذف بيانات الحساب بعد مرور 30 يوم من الإلغاء' : 'Account data is deleted 30 days after cancellation'}
            </div>
          </div>

          {/* شروط مهمة */}
          <div style={{ padding: '1rem', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#EAB308'
            }}>
              {language === 'ar' ? 'شروط مهمة:' : 'Important Terms:'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#EAB308' }}>•</strong> {language === 'ar' ? 'جميع الأسعار شاملة ضريبة القيمة المضافة (15%)' : 'All prices include VAT (15%)'}
              </li>
              <li style={{ marginBottom: '0.8rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#EAB308' }}>•</strong> {language === 'ar' ? 'الدفع آمن ومشفر بأعلى معايير الحماية' : 'Payment is secure and encrypted with the highest protection standards'}
              </li>
              <li style={{ marginBottom: '0.8rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#EAB308' }}>•</strong> {language === 'ar' ? 'سيتم إرسال فاتورة تفصيلية عبر البريد الإلكتروني' : 'A detailed invoice will be sent via email'}
              </li>
              <li style={{ marginBottom: '0.8rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
                <strong style={{ color: '#EAB308' }}>•</strong> {language === 'ar' ? 'للاستفسارات المالية: billing@finclick.ai' : 'For billing inquiries: billing@finclick.ai'}
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

export default PaymentPolicyPage;