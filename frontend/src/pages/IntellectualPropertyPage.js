import React, { useContext } from 'react';
import { AuthContext } from '../App';

const IntellectualPropertyPage = () => {
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
            {language === 'ar' ? 'سياسة حقوق الملكية الفكرية والعلامة التجارية' : 'Intellectual Property and Trademark Policy'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Copyright Notice */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: 'center',
            fontWeight: '600',
            color: '#D4AF37'
          }}>
            {language === 'ar'
              ? 'جميع الحقوق محفوظة © 2025 لصالح مالك ومنشئ منصة FinClick.AI - رزان أحمد توفيق'
              : 'All rights reserved © 2025 to the owner and creator of FinClick.AI platform - Razan Ahmed Tawfiq'
            }
          </p>
        </section>

        {/* System IP */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الملكية الفكرية للنظام' : 'System Intellectual Property'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'يُعتبر نظام FinClick.AI بجميع مكوناته البرمجية، فكرة النظام والمنصة وفكرة العمل وآلية سير العمل، هيكل المنصة، أساليب التحليل المالية المستخدمة، طريقة التشغيل، خوارزميات الذكاء الاصطناعي، التقنيات المستخدمة، نماذج التقارير، واجهات الاستخدام، قاعدة البيانات، أسلوب العرض وطريقة التقديم براءة اختراع مملوكة بالكامل لصاحب المنصة ومطورها (رزان توفيق).'
              : 'The FinClick.AI system with all its software components, system and platform idea, business concept and workflow mechanism, platform structure, financial analysis methods used, operation method, AI algorithms, technologies used, report templates, user interfaces, database, presentation style and delivery method is a patent fully owned by the platform owner and developer (Razan Tawfiq).'
            }
          </p>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'لا يجوز نسخ أو تقليد أو بيع أو إعادة توزيع أي جزء من النظام أو تقنياته دون إذن خطي قانوني مسبق من المالك الحصري للنظام. كما لا يجوز البيع والمتاجرة بجميع مخرجات النظام.'
              : 'It is not permitted to copy, imitate, sell, or redistribute any part of the system or its technologies without prior written legal permission from the exclusive system owner. Trading or selling all system outputs is also prohibited.'
            }
          </p>
        </section>

        {/* Trademark */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'العلامة التجارية' : 'Trademark'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'شعار FinClick.AI والاسم التجاري FinClick.AI وعبارة "FinClick.AI-Revolutionary Intelligent Financial Analysis System" هي علامة تجارية مسجّلة مملوكة لصاحب النظام.',
                en: 'The FinClick.AI logo, trade name FinClick.AI, and phrase "FinClick.AI-Revolutionary Intelligent Financial Analysis System" are registered trademarks owned by the system owner.'
              },
              {
                ar: 'يُحظر استخدام الشعار أو الاسم أو الألوان أو الهوية البصرية أو أي جزء من العلامة التجارية في أي منتج أو خدمة أخرى دون إذن مكتوب من المالك.',
                en: 'Use of the logo, name, colors, visual identity, or any part of the trademark in any other product or service is prohibited without written permission from the owner.'
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

        {/* NDA Agreement */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'اتفاقية السرية وحماية الملكية الفكرية (NDA)' : 'Confidentiality and IP Protection Agreement (NDA)'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'بتسجيلك في منصة FinClick.AI، فإنك توافق على اتفاقية السرية وحماية الملكية الفكرية وبالتالي أنت توافق وتقرّ على أن فكرة النظام وجميع المعلومات التقنية والبرمجية، والأسرار التجارية، وخوارزميات النظام، وتصميم الواجهة، وأسلوب التحليل، وطريقة العرض، وكافة التفاصيل المتعلقة بمنصة FinClick.AI، تُعد معلومات سرّية وملكية فكرية محفوظة لصاحب النظام.'
              : 'By registering on the FinClick.AI platform, you agree to the confidentiality and intellectual property protection agreement and thus you agree and acknowledge that the system idea and all technical and software information, trade secrets, system algorithms, interface design, analysis method, presentation method, and all details related to the FinClick.AI platform are considered confidential information and intellectual property reserved for the system owner.'
            }
          </p>
        </section>

        {/* Legal Consequences */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'العواقب القانونية' : 'Legal Consequences'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'أي خرق لالتزام السرّية أو محاولة تقليد أو إعادة إنتاج المنصة يعد انتهاكًا جسيمًا لحقوق الملكية الفكرية يُعطي لصاحب المنصة كامل الحق في: إلغاء اشتراكك فورًا، اتخاذ كافة الإجراءات القانونية ضدك، المطالبة بالتعويضات المالية والأضرار وفق أنظمة السعودية (SAIP – نظام حماية الملكية الفكرية، ونظام مكافحة الجرائم المعلوماتية).'
              : 'Any breach of confidentiality obligation or attempt to imitate or reproduce the platform constitutes a serious violation of intellectual property rights giving the platform owner full right to: immediately cancel your subscription, take all legal actions against you, claim financial compensations and damages according to Saudi regulations (SAIP – Intellectual Property Protection Law, and Anti-Cybercrime Law).'
            }
          </p>
        </section>

        {/* Commercial Use Restrictions */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'استخدام المنصة لأغراض إعادة البيع أو الخدمات التجارية' : 'Using Platform for Resale or Commercial Services'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'يُحظر على المستخدم استخدام منصة FinClick.AI بغرض إعادة بيع التحليلات أو التقارير أو مخرجات النظام لأي طرف ثالث (سواء أفراد أو شركات أو جهات استشارية) على أنها خدمة يقدمها بنفسه. يسمح باستخدام المنصة فقط لأغراض التحليل الداخلي الخاص بالشركة المالكة للحساب، وأي استخدام تجاري خارجي يُعتبر انتهاكًا للملكية الفكرية وسببًا مشروعًا لإلغاء الاشتراك واتخاذ الإجراءات القانونية.'
              : 'Users are prohibited from using the FinClick.AI platform to resell analyses, reports, or system outputs to any third party (whether individuals, companies, or consulting entities) as a service they provide themselves. The platform may only be used for internal analysis purposes of the account-owning company, and any external commercial use is considered intellectual property violation and legitimate grounds for subscription cancellation and legal action.'
            }
          </p>
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

export default IntellectualPropertyPage;