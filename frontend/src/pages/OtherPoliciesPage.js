import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';

const OtherPoliciesPage = () => {
  const { language } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState(null);

  const otherPolicies = [
    {
      id: 'data-residency',
      title: { ar: 'سياسة نقل البيانات خارج المملكة', en: 'Data Residency Policy' },
      content: { 
        ar: 'تلتزم FinClick.AI بتخزين ومعالجة جميع بيانات المستخدمين داخل المملكة العربية السعودية لضمان سيادة البيانات الوطنية. لا يتم نقل البيانات الشخصية أو التحليلات إلى أي خوادم أو مزودين خارج المملكة إلا في حالة الحصول على موافقة صريحة ومكتوبة من المستخدم، أو إذا كان الطرف الخارجي مزود خدمة معتمد من SDAIA أو CITC ويعمل ضمن اتفاقيات حماية البيانات.',
        en: 'FinClick.AI commits to storing and processing all user data within the Kingdom of Saudi Arabia to ensure national data sovereignty. Personal data or analyses are not transferred to any servers or providers outside the Kingdom except in case of obtaining explicit written consent from the user, or if the external party is a service provider approved by SDAIA or CITC and operates under data protection agreements.'
      }
    },
    {
      id: 'cookies',
      title: { ar: 'سياسة ملفات تعريف الارتباط', en: 'Cookies Policy' },
      content: {
        ar: 'نستخدم ملفات تعريف الارتباط (Cookies) بهدف: تحسين تجربة الاستخدام، قياس الأداء والتفاعل، حفظ تفضيلات اللغة. باستخدامك للمنصة فأنت توافق على سياسة استخدام ملفات تعريف الارتباط الخاصة بنا. يمكنك تعطيلها من المتصفح في أي وقت، مما قد يؤثر على أداء الخدمة.',
        en: 'We use cookies for: improving user experience, measuring performance and interaction, saving language preferences. By using the platform, you agree to our cookies policy. You can disable them from the browser at any time, which may affect service performance.'
      }
    },
    {
      id: 'acceptable-use',
      title: { ar: 'سياسة الاستخدام المقبول', en: 'Acceptable Use Policy' },
      content: {
        ar: 'يُمنع بشكل صارم استخدام المنصة في أي من الحالات التالية: إرسال أو رفع ملفات ضارة أو تحتوي فيروسات أو هجمات سيبرانية، استخدام النتائج للتحايل المالي أو التلاعب بالأسواق أو غسيل الأموال، رفع محتوى سياسي/طائفي/تحريضي مخالف لأنظمة المملكة، انتهاك حقوق الآخرين أو محاولة الدخول غير المشروع لحسابات أخرى. أي سلوك من هذا النوع يؤدي إلى تجميد فوري للحساب وإبلاغ الجهات المختصة داخل المملكة.',
        en: 'The following uses of the platform are strictly prohibited: sending or uploading harmful files containing viruses or cyber attacks, using results for financial fraud, market manipulation, or money laundering, uploading political/sectarian/inciting content that violates Kingdom regulations, violating others\' rights or attempting unauthorized access to other accounts. Any such behavior leads to immediate account suspension and reporting to relevant authorities within the Kingdom.'
      }
    },
    {
      id: 'sensitive-content',
      title: { ar: 'سياسة المحتوى الحساس', en: 'Sensitive Content Policy' },
      content: {
        ar: 'تلتزم منصة FinClick.AI بعدم استضافة أو معالجة أو نشر أي محتوى يتعارض مع: الشريعة الإسلامية، أو القيم الأخلاقية والاجتماعية في المملكة، الأنظمة السعودية، مثل نظام مكافحة الجرائم المعلوماتية، ونظام مكافحة غسل الأموال، المحتوى السياسي الموجّه أو الذي يحتوي على انتقاد لجهات حكومية أو يؤدي إلى إثارة الرأي العام. ويُحظر على المستخدم استخدام المنصة لـ: تمويل أو دعم أو تحليل أنشطة غير قانونية أو محظورة، تحميل ملفات تحتوي على دعاية سياسية أو دينية متطرفة، محاولة التلاعب بالأسواق المالية السعودية أو نشر شائعات أو معلومات غير رسمية.',
        en: 'FinClick.AI platform commits to not hosting, processing, or publishing any content that conflicts with: Islamic Sharia or moral and social values in the Kingdom, Saudi regulations such as the Anti-Cyber Crime Law and Anti-Money Laundering Law, targeted political content or criticism of government entities that may incite public opinion. Users are prohibited from using the platform to: finance, support, or analyze illegal or prohibited activities, upload files containing political or extremist religious propaganda, attempt to manipulate Saudi financial markets or spread rumors or unofficial information.'
      }
    },
    {
      id: 'confidentiality',
      title: { ar: 'سياسة السرية وعدم الإفصاح', en: 'Confidentiality and Non-Disclosure Policy' },
      content: {
        ar: 'جميع المعلومات المالية والتجارية للمستخدم سرّية تمامًا ولا يُسمح لأي موظف أو طرف ثالث بالاطلاع عليها دون ضرورة تشغيلية. عند حذف الحساب يتم حذف البيانات للأبد. لا يتم مشاركة البيانات مع أي جهة لأغراض تسويقية.',
        en: 'All user financial and commercial information is completely confidential and no employee or third party is allowed to access it without operational necessity. When an account is deleted, data is permanently deleted. Data is not shared with any entity for marketing purposes.'
      }
    },
    {
      id: 'legal-disclaimer',
      title: { ar: 'السياسة القانونية / إخلاء المسؤولية', en: 'Legal Disclaimer' },
      content: {
        ar: 'لا تقدم FinClick.AI أي استشارات مالية مرخصة، بل هي نظام تحليل ذكي يقدم معلومات مساندة لصانع القرار. جميع القرارات النهائية يتحملها المستخدم. المنصة مرخصة في المملكة العربية السعودية وتخضع لأنظمتها القضائية. يُمنع استخدام العلامة التجارية والشعار دون إذن خطي.',
        en: 'FinClick.AI does not provide any licensed financial advisory services, but is an intelligent analysis system that provides supporting information for decision makers. All final decisions are the responsibility of the user. The platform is licensed in the Kingdom of Saudi Arabia and subject to its judicial systems. Use of trademark and logo is prohibited without written permission.'
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
            {language === 'ar' ? 'السياسات الأخرى' : 'Other Policies'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Policies List */}
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {otherPolicies.map((policy, index) => (
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
                  textAlign: language === 'ar' ? 'right' : 'left',
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
                <span style={{ 
                  fontSize: '1.2rem', 
                  transform: activeSection === policy.id ? 'rotate(90deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease' 
                }}>
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

export default OtherPoliciesPage;