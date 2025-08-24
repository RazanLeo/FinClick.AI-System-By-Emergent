{/* Analysis Types Section */}
      <section id="analysis-types" className="analysis-types" style={{ 
        backgroundColor: '#000000', 
        padding: '4rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '3rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'أنواع التحليل المالي' : 'Types of Financial Analysis'}
          </h2>
          <p className={`section-subtitle ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: '1.3rem', 
            marginBottom: '3rem',
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
          </div>
        </div>
      </section>

      {/* Free Tools Section - أهم قسم لجذب الزوار */}
      <section className="free-tools-section" style={{ 
        backgroundColor: '#111111', 
        padding: '5rem 2rem',
        color: '#D4AF37'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={`section-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
          }}>
            {language === 'ar' ? 'خدمات مجانية لجذب الزوار' : 'Free Services to Attract Visitors'}
          </h2>
          <p className={`section-subtitle ${language === 'ar' ? 'arabic-text' : ''}`} style={{ 
            textAlign: 'center', 
            fontSize: '1.3rem', 
            marginBottom: '4rem',
            opacity: 0.9
          }}>
            {language === 'ar'
              ? 'أدوات مجانية متقدمة تساعدك في اتخاذ القرارات المالية الذكية'
              : 'Advanced free tools to help you make smart financial decisions'
            }
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            marginTop: '3rem'
          }}>
            {/* الأخبار المالية والاقتصادية */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📰</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'الأخبار المالية والاقتصادية الحية' : 'Live Financial & Economic News'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'أحدث الأخبار المالية والاقتصادية والسوقية وقطاعات الشركات الحية والمباشرة - مؤشرات البنوك'
                  : 'Latest financial, economic, market news and live direct company sector indicators - Banking indices'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'شاهد الأخبار الحية' : 'View Live News'}
              </button>
            </div>

            {/* التقويم الاقتصادي */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📅</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'التقويم الاقتصادي' : 'Economic Calendar'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'تابع أهم الأحداث والبيانات الاقتصادية المؤثرة على الأسواق المالية العالمية'
                  : 'Follow the most important economic events and data affecting global financial markets'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'شاهد التقويم' : 'View Calendar'}
              </button>
            </div>

            {/* حاسبة السعر العادل للسهم */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📊</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'حاسبة السعر العادل للسهم' : 'Fair Stock Price Calculator'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'احسب السعر العادل لأي سهم بطريقتين: إدخال اسم الشركة فقط أو إدخال المتغيرات والأرقام المطلوبة'
                  : 'Calculate fair price of any stock in two ways: enter company name only or enter required variables and numbers'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'احسب السعر العادل' : 'Calculate Fair Price'}
              </button>
            </div>

            {/* حاسبة العائد على الاستثمار */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💰</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'احسب العائد على الاستثمار وربحية السهم ومعدل النمو لاستثماراتك'
                  : 'Calculate return on investment, earnings per share, and growth rate for your investments'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'احسب العائد' : 'Calculate Return'}
              </button>
            </div>

            {/* حاسبة نسبة السعر للأرباح */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📈</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'حاسبة نسبة السعر للأرباح' : 'P/E Ratio Calculator'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'احسب نسبة السعر للأرباح لتقييم جاذبية السهم للاستثمار ومقارنته بالسوق'
                  : 'Calculate price-to-earnings ratio to evaluate stock investment attractiveness and market comparison'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'احسب النسبة' : 'Calculate Ratio'}
              </button>
            </div>

            {/* حاسبة التضخم */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💹</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'حاسبة التضخم' : 'Inflation Calculator'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'احسب تأثير التضخم على استثماراتك والقوة الشرائية عبر فترات زمنية مختلفة'
                  : 'Calculate inflation impact on investments and purchasing power across different time periods'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'احسب التضخم' : 'Calculate Inflation'}
              </button>
            </div>

            {/* مؤشر مزاج السوق */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'مؤشر مزاج السوق التفاعلي' : 'Interactive Market Sentiment Index'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'تابع مزاج المستثمرين والاتجاه العام للسوق في الوقت الفعلي مع مؤشرات تفاعلية'
                  : 'Follow investor sentiment and overall market direction in real-time with interactive indicators'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'شاهد المؤشر' : 'View Index'}
              </button>
            </div>

            {/* بوت GPT المالي */}
            <div className="tool-card" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="tool-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🤖</div>
              <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.5rem', 
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {language === 'ar' ? 'بوت GPT المالي المجاني' : 'Free Financial GPT Bot'}
              </h3>
              <p className={language === 'ar' ? 'arabic-text' : ''} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                {language === 'ar'
                  ? 'اسأل أي سؤال مالي أو عام واحصل على إجابة فورية من الذكاء الاصطناعي المتخصص'
                  : 'Ask any financial or general question and get instant answers from specialized artificial intelligence'
                }
              </p>
              <button className="btn-primary" style={{ 
                backgroundColor: '#D4AF37',
                color: '#000000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                {language === 'ar' ? 'اسأل الآن مجاناً' : 'Ask Now for Free'}
              </button>
            </div>
          </div>
        </div>
      </section>