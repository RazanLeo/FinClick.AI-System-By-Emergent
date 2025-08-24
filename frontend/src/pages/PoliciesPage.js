import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';

const PoliciesPage = () => {
  const { language } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState(null);

  const policies = [
    {
      id: 'security',
      title: { ar: 'سياسة الأمان', en: 'Security Policy' },
      content: { 
        ar: 'حماية البنية التحتية: استضافة البيانات داخل مراكز بيانات سعودية آمنة متوافقة مع معايير SAMA / CITC. استخدام جدر حماية متعددة الطبقات (Firewalls) وأنظمة كشف التسلل (IDS/IPS). تشفير الاتصال بالكامل باستخدام TLS 1.3 / HTTPS. حماية البيانات: تشفير جميع الملفات والبيانات داخل قواعد البيانات بتقنيات AES-256. تقسيم الصلاحيات بحيث لا يُسمح لأي موظف بالوصول لبيانات المستخدمين إلا عند الضرورة وبتفويض. المراقبة والرصد: مراقبة مستمرة للنشاطات على مدار الساعة (24/7) لرصد أي نشاط مشبوه. النسخ الاحتياطي: نسخ احتياطي يومي آمن داخل مراكز بيانات منفصلة داخل المملكة.',
        en: 'Infrastructure Protection: Hosting data within secure Saudi data centers compliant with SAMA / CITC standards. Using multi-layered firewalls and intrusion detection systems (IDS/IPS). Complete communication encryption using TLS 1.3 / HTTPS. Data Protection: Encrypting all files and data within databases using AES-256 techniques. Permission segmentation where no employee is allowed to access user data except when necessary and with authorization. Monitoring: Continuous 24/7 monitoring for suspicious activities. Backup: Daily secure backup within separate data centers inside the Kingdom.'
      }
    },
    {
      id: 'compliance',
      title: { ar: 'سياسة الامتثال', en: 'Compliance Policy' },
      content: {
        ar: 'نظام حماية البيانات الشخصية السعودي (PDPL – SDAIA): عدم جمع أي بيانات شخصية إلا بهدف تقديم الخدمة فقط. الحصول على موافقة المستخدم الصريحة قبل معالجة بياناته. السماح للمستخدم بالوصول أو التعديل أو حذف بياناته متى ما أراد. تطبيق متطلبات البنك المركزي السعودي (SAMA) للأمن السيبراني: تطبيق ضوابط الأمن السيبراني الصادرة من SAMA بما يتوافق مع تطبيقات الخدمات المالية السحابية (SaaS). إجراء تقييم مخاطر دوري ورفع تقارير الامتثال عند الطلب. هيئة الاتصالات والفضاء والتقنية (CITC): استضافة البيانات ومعالجتها داخل المملكة تماشيًا مع سياسات سيادة البيانات الوطنية.',
        en: 'Saudi Personal Data Protection Law (PDPL – SDAIA): No personal data collection except for service provision only. Obtaining explicit user consent before processing their data. Allowing users to access, modify, or delete their data whenever they want. Implementation of Saudi Central Bank (SAMA) cybersecurity requirements: Applying SAMA cybersecurity controls in compliance with cloud financial services applications (SaaS). Conducting periodic risk assessments and submitting compliance reports upon request. Communications, Space & Technology Commission (CITC): Hosting and processing data within the Kingdom in line with national data sovereignty policies.'
      }
    },
    {
      id: 'intellectual',
      title: { ar: 'سياسة حقوق الملكية الفكرية والعلامة التجارية', en: 'Intellectual Property and Trademark Policy' },
      content: {
        ar: 'جميع الحقوق محفوظة © 2025 لصالح مالك ومنشئ منصة FinClick.AI (رزان أحمد توفيق). يُعتبر نظام FinClick.AI بجميع مكوناته البرمجية، فكرة النظام والمنصة وفكرة العمل وآلية سير العمل، هيكل المنصة، أساليب التحليل المالية المستخدمة، طريقة التشغيل، خوارزميات الذكاء الاصطناعي، التقنيات المستخدمة، نماذج التقارير، واجهات الاستخدام، قاعدة البيانات، أسلوب العرض وطريقة التقديم براءة اختراع مملوكة بالكامل لصاحب المنصة ومطورها. لا يجوز نسخ أو تقليد أو بيع أو إعادة توزيع أي جزء من النظام أو تقنياته دون إذن خطي قانوني مسبق من المالك الحصري للنظام. شعار FinClick.AI والاسم التجاري FinClick.AI وعبارة FinClick.AI-Revolutionary Intelligent Financial Analysis System هي علامة تجارية مسجّلة مملوكة لصاحب النظام.',
        en: 'All rights reserved © 2025 to the owner and creator of FinClick.AI platform (Razan Ahmed Tawfiq). The FinClick.AI system with all its software components, system and platform idea, business concept and workflow mechanism, platform structure, financial analysis methods used, operation method, AI algorithms, technologies used, report templates, user interfaces, database, presentation style and delivery method is a patent fully owned by the platform owner and developer. It is not permitted to copy, imitate, sell, or redistribute any part of the system or its technologies without prior written legal permission from the exclusive system owner. The FinClick.AI logo, trade name FinClick.AI, and phrase "FinClick.AI-Revolutionary Intelligent Financial Analysis System" are registered trademarks owned by the system owner.'
      }
    },
    {
      id: 'payment',
      title: { ar: 'سياسة الدفع والاشتراك والاسترجاع', en: 'Payment, Subscription and Refund Policy' },
      content: {
        ar: 'الاشتراك الشهري: 5000 ريال سعودي. الاشتراك السنوي: 60000 ريال (خصم 10% عند الدفع السنوي = 54000 ريال). وسائل الدفع: MADA / Visa / Master Card / PayPal / Apple Pay. عملية التفعيل بالكامل تلقائيًا بعد الدفع. الإيقاف يتم تلقائيًا عند عدم السداد الشهري. لا يوجد استرجاع مالي بعد بدء تفعيل الاشتراك بأي خطة وإرسال بيانات الدخول ولكن يمكن إلغاء التجديد المقبل بإشعار قبل 7 أيام من انتهاء الاشتراك وتُحذف بيانات الحساب بعد مرور 30 يوم من الإلغاء.',
        en: 'Monthly subscription: 5000 SAR. Annual subscription: 60000 SAR (10% discount for annual payment = 54000 SAR). Payment methods: MADA / Visa / Master Card / PayPal / Apple Pay. Complete activation automatically after payment. Suspension occurs automatically when monthly payment is missed. No refunds after subscription activation and sending login credentials, but future renewal can be cancelled with 7 days notice before subscription expires, and account data is deleted 30 days after cancellation.'
      }
    }
  ];

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
            {language === 'ar' ? 'السياسات القانونية' : 'Legal Policies'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Policies List */}
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {policies.map((policy, index) => (
            <div key={policy.id} style={{
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setActiveSection(activeSection === policy.id ? null : policy.id)}
                style={{
                  width: '100%',
                  padding: '2rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#D4AF37',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  fontFamily: 'Playfair Display, serif',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span className={language === 'ar' ? 'arabic-text' : ''}>
                  {language === 'ar' ? policy.title.ar : policy.title.en}
                </span>
                <span style={{ fontSize: '1.2rem', transform: activeSection === policy.id ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                  ▶
                </span>
              </button>
              
              {activeSection === policy.id && (
                <div style={{
                  padding: '0 2rem 2rem 2rem',
                  borderTop: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    margin: 0,
                    textAlign: language === 'ar' ? 'right' : 'left'
                  }}>
                    {language === 'ar' ? policy.content.ar : policy.content.en}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

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

export default PoliciesPage;