import React, { useContext } from 'react';
import { AuthContext } from '../App';

const AboutPage = () => {
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
            {language === 'ar' ? 'عن الشركة / من نحن؟' : 'About Company / Who We Are?'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0' }}>
            {language === 'ar' ? 'آخر تحديث: أغسطس 2025' : 'Last Updated: August 2025'}
          </p>
        </div>

        {/* Vision */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الرؤية (Vision)' : 'Vision'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar' 
              ? 'أن نُحدث ثورة عالمية في عالم التحليل المالي من خلال منصة ذكاء اصطناعي سعودية مبتكرة ترافق صناع القرار لحظيًا، وتُصبح المعيار الذهبي للتحليل المالي الذكي الشامل لجميع أنواع التحليل المالي بضغطة زر. وأن نكون المستثمر الأول في التقنية المالية القائمة على الـ AI في المنطقة والعالم.'
              : 'To create a global revolution in financial analysis through an innovative Saudi AI platform that accompanies decision-makers instantly, becoming the gold standard for comprehensive intelligent financial analysis for all types of financial analysis at the click of a button. To be the leading investor in AI-based financial technology in the region and the world.'
            }
          </p>
        </section>

        {/* Mission */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الرسالة (Mission)' : 'Mission'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: language === 'ar' ? 'right' : 'left'
          }}>
            {language === 'ar'
              ? 'تسخير قوة الذكاء الاصطناعي المتقدم لتوفير نظام تحليل مالي شامل وفوري يُمكّن جميع الشركات والمؤسسات والمنظمات من فهم أدائها المالي، اكتشاف المخاطر والفرص، واتخاذ قرارات دقيقة، بسرعة وسهولة غير مسبوقة، دون الحاجة لخبرات مالية متعمقة.'
              : 'Harnessing the power of advanced artificial intelligence to provide a comprehensive and instant financial analysis system that enables all companies, institutions, and organizations to understand their financial performance, discover risks and opportunities, and make accurate decisions with unprecedented speed and ease, without the need for deep financial expertise.'
            }
          </p>
        </section>

        {/* Objectives */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الأهداف (Objectives)' : 'Objectives'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'قيادة التحول الرقمي في التحليل المالي: بناء منصة SaaS سعودية قادرة على المنافسة عالمياً في مجال FinTech & AI.',
                en: 'Leading digital transformation in financial analysis: Building a Saudi SaaS platform capable of global competition in FinTech & AI.'
              },
              {
                ar: 'إتاحة التحليل المالي العميق بضغطة زر: تمكين الشركات والمستثمرين من الوصول إلى تحليلات مالية شاملة وسريعة.',
                en: 'Making deep financial analysis available at the click of a button: Enabling companies and investors to access comprehensive and fast financial analysis.'
              },
              {
                ar: 'الأتمتة الكاملة للعملية التحليلية: تحويل جميع مراحل التحليل المالي إلى عمليات مؤتمتة بالكامل.',
                en: 'Complete automation of the analytical process: Converting all stages of financial analysis into fully automated processes.'
              },
              {
                ar: 'الشمولية والعمق في التحليل: تغطية مختلف أنواع التحليلات المالية بدقة وموثوقية عالية.',
                en: 'Comprehensiveness and depth in analysis: Covering various types of financial analysis with high accuracy and reliability.'
              },
              {
                ar: 'سهولة الاستخدام: تصميم واجهة بديهية تتيح لأي فرد الاستفادة الكاملة من خدمات المنصة.',
                en: 'Ease of use: Designing an intuitive interface that allows any individual to fully benefit from the platform services.'
              }
            ].map((objective, index) => (
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
                  {language === 'ar' ? objective.ar : objective.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'الخدمات الرئيسية للنظام (Services)' : 'Main System Services'}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              {
                ar: 'تحليل مالي ذكي وفوري وتفصيلي لأكثر من 116 تحليلًا ماليًا مع الذكاء الاصطناعي.',
                en: 'Intelligent, instant, and detailed financial analysis for more than 116 financial analyses with artificial intelligence.'
              },
              {
                ar: 'تقارير تفصيلية وعروض تقديمية تلقائية بجميع الصيغ جاهزة للعرض والتسليم والمناقشة باللغتين العربية والإنجليزية.',
                en: 'Detailed reports and automatic presentations in all formats ready for presentation, delivery, and discussion in Arabic and English.'
              },
              {
                ar: 'مقارنة أداء الشركة بمتوسط الصناعة ومقارنة أداء الشركة مع شركات مشابهة على المستوى المحلي والإقليمي والعالمي.',
                en: 'Comparing company performance with industry average and comparing company performance with similar companies at local, regional, and global levels.'
              },
              {
                ar: 'لوحة تحكم تفاعلية مؤشرات الأداء الفورية مثل SWOT والمخاطر والتوقعات.',
                en: 'Interactive dashboard with instant performance indicators such as SWOT, risks, and forecasts.'
              },
              {
                ar: 'رفع ملفات بأي صيغة يدعم أنواع ملفات متعددة وإدخال يدوي حتى 10 سنوات مالية.',
                en: 'Upload files in any format supporting multiple file types and manual input up to 10 financial years.'
              }
            ].map((service, index) => (
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
                  {language === 'ar' ? service.ar : service.en}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Values */}
        <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1.5rem',
            color: '#D4AF37'
          }}>
            {language === 'ar' ? 'القيم الأساسية لـ FinClick.AI' : 'Core Values of FinClick.AI'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: { ar: 'الابتكار', en: 'Innovation' },
                desc: { ar: 'تقديم حلول مالية ثورية قائمة على أحدث تقنيات الذكاء الاصطناعي', en: 'Providing revolutionary financial solutions based on the latest AI technologies' }
              },
              {
                title: { ar: 'الدقة', en: 'Accuracy' },
                desc: { ar: 'تحليلات متناهية الدقة تعتمد على بيانات مالية وتنبؤية عالمية', en: 'Ultra-precise analysis based on global financial and predictive data' }
              },
              {
                title: { ar: 'السرعة', en: 'Speed' },
                desc: { ar: 'إنجاز ما يستغرق أسابيع من التحليل التقليدي خلال ثوانٍ معدودة', en: 'Accomplishing weeks of traditional analysis in just seconds' }
              },
              {
                title: { ar: 'الخصوصية والأمان', en: 'Privacy & Security' },
                desc: { ar: 'حماية صارمة لبيانات الشركات وفق أعلى المعايير السعودية والعالمية', en: 'Strict protection of company data according to the highest Saudi and international standards' }
              },
              {
                title: { ar: 'الاحترافية', en: 'Professionalism' },
                desc: { ar: 'تقارير وعروض تقديمية بأعلى مستوى من الجودة والإخراج', en: 'Reports and presentations of the highest quality and production standards' }
              },
              {
                title: { ar: 'التمكين', en: 'Empowerment' },
                desc: { ar: 'تمكين أصحاب القرار من اتخاذ قرارات لحظية وذكية بثقة', en: 'Enabling decision-makers to make instant and smart decisions with confidence' }
              }
            ].map((value, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#D4AF37',
                  marginBottom: '0.8rem'
                }}>
                  {language === 'ar' ? value.title.ar : value.title.en}
                </h3>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left'
                }}>
                  {language === 'ar' ? value.desc.ar : value.desc.en}
                </p>
              </div>
            ))}
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
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#B8941F';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#D4AF37';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;