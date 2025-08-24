import React, { useContext } from 'react';
import { AuthContext } from '../App';

const IPPolicyPage = () => {
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
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>©️</div>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'سياسة حقوق الملكية الفكرية والعلامة التجارية' : 'Intellectual Property and Trademark Policy'}
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
          
          {/* Copyright */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '2rem', 
            padding: '1rem',
            background: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: '#D4AF37',
              margin: 0
            }}>
              {language === 'ar' ? 'جميع الحقوق محفوظة © 2025 لصالح مالك ومنشئ منصة FinClick.AI رزان أحمد توفيق' : 'All Rights Reserved © 2025 to the owner and creator of FinClick.AI platform Razan Ahmed Tawfik'}
            </p>
          </div>

          {/* الملكية الفكرية للنظام */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'الملكية الفكرية للنظام' : 'System Intellectual Property'}
            </h2>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'يُعتبر نظام FinClick.AI بجميع مكوناته البرمجية، فكرة النظام والمنصة وفكرة العمل وآلية سير العمل، هيكل المنصة، أساليب التحليل المالية المستخدمة، طريقة التشغيل، خوارزميات الذكاء الاصطناعي، التقنيات المستخدمة، نماذج التقارير، واجهات الاستخدام، قاعدة البيانات، أسلوب العرض وطريقة التقديم براءة اختراع مملوكة بالكامل لصاحب المنصة ومطورها. (رزان توفيق)' : 'The FinClick.AI system with all its software components, system and platform concept, business idea and workflow mechanism, platform structure, financial analysis methods used, operating procedures, artificial intelligence algorithms, technologies used, report templates, user interfaces, database, presentation style and delivery method is considered a patent owned entirely by the platform owner and developer. (Razan Tawfik)'}
            </div>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'لا يجوز نسخ أو تقليد أو بيع أو إعادة توزيع أي جزء من النظام أو تقنياته دون إذن خطي قانوني مسبق من المالك الحصري للنظام. كما لا يجوز البيع والمتاجرة بجميع مخرجات النظام.' : 'No copying, imitating, selling, or redistributing any part of the system or its technologies is permitted without prior written legal permission from the exclusive owner of the system. Also, selling and trading all system outputs is not permitted.'}
            </div>
          </div>

          {/* العلامة التجارية */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'العلامة التجارية' : 'Trademark'}
            </h2>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'شعار FinClick.AI والاسم التجاري FinClick.AI وعبارة FinClick.AI-Revolutionary Intelligent Financial Analysis System هي علامة تجارية مسجّلة مملوكة لصاحب النظام.' : 'The FinClick.AI logo, trade name FinClick.AI, and the phrase "FinClick.AI-Revolutionary Intelligent Financial Analysis System" are registered trademarks owned by the system owner.'}
            </div>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'يُحظر استخدام الشعار أو الاسم أو الألوان أو الهوية البصرية أو أي جزء من العلامة التجارية في أي منتج أو خدمة أخرى دون إذن مكتوب من المالك.' : 'Using the logo, name, colors, visual identity, or any part of the trademark in any other product or service is prohibited without written permission from the owner.'}
            </div>
          </div>

          {/* حماية حقوق الفكرة والتطوير */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#D4AF37'
            }}>
              <strong style={{ color: '#D4AF37' }}>Þ</strong> {language === 'ar' ? 'حماية حقوق الفكرة والتطوير' : 'Protection of Idea and Development Rights'}
            </h2>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'أي محاولة للهندسة العكسية أو تحليل الكود أو تفكيك المنصة أو مسح الواجهة بهدف إعادة استخدامها في خدمة مشابهة يُعد انتهاكًا صريحًا لحقوق الملكية الفكرية ويُعرّض المخالف للمساءلة الجنائية والمدنية وفقًا لنظام حماية الملكية الفكرية في المملكة العربية السعودية وهيئة الملكية الفكرية (SAIP).' : 'Any attempt at reverse engineering, code analysis, platform disassembly, or interface scanning with the intent to reuse in a similar service is considered a blatant violation of intellectual property rights and exposes the violator to criminal and civil accountability according to the intellectual property protection system in Saudi Arabia and the Saudi Authority for Intellectual Property (SAIP).'}
            </div>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'جميع الأفكار والابتكارات والخواص المستقبلية التي تُضاف أو تُطوّر في النظام تظل ملكًا للمالك الأصلي، ولا تمنح أي حقوق للترخيص أو ملكية المشاركة لأي مستخدم أو طرف ثالث.' : 'All future ideas, innovations, and features that are added or developed in the system remain the property of the original owner, and do not grant any licensing or shared ownership rights to any user or third party.'}
            </div>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'تحتفظ FinClick.AI بالحق الكامل في اتخاذ الإجراءات القانونية داخل المملكة العربية السعودية وخارجها ضد أي استخدام غير مصرّح به، بما في ذلك المطالبة بالتعويض المالي، توقيع غرامات، أو الحجب أو الإغلاق القضائي للخدمات المخالفة.' : 'FinClick.AI reserves the full right to take legal action within and outside Saudi Arabia against any unauthorized use, including claiming financial compensation, imposing fines, or judicial blocking or closure of violating services.'}
            </div>
            <div style={{ marginBottom: '1rem', paddingLeft: language === 'ar' ? '0' : '1rem', paddingRight: language === 'ar' ? '1rem' : '0' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'النزاعات تُحال إلى الجهات ذات الاختصاص السعودية، تحديدًا الهيئة السعودية للملكية الفكرية والمحاكم التجارية المختصة.' : 'Disputes are referred to the competent Saudi authorities, specifically the Saudi Authority for Intellectual Property and the competent commercial courts.'}
            </div>
          </div>

          {/* اتفاقية السرية */}
          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '10px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#EF4444'
            }}>
              {language === 'ar' ? 'بتسجيلك في منصة FinClick.AI، فإنك توافق على اتفاقية السرية وحماية الملكية الفكرية (NDA Clause)' : 'By registering on the FinClick.AI platform, you agree to the Non-Disclosure Agreement and Intellectual Property Protection (NDA Clause)'}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#D4AF37' }}>
              {language === 'ar' ? 'وبالتالي أنت توافق وتقرّ على ما يلي:' : 'Therefore, you agree and acknowledge the following:'}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <strong style={{ color: '#D4AF37' }}>o</strong> {language === 'ar' ? 'فكرة النظام وجميع المعلومات التقنية والبرمجية، والأسرار التجارية، وخوارزميات النظام، وتصميم الواجهة، وأسلوب التحليل، وطريقة العرض، وكافة التفاصيل المتعلقة بمنصة FinClick.AI، تُعد معلومات سرّية وملكية فكرية محفوظة لصاحب النظام. تلتزم التزامًا كاملاً بعدم:' : 'The system idea and all technical and software information, trade secrets, system algorithms, interface design, analysis method, presentation method, and all details related to the FinClick.AI platform are considered confidential information and intellectual property reserved to the system owner. You are fully committed to not:'}
            </div>
          </div>

          {/* استخدام المنصة لأغراض إعادة البيع */}
          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
            <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              color: '#EAB308'
            }}>
              {language === 'ar' ? 'استخدام المنصة لأغراض إعادة البيع أو الخدمات التجارية' : 'Using the Platform for Resale or Commercial Services'}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#D4AF37', marginBottom: '1rem' }}>
              {language === 'ar' ? 'يُحظر على المستخدم استخدام منصة FinClick.AI بغرض إعادة بيع التحليلات أو التقارير أو مخرجات النظام لأي طرف ثالث (سواء أفراد أو شركات أو جهات استشارية) على أنها خدمة يقدمها بنفسه.' : 'Users are prohibited from using the FinClick.AI platform for the purpose of reselling analyses, reports, or system outputs to any third party (whether individuals, companies, or consulting entities) as a service they provide themselves.'}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#D4AF37' }}>
              {language === 'ar' ? 'يسمح باستخدام المنصة فقط لأغراض التحليل الداخلي الخاص بالشركة المالكة للحساب، وأي استخدام تجاري خارجي يُعتبر انتهاكًا للملكية الفكرية وسببًا مشروعًا لإلغاء الاشتراك واتخاذ الإجراءات القانونية.' : 'The platform is only allowed to be used for internal analysis purposes specific to the company owning the account, and any external commercial use is considered a violation of intellectual property and a legitimate reason for subscription cancellation and legal action.'}
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600',
              color: '#22C55E',
              margin: 0
            }}>
              {language === 'ar' ? 'بإتمام عملية التسجيل والاشتراك فإن المستخدم يعتبر قد وافق على هذه الاتفاقية ضمنيًا.' : 'By completing the registration and subscription process, the user is considered to have implicitly agreed to this agreement.'}
            </p>
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

export default IPPolicyPage;