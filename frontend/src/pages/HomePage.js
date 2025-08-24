import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

const HomePage = () => {
  const { language } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState(null);
  const [calculatorResults, setCalculatorResults] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const analysisTypes = [
    {
      category: language === 'ar' ? 'التحليل المالي الأساسي/الكلاسيكي' : 'Basic/Classical Financial Analysis',
      count: 13,
      types: [
        language === 'ar' ? 'التحليل الرأسي' : 'Vertical Analysis',
        language === 'ar' ? 'التحليل الأفقي' : 'Horizontal Analysis',
        language === 'ar' ? 'تحليل النسب المالية (29 نسبة)' : 'Financial Ratios Analysis (29 ratios)',
        language === 'ar' ? 'تحليل التدفقات النقدية' : 'Cash Flow Analysis'
      ]
    },
    {
      category: language === 'ar' ? 'التحليل المالي المتوسط' : 'Intermediate Financial Analysis',
      count: 23,
      types: [
        language === 'ar' ? 'تحليل الحساسية' : 'Sensitivity Analysis',
        language === 'ar' ? 'تحليل المعايير المرجعية' : 'Benchmarking Analysis',
        language === 'ar' ? 'تحليل السيناريوهات' : 'Scenario Analysis',
        language === 'ar' ? 'التحليل البنكي/الائتماني' : 'Banking/Credit Analysis'
      ]
    },
    {
      category: language === 'ar' ? 'التحليل المالي المتقدم' : 'Advanced Financial Analysis',
      count: 28,
      types: [
        language === 'ar' ? 'التدفقات النقدية المخصومة (DCF)' : 'Discounted Cash Flow (DCF)',
        language === 'ar' ? 'القيمة الاقتصادية المضافة (EVA)' : 'Economic Value Added (EVA)',
        language === 'ar' ? 'نماذج تسعير الأصول (CAPM)' : 'Asset Pricing Models (CAPM)',
        language === 'ar' ? 'تحليل المحافظ الاستثمارية' : 'Investment Portfolio Analysis'
      ]
    },
    {
      category: language === 'ar' ? 'التحليل المالي المعقد والمتطور' : 'Complex & Sophisticated Analysis',
      count: 25,
      types: [
        language === 'ar' ? 'تحليل مونت كارلو' : 'Monte Carlo Analysis',
        language === 'ar' ? 'النمذجة المالية المعقدة' : 'Complex Financial Modeling',
        language === 'ar' ? 'تحليل الخيارات الحقيقية' : 'Real Options Analysis',
        language === 'ar' ? 'اكتشاف الاحتيال المالي' : 'Financial Fraud Detection'
      ]
    },
    {
      category: language === 'ar' ? 'التحليل المالي بالذكاء الاصطناعي' : 'AI-Powered Financial Analysis',
      count: 27,
      types: [
        language === 'ar' ? 'التعلم الآلي والتحليل التنبؤي' : 'Machine Learning & Predictive Analysis',
        language === 'ar' ? 'تحليل الشبكات العصبية' : 'Neural Network Analysis',
        language === 'ar' ? 'تحليل المشاعر المالية' : 'Financial Sentiment Analysis',
        language === 'ar' ? 'اكتشاف الشذوذ الذكي' : 'Intelligent Anomaly Detection'
      ]
    }
  ];

  const testimonials = [
    {
      text: language === 'ar' 
        ? 'نظام شامل ومتكامل ساعدني على أن أفهم أداء شركتي بسرعة ودقة وسهولة. إنه نظام رائع يقدم كل أنواع التحليل المالي كما يقدم مقارنات على جميع المستويات ويولد تقارير وعروض تقديمية. أنصح كل الشركات به.'
        : 'A comprehensive and integrated system that helped me understand my company\'s performance quickly, accurately and easily. It\'s a wonderful system that provides all types of financial analysis and comparisons at all levels and generates reports and presentations. I recommend it to all companies.',
      author: language === 'ar' ? 'أحمد المحمد - مدير عام' : 'Ahmed AlMohammed - General Manager',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      text: language === 'ar'
        ? 'أنا كمدير ومحلل مالي لم أعد بحاجة لتضييع وقتي في الحسابات الطويلة بالساعات والأسابيع وصار كل عملي أسهل واجتماعاتي أكثر احترافية.'
        : 'As a financial manager and analyst, I no longer need to waste my time on long calculations for hours and weeks, and all my work has become easier and my meetings more professional.',
      author: language === 'ar' ? 'سارة العتيبي - محللة مالية' : 'Sarah AlOtaibi - Financial Analyst',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      text: language === 'ar'
        ? 'أنا كمستثمر صرت أستطيع اتخاذ قرارات استثمارية لحظية وتحديد أسهم الشركات التي أود أن أستثمر فيها بثقة نشكركم على هذا النظام الذكي. نشكركم أيضا على حاسبة السعر العادل للسهم المجانية أيضا أنها حقا مفيدة.'
        : 'As an investor, I can now make instant investment decisions and identify company stocks I want to invest in with confidence. Thank you for this intelligent system. Thank you also for the free fair value stock calculator, it is really useful.',
      author: language === 'ar' ? 'خالد الراشد - مستثمر' : 'Khalid AlRashed - Investor',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      text: language === 'ar'
        ? 'بحكم عملي كموظف مسؤول عن عمليات التمويل والإقراض لقد أفادني النظام لتقييم الشركات بشكل سريع ودقيق واتخاذ قرار التمويل والإقراض بسرعة وحكمة.'
        : 'In my role as an employee responsible for financing and lending operations, the system has benefited me in evaluating companies quickly and accurately and making financing and lending decisions quickly and wisely.',
      author: language === 'ar' ? 'فاطمة الزهراني - مسؤولة تمويل' : 'Fatima AlZahrani - Financing Officer',
      stars: '⭐⭐⭐⭐⭐'
    }
  ];

  return (
    <div className={`homepage ${isVisible ? 'fade-in' : ''} ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        backgroundColor: '#000000', 
        minHeight: '65vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '3rem 2rem',
        background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, rgba(0, 0, 0, 1) 70%)'
      }}>
        <div className="hero-content" style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          textAlign: 'center',
          color: '#D4AF37'
        }}>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
            fontWeight: '700', 
            marginBottom: '2.5rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
            lineHeight: '1.4'
          }}>
            FinClick.AI
            <br />
            {language === 'ar' 
              ? 'ثورة ونقلة نوعية في عالم التحليل المالي' 
              : 'Revolution and Qualitative Leap in Financial Analysis'
            }
          </h1>
          
          <div className={language === 'ar' ? 'arabic-text' : ''} style={{ 
            fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '400',
            lineHeight: '1.5',
            opacity: 0.95
          }}>
            <p style={{ marginBottom: '1rem' }}>
              {language === 'ar'
                ? 'نظام يقلب الدنيا رأساً على عقب ويقلب كل الموازين'
                : 'A system that turns the world upside down and changes all the rules'
              }
            </p>
            <p style={{ marginBottom: '2rem' }}>
              {language === 'ar'
                ? 'منصة ونظام شامل يغنيك عن أي مدير أو محلل أو خبير مالي'
                : 'A comprehensive platform and system that replaces any financial manager, analyst or expert'
              }
            </p>
          </div>
          
          {/* شعار تفاعلي مع وميض */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: '2.5rem' 
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_finmetrics-hub/artifacts/gw8bcd94_%D8%B4%D8%B9%D8%A7%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20FinClick.AI%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%A7%D8%B3%D9%85.jpg"
              alt="FinClick.AI Logo"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: 'logoFlash 1.5s ease-in-out infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.filter = 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.9))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))';
              }}
            />
          </div>

          <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/login" className="btn-hero btn-hero-primary" style={{
              backgroundColor: '#D4AF37',
              color: '#000000',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.2rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
              fontFamily: 'Playfair Display, serif'
            }}>
              {language === 'ar' ? 'ابدأ التحليل الآن' : 'Start Analysis Now'}
            </Link>
            <a href="#features" className="btn-hero btn-hero-secondary" style={{
              color: '#D4AF37',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.2rem',
              border: '2px solid #D4AF37',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Playfair Display, serif'
            }}>
              {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes glow {
          from {
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.6));
          }
          to {
            filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.9));
          }
        }
        
        .btn-hero-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.7);
        }
        
        .btn-hero-secondary:hover {
          background-color: rgba(212, 175, 55, 0.1);
          transform: scale(1.05);
        }
      `}</style>

      {/* Features Section - لماذا FinClick.AI؟ */}
      <section id="features" className="features-section" style={{ 
        backgroundColor: '#000000', 
        padding: '2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'لماذا FinClick.AI؟' : 'Why FinClick.AI?'}
          </h2>
          
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            justifyItems: 'center'
          }}>
            {[
              { text: language === 'ar' ? 'يخدم كل مستفيدي التحليل المالي وكل أغراض التحليل المالي (أفراد، مؤسسات، شركات، منظمات)' : 'Serves all financial analysis beneficiaries and purposes (individuals, institutions, companies, organizations)' },
              { text: language === 'ar' ? 'يقوم على الذكاء الاصطناعي المتطور' : 'Based on Advanced Artificial Intelligence' },
              { text: language === 'ar' ? 'يقدم جميع أنواع التحليل المالي المعروفة في العالم (+100 تحليل مالي)' : 'Provides all known types of financial analysis in the world (100+ financial analyses)' },
              { text: language === 'ar' ? 'بيئة سحابية تستطيع الوصول إليها من أي مكان وأي وقت على أي متصفح وأي جهاز' : 'Cloud environment accessible from anywhere, anytime, on any browser and device' },
              { text: language === 'ar' ? 'واجهة واضحة واحترافية وطريقة عرض للتحليلات تناسب الجميع حتى بدون خلفية مالية' : 'Clear professional interface and analysis display suitable for everyone even without financial background' },
              { text: language === 'ar' ? 'السرعة - احصل على التحليل في ثوانٍ معدودة بضغطة زر' : 'Speed - Get analysis in seconds with the click of a button' },
              { text: language === 'ar' ? 'السهولة - 3 خطوات (أرفق قوائمك - حدد خيارات التحليل - اضغط زر التحليل)' : 'Simplicity - 3 steps (Upload statements - Select analysis options - Click analysis button)' },
              { text: language === 'ar' ? 'الدقة والكفاءة المتناهية مع جودة عالمية معتمدة (دقة بنسبة 99%)' : 'Ultimate precision and efficiency with certified global quality (99% accuracy)' },
              { text: language === 'ar' ? 'أمان عالي المستوى' : 'High-level Security' },
              { text: language === 'ar' ? 'محلل مالي فائق يساعد كل شخص في اتخاذ القرارات المالية اللحظية' : 'Super financial analyst that helps everyone make instant financial decisions' },
              { text: language === 'ar' ? 'تقارير تفصيلية وعروض تقديمية احترافية' : 'Detailed reports and professional presentations' },
              { text: language === 'ar' ? 'مقارنات على جميع مستويات العالم' : 'Comparisons at all levels of the world' }
            ].map((feature, index) => (
              <div key={index} className="feature-card" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                height: '180px',
                width: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#D4AF37';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="feature-icon" style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>
                  {['👥', '🧠', '📊', '☁️', '💡', '⚡', '✨', '🎯', '🔒', '🦸', '📄', '🌍'][index] || '⭐'}
                </div>
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: 0,
                  opacity: 0.9
                }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section - خطوات النظام التفاعلية */}
      <section className="steps-section" style={{ 
        backgroundColor: '#111111', 
        padding: '2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'خطوات استخدام النظام' : 'System Usage Steps'}
          </h2>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              {
                number: '1',
                icon: '📄',
                titleAr: 'أرفق قوائمك',
                titleEn: 'Upload Your Statements',
                descAr: 'ارفع قوائمك المالية بأي صيغة (PDF, Excel, Word, صور) لمدة تصل إلى 10 سنوات',
                descEn: 'Upload your financial statements in any format (PDF, Excel, Word, images) for up to 10 years',
                color: '#D4AF37'
              },
              {
                number: '2',
                icon: '⚙️',
                titleAr: 'حدد خيارات التحليل',
                titleEn: 'Select Analysis Options',
                descAr: 'اختر اللغة، القطاع، النشاط، مستوى المقارنة ونوع التحليل المطلوب',
                descEn: 'Choose language, sector, activity, comparison level and type of analysis required',
                color: '#D4AF37'
              },
              {
                number: '3',
                icon: '🚀',
                titleAr: 'اضغط زر التحليل',
                titleEn: 'Click Analysis Button',
                descAr: 'اضغط زراً واحداً واحصل على تحليل شامل مع تقارير وعروض تقديمية جاهزة!',
                descEn: 'Click one button and get comprehensive analysis with ready reports and presentations!',
                color: '#D4AF37'
              }
            ].map((step, index) => (
              <div key={index} className="step-card" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
                border: '3px solid #D4AF37',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                transition: 'all 0.5s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                width: '320px',
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: 'scale(1)',
                animation: `stepPulse${index + 1} 3s ease-in-out infinite`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.3)';
                e.currentTarget.style.borderColor = step.color;
                e.currentTarget.style.background = `linear-gradient(135deg, ${step.color}20 0%, rgba(0, 0, 0, 0.9) 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)';
              }}>
                
                {/* خط الربط */}
                {index < 2 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-40px',
                    width: '80px',
                    height: '3px',
                    background: `linear-gradient(90deg, #D4AF37, ${step.color})`,
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    borderRadius: '2px',
                    animation: 'flowRight 2s ease-in-out infinite'
                  }}></div>
                )}
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: `linear-gradient(45deg, ${step.color}, #D4AF37)`,
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  boxShadow: `0 0 20px ${step.color}50`,
                  animation: 'numberGlow 2s ease-in-out infinite'
                }}>{step.number}</div>
                
                <div className="step-icon" style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1.5rem', 
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease'
                }}>{step.icon}</div>
                
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.4rem', 
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: step.color
                }}>
                  {language === 'ar' ? step.titleAr : step.titleEn}
                </h3>
                
                <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1rem', 
                  lineHeight: '1.5',
                  opacity: 0.9,
                  margin: 0
                }}>
                  {language === 'ar' ? step.descAr : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes logoFlash {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.6));
            opacity: 1;
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(212, 175, 55, 1));
            opacity: 0.7;
          }
        }
        
        .btn-hero-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.7);
        }
        
        .btn-hero-secondary:hover {
          background-color: rgba(212, 175, 55, 0.1);
          transform: scale(1.05);
        }
        
        @keyframes stepPulse1 {
          0%, 100% { border-color: rgba(212, 175, 55, 0.4); }
          50% { border-color: #22C55E; }
        }
        
        @keyframes stepPulse2 {
          0%, 100% { border-color: rgba(212, 175, 55, 0.4); }
          33% { border-color: #3B82F6; }
        }
        
        @keyframes stepPulse3 {
          0%, 100% { border-color: rgba(212, 175, 55, 0.4); }
          66% { border-color: #EF4444; }
        }
        
        @keyframes flowRight {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes numberGlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes sentimentPulse {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
            transform: translateX(-50%) scale(1);
          }
          50% { 
            box-shadow: 0 0 25px rgba(212, 175, 55, 1);
            transform: translateX(-50%) scale(1.1);
          }
        }
      `}</style>

      {/* Free Tools Section - أدوات مجانية شاملة */}
      <section className="free-tools-section" style={{ 
        backgroundColor: '#0a0a0a', 
        padding: '2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            {language === 'ar' ? 'أدوات مجانية' : 'Free Tools'}
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {/* الأخبار المالية الحية */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📰</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'الأخبار المالية الحية' : 'Live Financial News'}
                </h3>
              </div>
              
              <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                <div style={{ marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', borderLeft: '3px solid #22C55E' }}>
                  <strong style={{ color: '#22C55E' }}>{language === 'ar' ? 'إيجابي' : 'Positive'}</strong><br/>
                  {language === 'ar' ? 'السوق السعودي يرتفع 1.2% مع تحسن أداء القطاع المصرفي' : 'Saudi market rises 1.2% with improved banking sector performance'}
                  <small style={{ opacity: 0.7, display: 'block', marginTop: '0.3rem' }}>
                    {language === 'ar' ? 'منذ ساعتين' : '2 hours ago'}
                  </small>
                </div>
                
                <div style={{ marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(234, 179, 8, 0.1)', borderRadius: '8px', borderLeft: '3px solid #EAB308' }}>
                  <strong style={{ color: '#EAB308' }}>{language === 'ar' ? 'متوسط' : 'Neutral'}</strong><br/>
                  {language === 'ar' ? 'أسعار النفط تواصل الارتفاع لليوم الثالث على التوالي' : 'Oil prices continue rising for third consecutive day'}
                  <small style={{ opacity: 0.7, display: 'block', marginTop: '0.3rem' }}>
                    {language === 'ar' ? 'منذ 3 ساعات' : '3 hours ago'}
                  </small>
                </div>
                
                <div style={{ marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', borderLeft: '3px solid #22C55E' }}>
                  <strong style={{ color: '#22C55E' }}>{language === 'ar' ? 'إيجابي' : 'Positive'}</strong><br/>
                  {language === 'ar' ? 'قطاع التكنولوجيا يشهد نمواً قوياً في الربع الثالث' : 'Technology sector shows strong growth in Q3'}
                  <small style={{ opacity: 0.7, display: 'block', marginTop: '0.3rem' }}>
                    {language === 'ar' ? 'منذ 4 ساعات' : '4 hours ago'}
                  </small>
                </div>
              </div>
            </div>

            {/* التقويم الاقتصادي */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📅</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'التقويم الاقتصادي' : 'Economic Calendar'}
                </h3>
              </div>
              
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
                  <div>
                    <strong>{language === 'ar' ? 'إعلان معدلات التضخم الأمريكي' : 'US Inflation Rate Announcement'}</strong><br/>
                    <small>{language === 'ar' ? 'اليوم - 14:30' : 'Today - 2:30 PM'}</small>
                  </div>
                  <span style={{ 
                    background: '#EF4444', 
                    color: 'white',
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '10px', 
                    fontSize: '0.75rem'
                  }}>
                    {language === 'ar' ? 'عالي' : 'High'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
                  <div>
                    <strong>{language === 'ar' ? 'قرار البنك المركزي الأوروبي' : 'European Central Bank Decision'}</strong><br/>
                    <small>{language === 'ar' ? 'غداً - 10:00' : 'Tomorrow - 10:00 AM'}</small>
                  </div>
                  <span style={{ 
                    background: '#EF4444', 
                    color: 'white',
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '10px', 
                    fontSize: '0.75rem'
                  }}>
                    {language === 'ar' ? 'عالي' : 'High'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(234, 179, 8, 0.1)', borderRadius: '8px' }}>
                  <div>
                    <strong>{language === 'ar' ? 'بيانات الوظائف غير الزراعية' : 'Non-Farm Payrolls Data'}</strong><br/>
                    <small>{language === 'ar' ? 'الأربعاء - 16:00' : 'Wednesday - 4:00 PM'}</small>
                  </div>
                  <span style={{ 
                    background: '#EAB308', 
                    color: 'white',
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '10px', 
                    fontSize: '0.75rem'
                  }}>
                    {language === 'ar' ? 'متوسط' : 'Medium'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(234, 179, 8, 0.1)', borderRadius: '8px' }}>
                  <div>
                    <strong>{language === 'ar' ? 'بيانات الناتج المحلي الإجمالي' : 'GDP Data Release'}</strong><br/>
                    <small>{language === 'ar' ? 'الخميس - 12:00' : 'Thursday - 12:00 PM'}</small>
                  </div>
                  <span style={{ 
                    background: '#EAB308', 
                    color: 'white',
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '10px', 
                    fontSize: '0.75rem'
                  }}>
                    {language === 'ar' ? 'متوسط' : 'Medium'}
                  </span>
                </div>
              </div>
            </div>

            {/* حاسبة السعر العادل */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📊</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'حاسبة السعر العادل للسهم' : 'Fair Stock Price Calculator'}
                </h3>
              </div>

              <div className="calculator-content">
                <div style={{ marginBottom: '1rem' }}>
                  <select 
                    value={activeCalculator === 'fairPrice' ? calculatorResults.fairPriceMethod || 'company' : 'company'}
                    onChange={(e) => {
                      setActiveCalculator('fairPrice');
                      setCalculatorResults({...calculatorResults, fairPriceMethod: e.target.value});
                    }}
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem', 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      color: '#D4AF37', 
                      border: '1px solid rgba(212, 175, 55, 0.3)', 
                      borderRadius: '5px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="company">{language === 'ar' ? 'إدخال اسم الشركة' : 'Enter Company Name'}</option>
                    <option value="manual">{language === 'ar' ? 'إدخال البيانات يدوياً' : 'Manual Data Entry'}</option>
                  </select>
                </div>

                {activeCalculator === 'fairPrice' && (
                  <>
                    {calculatorResults.fairPriceMethod === 'company' ? (
                      <div style={{ marginBottom: '1rem' }}>
                        <input
                          type="text"
                          placeholder={language === 'ar' ? 'اسم الشركة (سابك، أرامكو، الراجحي)' : 'Company Name (SABIC, Aramco, Al Rajhi)'}
                          style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                            color: '#D4AF37', 
                            border: '1px solid rgba(212, 175, 55, 0.3)', 
                            borderRadius: '5px',
                            fontSize: '0.9rem'
                          }}
                          onChange={(e) => {
                            if (e.target.value.trim()) {
                              const mockResults = {
                                'سابك': { fairPrice: '145.50', currentPrice: '142.30', recommendation: 'شراء' },
                                'أرامكو': { fairPrice: '38.75', currentPrice: '37.20', recommendation: 'شراء' },
                                'الراجحي': { fairPrice: '185.20', currentPrice: '178.90', recommendation: 'شراء' },
                                'SABIC': { fairPrice: '145.50', currentPrice: '142.30', recommendation: 'Buy' },
                                'Aramco': { fairPrice: '38.75', currentPrice: '37.20', recommendation: 'Buy' },
                                'Al Rajhi': { fairPrice: '185.20', currentPrice: '178.90', recommendation: 'Buy' }
                              };
                              const result = mockResults[e.target.value] || { 
                                fairPrice: '125.00', 
                                recommendation: language === 'ar' ? 'تحليل' : 'Analysis' 
                              };
                              setCalculatorResults({...calculatorResults, fairPriceResult: result});
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        <input
                          type="number"
                          placeholder={language === 'ar' ? 'ربحية السهم' : 'EPS'}
                          onChange={(e) => {
                            const eps = parseFloat(e.target.value) || 0;
                            const peRatio = calculatorResults.peRatio || 15;
                            if (eps > 0) {
                              setCalculatorResults({
                                ...calculatorResults, 
                                eps: eps,
                                fairPriceResult: {
                                  fairPrice: (eps * peRatio).toFixed(2),
                                  recommendation: language === 'ar' ? 'محسوب' : 'Calculated'
                                }
                              });
                            }
                          }}
                          style={{ 
                            padding: '0.5rem', 
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                            color: '#D4AF37', 
                            border: '1px solid rgba(212, 175, 55, 0.3)', 
                            borderRadius: '5px',
                            fontSize: '0.9rem'
                          }}
                        />
                        <input
                          type="number"
                          placeholder={language === 'ar' ? 'مضاعف الأرباح' : 'P/E Ratio'}
                          onChange={(e) => {
                            const peRatio = parseFloat(e.target.value) || 15;
                            const eps = calculatorResults.eps || 0;
                            if (eps > 0) {
                              setCalculatorResults({
                                ...calculatorResults, 
                                peRatio: peRatio,
                                fairPriceResult: {
                                  fairPrice: (eps * peRatio).toFixed(2),
                                  recommendation: language === 'ar' ? 'محسوب' : 'Calculated'
                                }
                              });
                            }
                          }}
                          style={{ 
                            padding: '0.5rem', 
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                            color: '#D4AF37', 
                            border: '1px solid rgba(212, 175, 55, 0.3)', 
                            borderRadius: '5px',
                            fontSize: '0.9rem'
                          }}
                        />
                      </div>
                    )}

                    {calculatorResults.fairPriceResult && (
                      <div style={{ 
                        marginBottom: '1rem', 
                        padding: '1rem', 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        borderRadius: '8px',
                        border: '1px solid rgba(212, 175, 55, 0.2)'
                      }}>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'السعر العادل:' : 'Fair Price:'}</strong> {calculatorResults.fairPriceResult.fairPrice} {language === 'ar' ? 'ريال' : 'SAR'}
                          </p>
                          {calculatorResults.fairPriceResult.currentPrice && (
                            <p style={{ margin: '0.3rem 0' }}>
                              <strong>{language === 'ar' ? 'السعر الحالي:' : 'Current Price:'}</strong> {calculatorResults.fairPriceResult.currentPrice} {language === 'ar' ? 'ريال' : 'SAR'}
                            </p>
                          )}
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'التوصية:' : 'Recommendation:'}</strong> 
                            <span style={{ color: '#22C55E', marginLeft: '0.3rem' }}>
                              {calculatorResults.fairPriceResult.recommendation}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                <button 
                  onClick={() => setActiveCalculator(activeCalculator === 'fairPrice' ? null : 'fairPrice')}
                  style={{ 
                    width: '100%', 
                    padding: '0.8rem', 
                    backgroundColor: activeCalculator === 'fairPrice' ? 'rgba(212, 175, 55, 0.8)' : '#D4AF37', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {activeCalculator === 'fairPrice' ? 
                    (language === 'ar' ? 'إخفاء الحاسبة' : 'Hide Calculator') : 
                    (language === 'ar' ? 'احسب السعر العادل' : 'Calculate Fair Price')
                  }
                </button>
              </div>
            </div>

            {/* حاسبة العائد على الاستثمار */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>💰</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
                </h3>
              </div>

              <div className="calculator-content">
                {activeCalculator === 'roi' && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'المبلغ المستثمر' : 'Initial Investment'}
                        onChange={(e) => {
                          const initial = parseFloat(e.target.value) || 0;
                          const current = calculatorResults.currentValue || 0;
                          if (initial > 0 && current > 0) {
                            const roi = ((current - initial) / initial * 100).toFixed(2);
                            setCalculatorResults({
                              ...calculatorResults, 
                              initialInvestment: initial,
                              roiResult: {
                                roi: roi,
                                profit: (current - initial).toFixed(2),
                                recommendation: roi > 0 ? (language === 'ar' ? 'مربح' : 'Profitable') : (language === 'ar' ? 'خسارة' : 'Loss')
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'القيمة الحالية' : 'Current Value'}
                        onChange={(e) => {
                          const current = parseFloat(e.target.value) || 0;
                          const initial = calculatorResults.initialInvestment || 0;
                          if (initial > 0 && current > 0) {
                            const roi = ((current - initial) / initial * 100).toFixed(2);
                            setCalculatorResults({
                              ...calculatorResults, 
                              currentValue: current,
                              roiResult: {
                                roi: roi,
                                profit: (current - initial).toFixed(2),
                                recommendation: roi > 0 ? (language === 'ar' ? 'مربح' : 'Profitable') : (language === 'ar' ? 'خسارة' : 'Loss')
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                    
                    {calculatorResults.roiResult && (
                      <div style={{ 
                        padding: '1rem', 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        borderRadius: '8px',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        marginBottom: '1rem'
                      }}>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'العائد على الاستثمار:' : 'ROI:'}</strong> {calculatorResults.roiResult.roi}%
                          </p>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'الربح/الخسارة:' : 'Profit/Loss:'}</strong> {calculatorResults.roiResult.profit} {language === 'ar' ? 'ريال' : 'SAR'}
                          </p>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'النتيجة:' : 'Result:'}</strong> 
                            <span style={{ color: calculatorResults.roiResult.roi > 0 ? '#22C55E' : '#EF4444', marginLeft: '0.3rem' }}>
                              {calculatorResults.roiResult.recommendation}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button 
                  onClick={() => setActiveCalculator(activeCalculator === 'roi' ? null : 'roi')}
                  style={{ 
                    width: '100%', 
                    padding: '0.8rem', 
                    backgroundColor: activeCalculator === 'roi' ? 'rgba(212, 175, 55, 0.8)' : '#D4AF37', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {activeCalculator === 'roi' ? 
                    (language === 'ar' ? 'إخفاء الحاسبة' : 'Hide Calculator') : 
                    (language === 'ar' ? 'احسب العائد' : 'Calculate ROI')
                  }
                </button>
              </div>
            </div>

            {/* حاسبة نسبة السعر للأرباح */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📈</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'حاسبة نسبة السعر للأرباح' : 'P/E Ratio Calculator'}
                </h3>
              </div>

              <div className="calculator-content">
                {activeCalculator === 'pe' && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'سعر السهم' : 'Stock Price'}
                        onChange={(e) => {
                          const price = parseFloat(e.target.value) || 0;
                          const eps = calculatorResults.peEps || 0;
                          if (price > 0 && eps > 0) {
                            const pe = (price / eps).toFixed(2);
                            setCalculatorResults({
                              ...calculatorResults, 
                              stockPrice: price,
                              peResult: {
                                pe: pe,
                                recommendation: pe < 15 ? (language === 'ar' ? 'مقوم بأقل من قيمته' : 'Undervalued') : 
                                              pe > 25 ? (language === 'ar' ? 'مقوم بأكثر من قيمته' : 'Overvalued') : 
                                              (language === 'ar' ? 'مقوم بشكل عادل' : 'Fairly Valued')
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'ربحية السهم' : 'Earnings Per Share'}
                        onChange={(e) => {
                          const eps = parseFloat(e.target.value) || 0;
                          const price = calculatorResults.stockPrice || 0;
                          if (price > 0 && eps > 0) {
                            const pe = (price / eps).toFixed(2);
                            setCalculatorResults({
                              ...calculatorResults, 
                              peEps: eps,
                              peResult: {
                                pe: pe,
                                recommendation: pe < 15 ? (language === 'ar' ? 'مقوم بأقل من قيمته' : 'Undervalued') : 
                                              pe > 25 ? (language === 'ar' ? 'مقوم بأكثر من قيمته' : 'Overvalued') : 
                                              (language === 'ar' ? 'مقوم بشكل عادل' : 'Fairly Valued')
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                    
                    {calculatorResults.peResult && (
                      <div style={{ 
                        padding: '1rem', 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        borderRadius: '8px',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        marginBottom: '1rem'
                      }}>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'نسبة السعر للأرباح:' : 'P/E Ratio:'}</strong> {calculatorResults.peResult.pe}
                          </p>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'التقييم:' : 'Valuation:'}</strong> 
                            <span style={{ 
                              color: calculatorResults.peResult.pe < 15 ? '#22C55E' : 
                                    calculatorResults.peResult.pe > 25 ? '#EF4444' : '#EAB308', 
                              marginLeft: '0.3rem' 
                            }}>
                              {calculatorResults.peResult.recommendation}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button 
                  onClick={() => setActiveCalculator(activeCalculator === 'pe' ? null : 'pe')}
                  style={{ 
                    width: '100%', 
                    padding: '0.8rem', 
                    backgroundColor: activeCalculator === 'pe' ? 'rgba(212, 175, 55, 0.8)' : '#D4AF37', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {activeCalculator === 'pe' ? 
                    (language === 'ar' ? 'إخفاء الحاسبة' : 'Hide Calculator') : 
                    (language === 'ar' ? 'احسب النسبة' : 'Calculate P/E')
                  }
                </button>
              </div>
            </div>

            {/* مؤشر مزاج السوق */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🎯</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'مؤشر مزاج السوق التفاعلي' : 'Interactive Market Sentiment'}
                </h3>
              </div>

              <div style={{ textAlign: 'center' }}>
                {/* خط المؤشر مع الفيسات */}
                <div style={{ 
                  position: 'relative', 
                  width: '220px', 
                  height: '50px', 
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {/* الخط */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '8px',
                    background: 'linear-gradient(90deg, #EF4444 0%, #EAB308 50%, #22C55E 100%)',
                    borderRadius: '4px'
                  }}></div>
                  
                  {/* الفيسات الثلاث */}
                  <div style={{
                    position: 'absolute',
                    left: '5px',
                    fontSize: '2rem',
                    transform: 'translateY(-3px)'
                  }}>😔</div>
                  
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-3px)',
                    fontSize: '2rem'
                  }}>😐</div>
                  
                  <div style={{
                    position: 'absolute',
                    right: '5px',
                    fontSize: '2rem',
                    transform: 'translateY(-3px)'
                  }}>😊</div>
                  
                  {/* المؤشر المتحرك */}
                  <div style={{
                    position: 'absolute',
                    left: '65%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '25px',
                    backgroundColor: '#D4AF37',
                    borderRadius: '5px',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)',
                    animation: 'sentimentPulse 2s ease-in-out infinite'
                  }}></div>
                </div>
                
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37', marginBottom: '0.8rem' }}>
                  65 / 100
                </div>
                
                <div style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  color: '#22C55E', 
                  marginBottom: '1rem' 
                }}>
                  {language === 'ar' ? 'متفائل' : 'Optimistic'}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left', fontSize: '0.9rem' }}>
                  <div>
                    <strong>{language === 'ar' ? 'الاتجاه:' : 'Trend:'}</strong>
                    <br />
                    <span style={{ color: '#22C55E' }}>{language === 'ar' ? 'إيجابي' : 'Positive'}</span>
                  </div>
                  <div>
                    <strong>{language === 'ar' ? 'التقلبات:' : 'Volatility:'}</strong>
                    <br />
                    <span style={{ color: '#EAB308' }}>{language === 'ar' ? 'متوسط' : 'Medium'}</span>
                  </div>
                </div>
                
                <small style={{ opacity: 0.7, marginTop: '1rem', display: 'block', fontSize: '0.8rem' }}>
                  {language === 'ar' ? 'آخر تحديث: الآن' : 'Last Updated: Now'}
                </small>
              </div>
            </div>

            {/* حاسبة التضخم */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📉</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'حاسبة التضخم' : 'Inflation Calculator'}
                </h3>
              </div>

              <div className="calculator-content">
                {activeCalculator === 'inflation' && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'المبلغ الأولي' : 'Initial Amount'}
                        onChange={(e) => {
                          const amount = parseFloat(e.target.value) || 0;
                          const rate = calculatorResults.inflationRate || 0;
                          const years = calculatorResults.inflationYears || 0;
                          if (amount > 0 && rate > 0 && years > 0) {
                            const futureValue = amount * Math.pow(1 + rate/100, years);
                            const inflationImpact = futureValue - amount;
                            setCalculatorResults({
                              ...calculatorResults, 
                              inflationAmount: amount,
                              inflationResult: {
                                futureValue: futureValue.toFixed(2),
                                impact: inflationImpact.toFixed(2),
                                purchasingPower: ((amount / futureValue) * 100).toFixed(1)
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                      <input
                        type="number"
                        placeholder={language === 'ar' ? 'معدل التضخم %' : 'Inflation Rate %'}
                        onChange={(e) => {
                          const rate = parseFloat(e.target.value) || 0;
                          const amount = calculatorResults.inflationAmount || 0;
                          const years = calculatorResults.inflationYears || 0;
                          if (amount > 0 && rate > 0 && years > 0) {
                            const futureValue = amount * Math.pow(1 + rate/100, years);
                            const inflationImpact = futureValue - amount;
                            setCalculatorResults({
                              ...calculatorResults, 
                              inflationRate: rate,
                              inflationResult: {
                                futureValue: futureValue.toFixed(2),
                                impact: inflationImpact.toFixed(2),
                                purchasingPower: ((amount / futureValue) * 100).toFixed(1)
                              }
                            });
                          }
                        }}
                        style={{ 
                          padding: '0.5rem', 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          color: '#D4AF37', 
                          border: '1px solid rgba(212, 175, 55, 0.3)', 
                          borderRadius: '5px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                    <input
                      type="number"
                      placeholder={language === 'ar' ? 'عدد السنوات' : 'Number of Years'}
                      onChange={(e) => {
                        const years = parseFloat(e.target.value) || 0;
                        const amount = calculatorResults.inflationAmount || 0;
                        const rate = calculatorResults.inflationRate || 0;
                        if (amount > 0 && rate > 0 && years > 0) {
                          const futureValue = amount * Math.pow(1 + rate/100, years);
                          const inflationImpact = futureValue - amount;
                          setCalculatorResults({
                            ...calculatorResults, 
                            inflationYears: years,
                            inflationResult: {
                              futureValue: futureValue.toFixed(2),
                              impact: inflationImpact.toFixed(2),
                              purchasingPower: ((amount / futureValue) * 100).toFixed(1)
                            }
                          });
                        }
                      }}
                      style={{ 
                        width: '100%',
                        padding: '0.5rem', 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        color: '#D4AF37', 
                        border: '1px solid rgba(212, 175, 55, 0.3)', 
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                        marginBottom: '1rem'
                      }}
                    />
                    
                    {calculatorResults.inflationResult && (
                      <div style={{ 
                        padding: '1rem', 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        borderRadius: '8px',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        marginBottom: '1rem'
                      }}>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'القيمة المستقبلية:' : 'Future Value:'}</strong> {calculatorResults.inflationResult.futureValue} {language === 'ar' ? 'ريال' : 'SAR'}
                          </p>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'أثر التضخم:' : 'Inflation Impact:'}</strong> {calculatorResults.inflationResult.impact} {language === 'ar' ? 'ريال' : 'SAR'}
                          </p>
                          <p style={{ margin: '0.3rem 0' }}>
                            <strong>{language === 'ar' ? 'القوة الشرائية:' : 'Purchasing Power:'}</strong> 
                            <span style={{ color: '#EF4444', marginLeft: '0.3rem' }}>
                              {calculatorResults.inflationResult.purchasingPower}%
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button 
                  onClick={() => setActiveCalculator(activeCalculator === 'inflation' ? null : 'inflation')}
                  style={{ 
                    width: '100%', 
                    padding: '0.8rem', 
                    backgroundColor: activeCalculator === 'inflation' ? 'rgba(212, 175, 55, 0.8)' : '#D4AF37', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '5px', 
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {activeCalculator === 'inflation' ? 
                    (language === 'ar' ? 'إخفاء الحاسبة' : 'Hide Calculator') : 
                    (language === 'ar' ? 'احسب التضخم' : 'Calculate Inflation')
                  }
                </button>
              </div>
            </div>

            {/* بوت GPT المالي */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              minHeight: '350px'
            }}>
              <div className="tool-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="tool-icon" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🤖</div>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '1.2rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'بوت GPT المالي المجاني' : 'Free Financial GPT Bot'}
                </h3>
              </div>

              <div className="chat-interface">
                <div style={{ 
                  height: '180px', 
                  overflowY: 'auto', 
                  marginBottom: '1rem', 
                  padding: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '8px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  {!calculatorResults.chatMessages || calculatorResults.chatMessages.length === 0 ? (
                    <p style={{ opacity: 0.7, textAlign: 'center', fontSize: '0.9rem', margin: 0 }}>
                      {language === 'ar' ? 'اسأل أي سؤال مالي...' : 'Ask any financial question...'}
                    </p>
                  ) : (
                    calculatorResults.chatMessages.map((msg, index) => (
                      <div key={index} style={{ 
                        marginBottom: '0.8rem', 
                        padding: '0.6rem',
                        backgroundColor: msg.type === 'user' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        lineHeight: '1.4'
                      }}>
                        <strong>{msg.type === 'user' ? (language === 'ar' ? 'أنت:' : 'You:') : (language === 'ar' ? 'البوت المالي:' : 'Financial Bot:')}</strong>
                        <br />
                        {msg.content}
                      </div>
                    ))
                  )}
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    value={calculatorResults.chatInput || ''}
                    onChange={(e) => setCalculatorResults({...calculatorResults, chatInput: e.target.value})}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && calculatorResults.chatInput?.trim()) {
                        const responses = language === 'ar' ? [
                          'بناءً على التحليل، أنصح بالتنويع في الاستثمارات وعدم وضع كل البيض في سلة واحدة.',
                          'السوق السعودي يظهر استقراراً نسبياً مع نمو قوي في قطاعات التكنولوجيا والطاقة المتجددة.',
                          'لحساب العائد على الاستثمار: (الربح - رأس المال) ÷ رأس المال × 100%',
                          'أسعار النفط تؤثر بشكل كبير على الأسهم المرتبطة بقطاع الطاقة في السوق السعودي.',
                          'من المهم مراجعة القوائم المالية ربع السنوية للشركات قبل اتخاذ قرارات الاستثمار.',
                          'تأكد من فهم مخاطر الاستثمار وتوزيع المحفظة على قطاعات مختلفة.',
                          'مؤشر تاسي يعكس الأداء العام للسوق السعودي ويمكن استخدامه كمرجع للمقارنة.'
                        ] : [
                          'Based on analysis, I recommend diversifying investments and not putting all eggs in one basket.',
                          'The Saudi market shows relative stability with strong growth in technology and renewable energy sectors.',
                          'ROI calculation formula: (Profit - Capital) ÷ Capital × 100%',
                          'Oil prices significantly impact energy-related stocks in the Saudi market.',
                          'It\'s important to review quarterly financial statements before making investment decisions.',
                          'Make sure to understand investment risks and diversify your portfolio across different sectors.',
                          'TASI index reflects the overall performance of the Saudi market and can be used as a benchmark.'
                        ];
                        
                        const newMessages = [
                          ...(calculatorResults.chatMessages || []),
                          { type: 'user', content: calculatorResults.chatInput },
                          { type: 'bot', content: responses[Math.floor(Math.random() * responses.length)] }
                        ];
                        
                        setCalculatorResults({
                          ...calculatorResults, 
                          chatMessages: newMessages,
                          chatInput: ''
                        });
                      }
                    }}
                    placeholder={language === 'ar' ? 'اكتب سؤالك المالي هنا...' : 'Type your financial question here...'}
                    style={{ 
                      flex: 1, 
                      padding: '0.6rem', 
                      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                      color: '#D4AF37', 
                      border: '1px solid rgba(212, 175, 55, 0.3)', 
                      borderRadius: '5px',
                      fontSize: '0.9rem'
                    }}
                  />
                  <button 
                    onClick={() => {
                      if (calculatorResults.chatInput?.trim()) {
                        const responses = language === 'ar' ? [
                          'بناءً على التحليل، أنصح بالتنويع في الاستثمارات وعدم وضع كل البيض في سلة واحدة.',
                          'السوق السعودي يظهر استقراراً نسبياً مع نمو قوي في قطاعات التكنولوجيا والطاقة المتجددة.',
                          'لحساب العائد على الاستثمار: (الربح - رأس المال) ÷ رأس المال × 100%'
                        ] : [
                          'Based on analysis, I recommend diversifying investments and not putting all eggs in one basket.',
                          'The Saudi market shows relative stability with strong growth in technology and renewable energy sectors.',
                          'ROI calculation formula: (Profit - Capital) ÷ Capital × 100%'
                        ];
                        
                        const newMessages = [
                          ...(calculatorResults.chatMessages || []),
                          { type: 'user', content: calculatorResults.chatInput },
                          { type: 'bot', content: responses[Math.floor(Math.random() * responses.length)] }
                        ];
                        
                        setCalculatorResults({
                          ...calculatorResults, 
                          chatMessages: newMessages,
                          chatInput: ''
                        });
                      }
                    }}
                    style={{ 
                      padding: '0.6rem 1rem', 
                      backgroundColor: '#D4AF37', 
                      color: '#000', 
                      border: 'none', 
                      borderRadius: '5px', 
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.85rem'
                    }}
                  >
                    {language === 'ar' ? 'إرسال' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="analysis-types" className="analysis-types" style={{ 
        backgroundColor: '#000000', 
        padding: '1rem 2rem 2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'أنواع التحليل المالي' : 'Types of Financial Analysis'}
          </h2>
          <p className={`section-subtitle ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: '1.3rem', 
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            {language === 'ar'
              ? '116+ نوع تحليل مالي شامل من الكلاسيكي إلى الذكاء الاصطناعي'
              : '116+ comprehensive financial analysis types from classical to AI'
            }
          </p>
          
          <div className="analysis-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {analysisTypes.map((type, index) => (
              <div key={index} className="analysis-type-card" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}>
                <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {type.category}
                </h4>
                <div className="analysis-count" style={{ 
                  background: '#D4AF37', 
                  color: '#000000', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '25px', 
                  display: 'inline-block', 
                  fontWeight: '600', 
                  marginBottom: '1.5rem' 
                }}>
                  {type.count} {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}
                </div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  textAlign: language === 'ar' ? 'right' : 'left' 
                }}>
                  {type.types.map((analysisType, idx) => (
                    <li key={idx} style={{ 
                      margin: '0.8rem 0', 
                      opacity: 0.9,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }} className={language === 'ar' ? 'arabic-text' : ''}>
                      <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>▶</span>
                      {analysisType}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* التحليل الشامل */}
            <div className="analysis-type-card comprehensive-analysis" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid #D4AF37',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
                color: '#000',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}>
                {language === 'ar' ? 'الأشمل' : 'Most Comprehensive'}
              </div>
              
              <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif',
                color: '#D4AF37'
              }}>
                {language === 'ar' ? 'التحليل الشامل' : 'Comprehensive Analysis'}
              </h4>
              <div className="analysis-count" style={{ 
                background: 'linear-gradient(45deg, #D4AF37, #FFD700)', 
                color: '#000000', 
                padding: '0.5rem 1rem', 
                borderRadius: '25px', 
                display: 'inline-block', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
              }}>
                116+ {language === 'ar' ? 'تحليل شامل' : 'Complete Analyses'}
              </div>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                opacity: 0.95,
                fontFamily: 'Playfair Display, serif',
                marginBottom: '1.5rem'
              }}>
                {language === 'ar'
                  ? 'يشمل جميع أنواع التحليل المالي المذكورة أعلاه في تقرير واحد شامل ومتكامل مع التوصيات الاستراتيجية والمقارنات العالمية'
                  : 'Includes all financial analysis types mentioned above in one comprehensive integrated report with strategic recommendations and global comparisons'
                }
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                textAlign: language === 'ar' ? 'right' : 'left' 
              }}>
                {[
                  language === 'ar' ? 'جميع التحاليل الكلاسيكية والمتقدمة' : 'All classical and advanced analyses',
                  language === 'ar' ? 'تحليل بالذكاء الاصطناعي' : 'AI-powered analysis',
                  language === 'ar' ? 'توصيات استراتيجية شاملة' : 'Comprehensive strategic recommendations',
                  language === 'ar' ? 'مقارنات عالمية' : 'Global comparisons'
                ].map((item, idx) => (
                  <li key={idx} style={{ 
                    margin: '0.8rem 0', 
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#D4AF37'
                  }} className={language === 'ar' ? 'arabic-text' : ''}>
                    <span style={{ color: '#FFD700', fontSize: '1rem' }}>⭐</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section - ماذا يقول عملاؤنا */}
      <section id="testimonials" className="testimonials-section" style={{ 
        backgroundColor: '#000000', 
        padding: '0.2rem 2rem 2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          
          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                <div className="testimonial-stars" style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))'
                }}>
                  {testimonial.stars}
                </div>
                <p className={`testimonial-text ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                  fontSize: '0.9rem', 
                  lineHeight: '1.4', 
                  marginBottom: '1.2rem',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  opacity: 0.9
                }}>
                  "{testimonial.text}"
                </p>
                <div className={`testimonial-author ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                  fontWeight: '600', 
                  fontSize: '0.9rem',
                  color: '#D4AF37',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  - {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - أسعار الاشتراكات */}
      <section id="pricing" className="pricing-section" style={{ 
        backgroundColor: '#111111', 
        padding: '2rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'أسعار الاشتراكات' : 'Subscription Pricing'}
          </h2>
          
          <div className="pricing-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            maxWidth: '800px',
            margin: '3rem auto 0'
          }}>
            {/* الخطة الشهرية */}
            <div className="pricing-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '1.5rem 1rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              height: 'fit-content'
            }}>
              <h3 className={`pricing-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'الخطة الشهرية' : 'Monthly Plan'}
              </h3>
              <div className="pricing-price" style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                color: '#D4AF37',
                fontFamily: 'Playfair Display, serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem'
              }}>
                5,000 <span style={{ fontSize: '1.2rem' }}>{language === 'ar' ? 'ر.س' : 'SAR'}</span>
              </div>
              <div className={`pricing-period ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                fontSize: '1rem', 
                marginBottom: '1.5rem',
                opacity: 0.8
              }}>
                {language === 'ar' ? 'شهرياً' : 'per month'}
              </div>
              <ul className={`pricing-features ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '1.5rem',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'تحليل شامل لجميع الأنواع' : 'Comprehensive analysis of all types'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'تقارير وعروض تقديمية' : 'Reports and presentations'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'مقارنات عالمية' : 'Global comparisons'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'دعم فني 24/7' : '24/7 technical support'}
                </li>
              </ul>
              <Link to="/login" className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                width: '80%'
              }}>
                {language === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
              </Link>
            </div>
            
            {/* الخطة السنوية */}
            <div className="pricing-card popular" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
              border: '3px solid #D4AF37',
              borderRadius: '25px',
              padding: '2rem 1.2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              height: 'fit-content'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#D4AF37',
                color: '#000000',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '0.8rem'
              }}>
                {language === 'ar' ? 'الأفضل قيمة' : 'Best Value'}
              </div>
              
              <h3 className={`pricing-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'الخطة السنوية' : 'Annual Plan'}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <div className="pricing-price" style={{ 
                  textDecoration: 'line-through', 
                  opacity: 0.6, 
                  fontSize: '1.4rem',
                  color: '#EF4444',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  60,000
                </div>
                <div className="pricing-price" style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700',
                  color: '#D4AF37',
                  fontFamily: 'Playfair Display, serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  54,000 <span style={{ fontSize: '1.2rem' }}>{language === 'ar' ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>
              
              <div className={`pricing-period ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                fontSize: '1rem', 
                marginBottom: '1rem',
                opacity: 0.9
              }}>
                {language === 'ar' ? 'سنوياً' : 'annually'}
              </div>
              
              <div style={{
                background: 'rgba(34, 197, 94, 0.2)',
                color: '#22C55E',
                padding: '0.4rem 0.8rem',
                borderRadius: '25px',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
                border: '1px solid #22C55E'
              }}>
                {language === 'ar' ? 'وفر 6,000 ر.س (خصم 10%)' : 'Save 6,000 SAR (10% discount)'}
              </div>
              
              <ul className={`pricing-features ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '1.5rem',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'جميع مميزات الخطة الشهرية' : 'All monthly plan features'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'خصم 10% عند الدفع السنوي' : '10% discount on annual payment'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'أولوية في الدعم الفني' : 'Priority technical support'}
                </li>
                <li style={{ margin: '0.8rem 0', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22C55E', fontSize: '1rem' }}>✓</span>
                  {language === 'ar' ? 'تحديثات مجانية' : 'Free updates'}
                </li>
              </ul>
              
              <Link to="/login" className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                width: '80%',
                boxShadow: '0 5px 15px rgba(212, 175, 55, 0.3)'
              }}>
                {language === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
              </Link>
            </div>
          </div>
          
          {/* طرق الدفع */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
              fontSize: '1.4rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem',
              fontFamily: 'Playfair Display, serif'
            }}>
              {language === 'ar' ? 'طرق الدفع المتاحة' : 'Available Payment Methods'}
            </h4>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              <span style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '10px', 
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}>MADA</span>
              <span style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '10px', 
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}>Visa</span>
              <span style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '10px', 
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}>Master Card</span>
              <span style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '10px', 
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}>PayPal</span>
              <span style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '10px', 
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}>Apple Pay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - ذيل الصفحة */}
      <footer style={{ 
        backgroundColor: '#0a0a0a', 
        borderTop: '2px solid rgba(212, 175, 55, 0.3)',
        color: '#D4AF37',
        padding: '3rem 2rem 1rem 2rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* الجزء الأول - الشعار والمعلومات الرئيسية */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: language === 'ar' ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr', 
            gap: '2rem', 
            marginBottom: '2rem',
            alignItems: 'start',
            direction: language === 'ar' ? 'rtl' : 'ltr'
          }}>
            
            {/* الشعار والاسم */}
            <div style={{ 
              gridColumn: '1', 
              textAlign: 'center'
            }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_finclick-dev/artifacts/x7mmiygq_IMG_5724.jpg"
                alt="FinClick.AI Logo"
                style={{
                  width: '150px',
                  height: '150px',
                  marginBottom: '1rem',
                  display: 'block',
                  margin: '0 auto 1rem auto'
                }}
              />
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1rem', 
                fontWeight: '500',
                color: '#D4AF37',
                fontFamily: 'Playfair Display, serif',
                textAlign: 'center',
                margin: 0
              }}>
                {language === 'ar' ? 'نظام التحليل المالي الذكي والثوري' : 'Revolutionary Intelligent Financial Analysis System'}
              </p>
            </div>

            {/* الشركة */}
            <div style={{ gridColumn: '2' }}>
              <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'الشركة' : 'Company'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/about" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'الرؤية والرسالة والأهداف' : 'Vision, Mission & Goals'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/events" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#F4E24A'}
                    onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                    {language === 'ar' ? 'الفعاليات' : 'Events'}
                  </Link>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/blog" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#F4E24A'}
                    onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                    {language === 'ar' ? 'المدونة والأخبار' : 'Blog & News'}
                  </Link>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/media" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#F4E24A'}
                    onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                    {language === 'ar' ? 'الإعلام' : 'Media'}
                  </Link>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/jobs" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#F4E24A'}
                    onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                    {language === 'ar' ? 'الوظائف' : 'Jobs'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* النظام */}
            <div style={{ gridColumn: '3' }}>
              <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'النظام' : 'System'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="#features" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'مميزات النظام' : 'System Features'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="#analysis-types" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'أنواع التحليل' : 'Analysis Types'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="#pricing" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'الاشتراكات والأسعار' : 'Subscriptions & Pricing'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/manual" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'كتيب النظام' : 'System Manual'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/manual" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                  </a>
                </li>
              </ul>
            </div>

            {/* السياسات القانونية */}
            <div style={{ gridColumn: '4' }}>
              <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'السياسات القانونية' : 'Legal Policies'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/privacy" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/terms" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/security" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'سياسة الأمان' : 'Security Policy'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/compliance" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'سياسة الامتثال' : 'Compliance Policy'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/ip-policy" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'حقوق الملكية الفكرية' : 'Intellectual Property'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/payment-policy" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'سياسة الدفع والاشتراك' : 'Payment & Subscription'}
                  </a>
                </li>
                <li style={{ marginBottom: '0.3rem' }}>
                  <a href="/other-policies" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'السياسات الأخرى' : 'Other Policies'}
                  </a>
                </li>
              </ul>
            </div>

            {/* التواصل والدعم */}
            <div style={{ gridColumn: '5' }}>
              <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                {language === 'ar' ? 'التواصل والدعم' : 'Contact & Support'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                  <strong>{language === 'ar' ? 'المكتب:' : 'Office:'}</strong><br />
                  <span style={{ marginTop: '0.3rem', display: 'block' }}>
                    {language === 'ar' ? 'المملكة العربية السعودية، جدة' : 'Kingdom of Saudi Arabia, Jeddah'}
                  </span>
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                  <strong>{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong><br />
                  <span style={{ marginTop: '0.3rem', display: 'block' }}>finclick.ai@gmail.com</span>
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                  <strong>{language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong><br />
                  <span style={{ marginTop: '0.3rem', display: 'block' }}>00966544827213</span>
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                  <strong>{language === 'ar' ? 'واتس اب:' : 'WhatsApp:'}</strong><br />
                  <span style={{ marginTop: '0.3rem', display: 'block' }}>00966544827213</span>
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                  <strong>{language === 'ar' ? 'تيليجرام:' : 'Telegram:'}</strong><br />
                  <span style={{ marginTop: '0.3rem', display: 'block' }}>00966544827213</span>
                </li>
              </ul>
            </div>
          </div>





          {/* آخر سطر - حقوق الطبع */}
          <div style={{ 
            borderTop: '1px solid rgba(212, 175, 55, 0.2)', 
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.9rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div className={language === 'ar' ? 'arabic-text' : ''}>
              FinClick.AI 2025 {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'صنع بـ' : 'Made with'} 
              </span>
              <span style={{ color: '#ff6b6b', fontSize: '1rem' }}>❤️</span>
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'في المملكة العربية السعودية' : 'in Saudi Arabia'}
              </span>
              <span style={{ fontSize: '1rem' }}>🇸🇦</span>
            </div>
          </div>
        </div>

        {/* أزرار التنقل */}
        {/* زر العودة للأعلى */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '2rem',
            backgroundColor: '#D4AF37',
            color: '#000',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 16px rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
          }}
          title={language === 'ar' ? 'العودة للأعلى' : 'Back to Top'}
        >
          ↑
        </button>

        {/* زر الذهاب للأسفل */}
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#D4AF37',
            color: '#000',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 16px rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
          }}
          title={language === 'ar' ? 'الذهاب للأسفل' : 'Go to Bottom'}
        >
          ↓
        </button>
      </footer>
    </div>
  );
};

export default HomePage;