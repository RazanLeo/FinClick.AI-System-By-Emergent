import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AnalysisPage = () => {
  const { user, language } = useContext(AuthContext);
  const { toast } = useToast();

  // التحقق من تسجيل الدخول
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center p-8 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {language === 'ar' ? 'تسجيل الدخول مطلوب' : 'Login Required'}
          </h2>
          <p className="text-gray-300 mb-6">
            {language === 'ar' 
              ? 'يجب تسجيل الدخول للوصول إلى صفحة التحليل المالي'
              : 'Please login to access the financial analysis page'
            }
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary px-6 py-3"
          >
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Homepage'}
          </button>
        </div>
      </div>
    );
  }
  const [formData, setFormData] = useState({
    company_name: '',
    language: language,
    sector: '',
    activity: '',
    legal_entity: '',
    comparison_level: '',
    analysis_years: 1,
    analysis_types: ['comprehensive']
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const sectors = [
    // قطاعات الطاقة
    { value: 'oil_gas', label: language === 'ar' ? 'النفط والغاز' : 'Oil & Gas' },
    { value: 'nuclear_energy', label: language === 'ar' ? 'الطاقة النووية' : 'Nuclear Energy' },
    { value: 'hydrogen_energy', label: language === 'ar' ? 'الطاقة الهيدروجينية' : 'Hydrogen Energy' },
    { value: 'renewable_energy', label: language === 'ar' ? 'الطاقة المتجددة' : 'Renewable Energy' },
    
    // قطاعات المواد الأساسية
    { value: 'chemicals', label: language === 'ar' ? 'الكيماويات' : 'Chemicals' },
    { value: 'fertilizers', label: language === 'ar' ? 'الأسمدة' : 'Fertilizers' },
    { value: 'timber', label: language === 'ar' ? 'الأخشاب' : 'Timber' },
    { value: 'plastics_composites', label: language === 'ar' ? 'البلاستيك والمواد المركبة' : 'Plastics & Composites' },
    { value: 'mining_metals', label: language === 'ar' ? 'التعدين والمعادن' : 'Mining & Metals' },
    
    // قطاعات الصناعة
    { value: 'manufacturing', label: language === 'ar' ? 'الصناعات التحويلية' : 'Manufacturing' },
    { value: 'machinery_equipment', label: language === 'ar' ? 'الآلات والمعدات' : 'Machinery & Equipment' },
    { value: 'aerospace_defense', label: language === 'ar' ? 'الطيران والدفاع' : 'Aerospace & Defense' },
    { value: 'maritime_ports', label: language === 'ar' ? 'القطاع البحري والموانئ' : 'Maritime & Ports' },
    { value: 'military_industries', label: language === 'ar' ? 'الصناعات العسكرية' : 'Military Industries' },
    { value: 'heavy_construction', label: language === 'ar' ? 'البناء الثقيل' : 'Heavy Construction' },
    { value: 'industrial_electronics', label: language === 'ar' ? 'الإلكترونيات الصناعية' : 'Industrial Electronics' },
    
    // قطاعات السلع الاستهلاكية
    { value: 'consumer_goods', label: language === 'ar' ? 'السلع الاستهلاكية' : 'Consumer Goods' },
    { value: 'fashion_beauty', label: language === 'ar' ? 'الموضة والتجميل' : 'Fashion & Beauty' },
    { value: 'consumer_staples', label: language === 'ar' ? 'السلع الاستهلاكية الأساسية' : 'Consumer Staples' },
    { value: 'food_nutrition', label: language === 'ar' ? 'التموين والتغذية' : 'Food & Nutrition' },
    
    // قطاعات الرعاية الصحية
    { value: 'hospitals_clinics', label: language === 'ar' ? 'المستشفيات والعيادات' : 'Hospitals & Clinics' },
    { value: 'pharmaceuticals', label: language === 'ar' ? 'الأدوية' : 'Pharmaceuticals' },
    { value: 'medical_devices', label: language === 'ar' ? 'الأجهزة الطبية' : 'Medical Devices' },
    { value: 'health_insurance', label: language === 'ar' ? 'التأمين الصحي' : 'Health Insurance' },
    { value: 'biotechnology', label: language === 'ar' ? 'التكنولوجيا الحيوية' : 'Biotechnology' },
    
    // قطاعات المالية والبنوك
    { value: 'banking', label: language === 'ar' ? 'البنوك' : 'Banking' },
    { value: 'financing', label: language === 'ar' ? 'التمويل' : 'Financing' },
    { value: 'investment_funds', label: language === 'ar' ? 'الصناديق الاستثمارية' : 'Investment Funds' },
    { value: 'financial_institutions', label: language === 'ar' ? 'المؤسسات المالية' : 'Financial Institutions' },
    { value: 'fintech', label: language === 'ar' ? 'التكنولوجيا المالية' : 'FinTech' },
    { value: 'insurance', label: language === 'ar' ? 'التأمين' : 'Insurance' },
    
    // قطاعات التكنولوجيا
    { value: 'information_technology', label: language === 'ar' ? 'تكنولوجيا المعلومات' : 'Information Technology' },
    { value: 'artificial_intelligence', label: language === 'ar' ? 'الذكاء الاصطناعي والروبوتات' : 'AI & Robotics' },
    { value: 'cybersecurity', label: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity' },
    { value: 'emerging_digital_economy', label: language === 'ar' ? 'الاقتصاد الرقمي التقني الناشئ' : 'Emerging Digital Economy' },
    { value: 'blockchain', label: language === 'ar' ? 'البلوك تشين والخدمات الرقمية' : 'Blockchain & Digital Services' },
    { value: 'gaming', label: language === 'ar' ? 'الألعاب الإلكترونية' : 'Gaming' },
    
    // قطاعات الاتصالات
    { value: 'telecommunications', label: language === 'ar' ? 'الاتصالات' : 'Telecommunications' },
    
    // قطاعات الخدمات العامة
    { value: 'utilities', label: language === 'ar' ? 'الخدمات العامة' : 'Utilities' },
    { value: 'waste_management', label: language === 'ar' ? 'إدارة النفايات وإعادة التدوير' : 'Waste Management & Recycling' },
    { value: 'environmental_industry', label: language === 'ar' ? 'الصناعة البيئية' : 'Environmental Industry' },
    
    // قطاعات العقارات والبناء
    { value: 'real_estate', label: language === 'ar' ? 'العقارات' : 'Real Estate' },
    { value: 'construction', label: language === 'ar' ? 'التشييد والبناء' : 'Construction' },
    
    // قطاعات النقل واللوجستيات
    { value: 'logistics_transport', label: language === 'ar' ? 'الخدمات اللوجستية والنقل' : 'Logistics & Transport' },
    { value: 'railways', label: language === 'ar' ? 'السكك الحديدية' : 'Railways' },
    
    // قطاعات الزراعة والثروة السمكية
    { value: 'agriculture_fishing', label: language === 'ar' ? 'الزراعة وصيد الأسماك' : 'Agriculture & Fishing' },
    
    // قطاعات التعليم والتدريب
    { value: 'education_training', label: language === 'ar' ? 'التعليم والتدريب' : 'Education & Training' },
    
    // قطاعات الترفيه والإعلام
    { value: 'entertainment_media', label: language === 'ar' ? 'الترفيه والإعلام' : 'Entertainment & Media' },
    { value: 'journalism_media', label: language === 'ar' ? 'الصحافة والإعلام' : 'Journalism & Media' },
    { value: 'creative_economy', label: language === 'ar' ? 'الاقتصاد الإبداعي' : 'Creative Economy' },
    
    // قطاعات الخدمات المهنية
    { value: 'legal_services', label: language === 'ar' ? 'الخدمات القانونية' : 'Legal Services' },
    { value: 'culture_law', label: language === 'ar' ? 'الثقافة والقانون' : 'Culture & Law' },
    { value: 'research_scientific', label: language === 'ar' ? 'الأبحاث والخدمات العلمية' : 'Research & Scientific Services' },
    
    // قطاعات المنظمات غير الربحية
    { value: 'non_profit', label: language === 'ar' ? 'المنظمات غير الربحية والقطاع الثالث' : 'Non-Profit & Third Sector' },
    { value: 'religious_charity', label: language === 'ar' ? 'الخدمات الدينية والخيرية' : 'Religious & Charity Services' },
    
    // قطاعات التجارة والخدمات
    { value: 'ecommerce', label: language === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce' },
    { value: 'tourism_hospitality', label: language === 'ar' ? 'السياحة والضيافة' : 'Tourism & Hospitality' },
    { value: 'marketing_advertising', label: language === 'ar' ? 'التسويق والإعلان' : 'Marketing & Advertising' },
    { value: 'home_community_services', label: language === 'ar' ? 'الخدمات المنزلية والمجتمعية' : 'Home & Community Services' },
    { value: 'human_resources', label: language === 'ar' ? 'الموارد البشرية' : 'Human Resources' },
    
    // قطاعات الحكومة والسياسة
    { value: 'government_political', label: language === 'ar' ? 'القطاع السياسي والحكومي' : 'Government & Political Sector' },
    
    // قطاعات أخرى
    { value: 'paper_printing', label: language === 'ar' ? 'صناعة الورق والطباعة' : 'Paper & Printing Industry' }
  ];

  const comparisonLevels = [
    { value: 'saudi', label: language === 'ar' ? 'المستوى المحلي (السعودية)' : 'Local Level (Saudi Arabia)' },
    { value: 'gcc', label: language === 'ar' ? 'دول الخليج العربي' : 'GCC Countries' },
    { value: 'arab', label: language === 'ar' ? 'الدول العربية' : 'Arab Countries' },
    { value: 'asia', label: language === 'ar' ? 'آسيا' : 'Asia' },
    { value: 'africa', label: language === 'ar' ? 'أفريقيا' : 'Africa' },
    { value: 'europe', label: language === 'ar' ? 'أوروبا' : 'Europe' },
    { value: 'north_america', label: language === 'ar' ? 'أمريكا الشمالية' : 'North America' },
    { value: 'south_america', label: language === 'ar' ? 'أمريكا الجنوبية' : 'South America' },
    { value: 'oceania', label: language === 'ar' ? 'أستراليا' : 'Oceania' },
    { value: 'global', label: language === 'ar' ? 'عالمي' : 'Global' }
  ];

  const legalEntities = [
    { value: 'sole_proprietorship', label: language === 'ar' ? 'مؤسسة فردية' : 'Sole Proprietorship' },
    { value: 'single_person_company', label: language === 'ar' ? 'شركة الشخص الواحد' : 'Single Person Company' },
    { value: 'partnership', label: language === 'ar' ? 'شركة تضامن' : 'General Partnership' },
    { value: 'limited_partnership', label: language === 'ar' ? 'شركة توصية بسيطة' : 'Limited Partnership' },
    { value: 'joint_stock_company', label: language === 'ar' ? 'شركة مساهمة' : 'Joint Stock Company' },
    { value: 'simplified_joint_stock', label: language === 'ar' ? 'شركة مساهمة مبسطة' : 'Simplified Joint Stock Company' },
    { value: 'limited_liability', label: language === 'ar' ? 'شركة ذات مسؤولية محدودة' : 'Limited Liability Company' },
    { value: 'public_company', label: language === 'ar' ? 'مساهمة عامة' : 'Public Company' },
    { value: 'cooperative', label: language === 'ar' ? 'جمعية تعاونية' : 'Cooperative Society' },
    { value: 'foundation', label: language === 'ar' ? 'مؤسسة' : 'Foundation' }
  ];

  const analysisTypes = [
    { value: 'comprehensive', label: language === 'ar' ? 'تحليل شامل (116+ نوع)' : 'Comprehensive Analysis (116+ types)' },
    { value: 'basic', label: language === 'ar' ? 'تحليل كلاسيكي أساسي (13 نوع + 29 نسبة)' : 'Basic Classical Analysis (13 types + 29 ratios)' },
    { value: 'intermediate', label: language === 'ar' ? 'تحليل مالي متوسط (23 نوع)' : 'Intermediate Analysis (23 types)' },
    { value: 'advanced', label: language === 'ar' ? 'تحليل مالي متقدم (28 نوع)' : 'Advanced Analysis (28 types)' },
    { value: 'complex', label: language === 'ar' ? 'تحليل معقد ومتطور (25 نوع)' : 'Complex & Sophisticated Analysis (25 types)' },
    { value: 'ai_powered', label: language === 'ar' ? 'تحليل بالذكاء الاصطناعي (27 نوع)' : 'AI-Powered Analysis (27 types)' },
    { value: 'vertical', label: language === 'ar' ? 'التحليل الرأسي' : 'Vertical Analysis' },
    { value: 'horizontal', label: language === 'ar' ? 'التحليل الأفقي' : 'Horizontal Analysis' },
    { value: 'ratios', label: language === 'ar' ? 'تحليل النسب المالية (29 نسبة)' : 'Financial Ratios Analysis (29 ratios)' },
    { value: 'cash_flow', label: language === 'ar' ? 'تحليل التدفقات النقدية' : 'Cash Flow Analysis' },
    { value: 'dupont', label: language === 'ar' ? 'تحليل دوبونت' : 'DuPont Analysis' },
    { value: 'dcf', label: language === 'ar' ? 'التدفقات النقدية المخصومة' : 'Discounted Cash Flow (DCF)' },
    { value: 'eva', label: language === 'ar' ? 'القيمة الاقتصادية المضافة' : 'Economic Value Added (EVA)' },
    { value: 'monte_carlo', label: language === 'ar' ? 'تحليل مونت كارلو' : 'Monte Carlo Analysis' },
    { value: 'ai_predictive', label: language === 'ar' ? 'التعلم الآلي والتحليل التنبؤي' : 'Machine Learning & Predictive Analysis' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 10) {
      toast({
        title: language === 'ar' ? 'تحذير' : 'Warning',
        description: language === 'ar' ? 'يمكن رفع 10 ملفات كحد أقصى' : 'Maximum 10 files can be uploaded',
        variant: 'destructive'
      });
      return;
    }
    setFiles(selectedFiles);
  };

  const handleAnalysisTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        analysis_types: [...formData.analysis_types, value]
      });
    } else {
      setFormData({
        ...formData,
        analysis_types: formData.analysis_types.filter(type => type !== value)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.analysis_types.length === 0) {
      alert(language === 'ar' ? 'يرجى اختيار نوع التحليل على الأقل' : 'Please select at least one analysis type');
      return;
    }
    
    setLoading(true);
    setAnalysisResults(null);
    
    try {
      const token = localStorage.getItem('token');
      const backendUrl = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL || 'https://finclick-ai-3.preview.emergentagent.com';
      
      // استخدام التحليل العادي دائماً (تجاهل الملفات مؤقتاً)
      console.log('Starting analysis...');
      
      const response = await fetch(`${backendUrl}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Analysis error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Analysis response received:', data);
      
      // تحقق من بنية البيانات وأصلحها
      let processedResults;
      if (data.results) {
        // البيانات جاءت في صيغة {status, results, ...}
        processedResults = data.results;
        processedResults.company_name = data.company_name;
        processedResults.analysis_date = data.analysis_date;
      } else {
        // البيانات جاءت مباشرة
        processedResults = data;
      }
      
      setAnalysisResults(processedResults);
      
      // حفظ النتائج في localStorage للاستخدام المستقبلي
      localStorage.setItem('lastAnalysisResults', JSON.stringify(data));
      
    } catch (error) {
      console.error('Analysis error details:', error);
      console.error('Error stack:', error.stack);
      
      // تسجيل تفاصيل الخطأ للتشخيص
      console.log('Form data sent:', formData);
      console.log('Token used:', localStorage.getItem('token') ? 'Token exists' : 'No token');
      
      // رسالة خطأ أكثر تفصيلاً
      let errorMessage = language === 'ar' ? 'حدث خطأ في التحليل.' : 'An error occurred during analysis.';
      
      if (error.message.includes('401') || error.message.includes('403')) {
        errorMessage = language === 'ar' ? 'خطأ في تسجيل الدخول. يرجى تسجيل الدخول مرة أخرى.' : 'Authentication error. Please login again.';
        // محاولة إعادة تسجيل الدخول
        localStorage.removeItem('token');
        window.location.href = '/';
      } else if (error.message.includes('422')) {
        errorMessage = language === 'ar' ? 'بيانات غير صحيحة. تأكد من ملء جميع الحقول المطلوبة.' : 'Invalid data. Please fill all required fields.';
      } else if (error.message.includes('Upload failed')) {
        errorMessage = language === 'ar' ? 'فشل في رفع الملفات. تأكد من حجم ونوع الملفات.' : 'File upload failed. Check file size and type.';
      } else if (error.message.includes('500')) {
        errorMessage = language === 'ar' ? 'خطأ في الخادم. سيتم المحاولة مرة أخرى...' : 'Server error. Retrying...';
        
        // محاولة إعادة التحليل مرة واحدة
        setTimeout(() => {
          console.log('Retrying analysis...');
          handleSubmit(e);
        }, 2000);
        return;
      }
      
      alert(errorMessage + ' ' + (language === 'ar' ? 'يرجى المحاولة مرة أخرى.' : 'Please try again.') + '\n\nتفاصيل الخطأ: ' + error.message);
      
    } finally {
      setLoading(false);
    }
  };

  const handleReportDownload = async (reportType) => {
    if (!analysisResults) {
      alert(language === 'ar' ? 'يرجى إجراء التحليل أولاً' : 'Please perform analysis first');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const backendUrl = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL || 'https://finclick-ai-3.preview.emergentagent.com';
      
      // تحديد نوع التقرير والرابط المناسب
      const reportEndpoints = {
        'pdf': '/api/generate-pdf-report',
        'excel': '/api/generate-excel-report', 
        'word': '/api/generate-word-report',
        'powerpoint': '/api/generate-powerpoint-report'
      };

      const fileExtensions = {
        'pdf': 'pdf',
        'excel': 'xlsx',
        'word': 'docx', 
        'powerpoint': 'pptx'
      };

      const endpoint = reportEndpoints[reportType];
      const extension = fileExtensions[reportType];

      if (!endpoint) {
        alert(language === 'ar' ? 'نوع التقرير غير مدعوم' : 'Report type not supported');
        return;
      }

      // عرض رسالة التحميل
      alert(language === 'ar' ? 'جاري إنشاء التقرير، يرجى الانتظار...' : 'Generating report, please wait...');

      const response = await fetch(`${backendUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // تحويل الاستجابة إلى blob للتحميل
      const blob = await response.blob();
      
      // إنشاء رابط التحميل
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // تحديد اسم الملف
      const companyName = formData.company_name.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_');
      const timestamp = new Date().toISOString().slice(0, 10);
      link.download = `FinClick_Analysis_${companyName}_${timestamp}.${extension}`;
      
      // تحميل الملف
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // تنظيف الرابط
      window.URL.revokeObjectURL(url);
      
      // رسالة نجاح
      alert(language === 'ar' ? 'تم تحميل التقرير بنجاح!' : 'Report downloaded successfully!');

    } catch (error) {
      console.error('Report download error:', error);
      alert(language === 'ar' ? 'حدث خطأ في تحميل التقرير. يرجى المحاولة مرة أخرى.' : 'An error occurred downloading the report. Please try again.');
    }
  };

  // Generic analysis renderer for all analysis types
  const renderAnalysisType = (analysisData, analysisName, analysisTitle) => {
    if (!analysisData) return null;

    return (
      <div key={analysisName} style={{ marginBottom: '3rem', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '15px', padding: '2rem' }}>
        <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '2rem' }}>
          📊 {analysisTitle}
        </h3>
        
        {/* 11-Point Template Renderer */}
        {renderElevenPointTemplate(analysisData, analysisName)}
      </div>
    );
  };

  const renderElevenPointTemplate = (analysisData, analysisName) => {
    return (
      <div>
        {/* 1. المقدمة */}
        {analysisData.introduction && (
          <div style={{ marginBottom: '2rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '10px' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '1️⃣ المقدمة والتعريف' : '1️⃣ Introduction & Definition'}
            </h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <strong>{language === 'ar' ? 'تعريف التحليل:' : 'Analysis Definition:'}</strong>
                <p>{analysisData.introduction?.definition?.[language] || (language === 'ar' ? 'تحليل مالي متقدم' : 'Advanced financial analysis')}</p>
              </div>
              <div>
                <strong>{language === 'ar' ? 'ماذا يقيس:' : 'What it measures:'}</strong>
                <p>{analysisData.introduction?.what_it_measures?.[language] || (language === 'ar' ? 'الجوانب المالية الحرجة' : 'Critical financial aspects')}</p>
              </div>
              <div>
                <strong>{language === 'ar' ? 'الفائدة:' : 'Benefits:'}</strong>
                <p>{analysisData.introduction?.meaning_and_benefit?.[language] || (language === 'ar' ? 'رؤى عميقة للقرارات المالية' : 'Deep insights for financial decisions')}</p>
              </div>
              <div>
                <strong>{language === 'ar' ? 'طريقة الحساب:' : 'Calculation method:'}</strong>
                <p style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.5rem', borderRadius: '5px', fontFamily: 'monospace' }}>
                  {analysisData.introduction?.calculation_method?.[language] || (language === 'ar' ? 'أحدث المعادلات والنماذج المالية' : 'Latest financial equations and models')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. جداول البيانات */}
        {analysisData.data_tables && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '2️⃣ جداول البيانات والحسابات' : '2️⃣ Data Tables & Calculations'}
            </h4>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {Object.entries(analysisData.data_tables.summary_table || {}).map(([key, value]) => (
                  <div key={key} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>
                      {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>
                      {typeof value === 'number' ? value.toLocaleString() : value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. الرسوم البيانية */}
        {analysisData.charts_data && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '3️⃣ الرسوم البيانية والمخططات' : '3️⃣ Charts & Graphs'}
            </h4>
            <div style={{ background: 'rgba(212, 175, 55, 0.05)', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊📈📉</p>
              <p>{language === 'ar' ? 'الرسوم البيانية التفاعلية متاحة في التقرير النهائي' : 'Interactive charts available in final report'}</p>
            </div>
          </div>
        )}

        {/* 4. التحليل التفصيلي */}
        {analysisData.detailed_analysis && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '4️⃣ التحليل التفصيلي والتفسير' : '4️⃣ Detailed Analysis & Interpretation'}
            </h4>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px', lineHeight: '1.8' }}>
              <p className={language === 'ar' ? 'arabic-text' : ''}>
                {analysisData.detailed_analysis?.interpretation?.[language] || 
                  (language === 'ar' ? 'التحليل يظهر مؤشرات إيجابية للأداء المالي' : 'Analysis shows positive financial performance indicators')
                }
              </p>
              {analysisData.detailed_analysis?.key_findings && (
                <div style={{ marginTop: '1rem' }}>
                  <strong>{language === 'ar' ? 'النتائج الرئيسية:' : 'Key Findings:'}</strong>
                  <ul style={{ marginTop: '0.5rem' }}>
                    {(analysisData.detailed_analysis.key_findings || []).map((finding, idx) => (
                      <li key={idx} style={{ margin: '0.25rem 0' }}>✅ {finding}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. المقارنة المعيارية */}
        {analysisData.benchmark_comparison && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '5️⃣ المقارنة المعيارية' : '5️⃣ Benchmark Comparison'}
            </h4>
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {Object.entries(analysisData.benchmark_comparison.industry_averages || {}).map(([key, value]) => (
                  <div key={key} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>
                      {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22C55E' }}>
                      {typeof value === 'number' ? value.toFixed(1) : value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. تحديد المخاطر */}
        {analysisData.risks && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--danger-red)', marginBottom: '1rem' }}>
              {language === 'ar' ? '6️⃣ تحديد المخاطر' : '6️⃣ Risk Assessment'}
            </h4>
            <ul style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '10px', listStyle: 'none' }}>
              {(analysisData.risks?.[language] || []).map((risk, idx) => (
                <li key={idx} style={{ margin: '0.5rem 0' }}>⚠️ {risk}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 7. التنبؤات المستقبلية */}
        {analysisData.forecasts && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--info-blue)', marginBottom: '1rem' }}>
              {language === 'ar' ? '7️⃣ التنبؤات المستقبلية' : '7️⃣ Future Forecasts'}
            </h4>
            <ul style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '10px', listStyle: 'none' }}>
              {(analysisData.forecasts?.[language] || []).map((forecast, idx) => (
                <li key={idx} style={{ margin: '0.5rem 0' }}>🔮 {forecast}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 8. تحليل SWOT */}
        {analysisData.swot_analysis && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '8️⃣ تحليل SWOT المفصل' : '8️⃣ Detailed SWOT Analysis'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '10px' }}>
                <h5 style={{ color: '#22C55E', marginBottom: '0.5rem' }}>{language === 'ar' ? '💪 نقاط القوة' : '💪 Strengths'}</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(analysisData.swot_analysis?.strengths?.[language] || []).map((item, idx) => (
                    <li key={idx} style={{ margin: '0.25rem 0' }}>✅ {item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '10px' }}>
                <h5 style={{ color: '#EF4444', marginBottom: '0.5rem' }}>{language === 'ar' ? '⚠️ نقاط الضعف' : '⚠️ Weaknesses'}</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(analysisData.swot_analysis?.weaknesses?.[language] || []).map((item, idx) => (
                    <li key={idx} style={{ margin: '0.25rem 0' }}>❌ {item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '10px' }}>
                <h5 style={{ color: '#3B82F6', marginBottom: '0.5rem' }}>{language === 'ar' ? '🌟 الفرص' : '🌟 Opportunities'}</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(analysisData.swot_analysis?.opportunities?.[language] || []).map((item, idx) => (
                    <li key={idx} style={{ margin: '0.25rem 0' }}>⭐ {item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '10px' }}>
                <h5 style={{ color: '#F59E0B', marginBottom: '0.5rem' }}>{language === 'ar' ? '🚨 التهديدات' : '🚨 Threats'}</h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(analysisData.swot_analysis?.threats?.[language] || []).map((item, idx) => (
                    <li key={idx} style={{ margin: '0.25rem 0' }}>⚡ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 9. التقييم النهائي */}
        {analysisData.final_evaluation && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '9️⃣ التقييم النهائي' : '9️⃣ Final Evaluation'}
            </h4>
            <div style={{ 
              background: `linear-gradient(135deg, ${analysisData.final_evaluation?.color || 'var(--primary-gold)'}20, transparent)`,
              border: `2px solid ${analysisData.final_evaluation?.color || 'var(--primary-gold)'}`,
              padding: '2rem', 
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {analysisData.final_evaluation?.score >= 80 ? '🏆' : 
                 analysisData.final_evaluation?.score >= 60 ? '🥈' : '📊'}
              </div>
              <h5 style={{ 
                fontSize: '1.5rem', 
                color: analysisData.final_evaluation?.color || 'var(--primary-gold)',
                marginBottom: '1rem'
              }}>
                {analysisData.final_evaluation?.grade || (language === 'ar' ? 'جيد' : 'Good')}
              </h5>
              <div style={{ 
                background: 'rgba(0,0,0,0.3)', 
                padding: '1rem', 
                borderRadius: '10px',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                <strong>{language === 'ar' ? 'النقاط:' : 'Score:'}</strong> {analysisData.final_evaluation?.score || 75}/100
                <br />
                {analysisData.final_evaluation?.detailed_text?.[language] || 
                  (language === 'ar' ? 'التحليل يظهر أداءً جيداً للشركة' : 'Analysis shows good company performance')
                }
              </div>
            </div>
          </div>
        )}

        {/* 10. التوصيات الاستراتيجية */}
        {analysisData.strategic_recommendations && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '🔟 التوصيات الاستراتيجية' : '🔟 Strategic Recommendations'}
            </h4>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1.5rem', borderRadius: '10px' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {(analysisData.strategic_recommendations?.[language] || []).map((recommendation, idx) => (
                  <li key={idx} style={{ 
                    margin: '1rem 0', 
                    padding: '0.75rem',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-gold)'
                  }}>
                    <strong>{idx + 1}.</strong> {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 11. إمكانية الطباعة */}
        {analysisData.export_options && (
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '15px' }}>
            <h4 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1.5rem' }}>
              {language === 'ar' ? '1️⃣1️⃣ تحميل التقارير' : '1️⃣1️⃣ Download Reports'}
            </h4>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                📄 {language === 'ar' ? 'تقرير PDF' : 'PDF Report'}
              </button>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                📊 {language === 'ar' ? 'تقرير Excel' : 'Excel Report'}
              </button>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                📽️ {language === 'ar' ? 'عرض PowerPoint' : 'PowerPoint'}
              </button>
              <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                📋 {language === 'ar' ? 'تقرير Word' : 'Word Report'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderAnalysisResults = () => {
    if (!analysisResults) return null;

    return (
      <div className="analysis-results">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            🎉 {language === 'ar' ? 'نتائج التحليل المالي الثوري' : 'Revolutionary Financial Analysis Results'} 🎉
          </h1>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            {language === 'ar' 
              ? `تم إنجاز ${analysisResults.total_analysis_count || 116} نوع من التحليل المالي بنجاح!`
              : `Successfully completed ${analysisResults.total_analysis_count || 116} types of financial analysis!`
            }
          </p>
        </div>

        {/* الملخص التنفيذي الجديد */}
        {analysisResults.executive_summary && (
          <div className="analysis-section" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))', marginBottom: '3rem' }}>
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`} style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
              📊 {language === 'ar' ? 'الملخص التنفيذي الشامل' : 'Comprehensive Executive Summary'}
            </h2>
            
            {/* أولاً: معلومات الشركة */}
            {analysisResults.executive_summary.company_information && (
              <div style={{ marginBottom: '2rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
                  {language === 'ar' ? '📋 معلومات الشركة ونوع التحليل' : '📋 Company Information & Analysis Type'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div><strong>{language === 'ar' ? 'التاريخ:' : 'Date:'}</strong> {analysisResults.executive_summary.company_information.date}</div>
                  <div><strong>{language === 'ar' ? 'اسم الشركة:' : 'Company Name:'}</strong> {analysisResults.executive_summary.company_information.company_name}</div>
                  <div><strong>{language === 'ar' ? 'قطاع الشركة:' : 'Sector:'}</strong> {analysisResults.executive_summary.company_information.company_sector}</div>
                  <div><strong>{language === 'ar' ? 'نشاط الشركة:' : 'Activity:'}</strong> {analysisResults.executive_summary.company_information.company_activity}</div>
                  <div><strong>{language === 'ar' ? 'الكيان القانوني:' : 'Legal Entity:'}</strong> {analysisResults.executive_summary.company_information.legal_entity}</div>
                  <div><strong>{language === 'ar' ? 'عدد سنوات التحليل:' : 'Analysis Years:'}</strong> {analysisResults.executive_summary.company_information.analysis_years}</div>
                  <div><strong>{language === 'ar' ? 'نوع المقارنة:' : 'Comparison Type:'}</strong> {analysisResults.executive_summary.company_information.comparison_type}</div>
                  <div><strong>{language === 'ar' ? 'نوع التحليل:' : 'Analysis Type:'}</strong> {analysisResults.executive_summary.company_information.analysis_type}</div>
                </div>
              </div>
            )}

            {/* ثانياً: ملخص النتائج (جدول كبير منظم) */}
            {analysisResults.executive_summary.results_summary && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
                  {language === 'ar' ? '📈 ملخص النتائج' : '📈 Results Summary'}
                </h3>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>
                        {analysisResults.executive_summary.results_summary.total_analyses}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {language === 'ar' ? 'إجمالي التحليلات' : 'Total Analyses'}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22C55E' }}>
                        {analysisResults.executive_summary.results_summary.analyses_by_level?.basic || 0}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {language === 'ar' ? 'تحليل أساسي' : 'Basic Analysis'}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3B82F6' }}>
                        {analysisResults.executive_summary.results_summary.analyses_by_level?.intermediate || 0}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {language === 'ar' ? 'تحليل متوسط' : 'Intermediate'}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F59E0B' }}>
                        {analysisResults.executive_summary.results_summary.analyses_by_level?.advanced || 0}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {language === 'ar' ? 'تحليل متقدم' : 'Advanced'}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B5CF6' }}>
                        {analysisResults.executive_summary.results_summary.analyses_by_level?.ai_powered || 0}
                      </div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {language === 'ar' ? 'ذكاء اصطناعي' : 'AI-Powered'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* جدول التحليلات المفصل */}
                {analysisResults.executive_summary.results_summary.summary_table && (
                  <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(0,0,0,0.3)', borderRadius: '10px' }}>
                      <thead>
                      <tr style={{ background: 'var(--primary-gold)', color: 'black' }}>
                        <th style={{ padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>{language === 'ar' ? 'الرقم' : 'Number'}</th>
                        <th style={{ padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>{language === 'ar' ? 'اسم التحليل' : 'Analysis Name'}</th>
                        <th style={{ padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>{language === 'ar' ? 'النتيجة' : 'Result'}</th>
                        <th style={{ padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>{language === 'ar' ? 'التفسير' : 'Interpretation'}</th>
                        <th style={{ padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>{language === 'ar' ? 'التقييم' : 'Rating'}</th>
                      </tr>
                      </thead>
                      <tbody>
                      {analysisResults.executive_summary.results_summary.summary_table.slice(0, 20).map((analysis, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '0.5rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--primary-gold)' }}>{analysis.number}</td>
                          <td style={{ padding: '0.5rem', fontSize: '0.9rem' }}>{analysis.name}</td>
                          <td style={{ padding: '0.5rem', fontSize: '0.9rem' }}>{analysis.result}</td>
                          <td style={{ padding: '0.5rem', fontSize: '0.9rem' }}>{analysis.interpretation}</td>
                          <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                            <span style={{ 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '15px', 
                              fontSize: '0.8rem',
                              background: analysis.rating === 'ممتاز' ? '#22C55E' : analysis.rating === 'جيد جداً' ? '#3B82F6' : analysis.rating === 'جيد' ? '#F59E0B' : '#6B7280',
                              color: 'white'
                            }}>
                              {analysis.rating}
                            </span>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ثالثاً: تحليل SWOT الكامل */}
            {analysisResults.executive_summary.comprehensive_swot && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
                  {language === 'ar' ? '🎯 تحليل SWOT الكامل لجميع التحليلات' : '🎯 Comprehensive SWOT Analysis'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  {/* نقاط القوة */}
                  <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '10px', border: '2px solid #22C55E' }}>
                    <h4 style={{ color: '#22C55E', marginBottom: '0.5rem', textAlign: 'center' }}>
                      💪 {language === 'ar' ? `نقاط القوة (${analysisResults.executive_summary.comprehensive_swot.strengths?.count || 0})` : `Strengths (${analysisResults.executive_summary.comprehensive_swot.strengths?.count || 0})`}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {(analysisResults.executive_summary.comprehensive_swot.strengths?.items || []).map((item, idx) => (
                        <li key={idx} style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>✅ {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* الفرص */}
                  <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '10px', border: '2px solid #3B82F6' }}>
                    <h4 style={{ color: '#3B82F6', marginBottom: '0.5rem', textAlign: 'center' }}>
                      🌟 {language === 'ar' ? `الفرص (${analysisResults.executive_summary.comprehensive_swot.opportunities?.count || 0})` : `Opportunities (${analysisResults.executive_summary.comprehensive_swot.opportunities?.count || 0})`}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {(analysisResults.executive_summary.comprehensive_swot.opportunities?.items || []).map((item, idx) => (
                        <li key={idx} style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>⭐ {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* نقاط الضعف */}
                  <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '10px', border: '2px solid #EF4444' }}>
                    <h4 style={{ color: '#EF4444', marginBottom: '0.5rem', textAlign: 'center' }}>
                      ⚠️ {language === 'ar' ? `نقاط الضعف (${analysisResults.executive_summary.comprehensive_swot.weaknesses?.count || 0})` : `Weaknesses (${analysisResults.executive_summary.comprehensive_swot.weaknesses?.count || 0})`}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {(analysisResults.executive_summary.comprehensive_swot.weaknesses?.items || []).map((item, idx) => (
                        <li key={idx} style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>❌ {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* التحديات */}
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '10px', border: '2px solid #F59E0B' }}>
                    <h4 style={{ color: '#F59E0B', marginBottom: '0.5rem', textAlign: 'center' }}>
                      🚨 {language === 'ar' ? `التحديات (${analysisResults.executive_summary.comprehensive_swot.threats?.count || 0})` : `Threats (${analysisResults.executive_summary.comprehensive_swot.threats?.count || 0})`}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {(analysisResults.executive_summary.comprehensive_swot.threats?.items || []).map((item, idx) => (
                        <li key={idx} style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>⚡ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* رابعاً: المخاطر الشاملة */}
            {analysisResults.executive_summary.comprehensive_risks && (
              <div style={{ marginBottom: '2rem', background: 'rgba(239, 68, 68, 0.05)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: '#EF4444', marginBottom: '1rem' }}>
                  ⚠️ {language === 'ar' ? 'استعراض جميع المخاطر بناء على جميع التحليلات' : 'Comprehensive Risk Assessment'}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ background: analysisResults.executive_summary.comprehensive_risks.risk_priority === 'عالية' ? '#EF4444' : analysisResults.executive_summary.comprehensive_risks.risk_priority === 'متوسطة' ? '#F59E0B' : '#22C55E', 
                                 color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'مستوى المخاطر:' : 'Risk Level:'} {analysisResults.executive_summary.comprehensive_risks.risk_priority}
                  </span>
                  <span style={{ marginLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    ({analysisResults.executive_summary.comprehensive_risks.total_risks_identified} {language === 'ar' ? 'خطر محدد' : 'risks identified'})
                  </span>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {(analysisResults.executive_summary.comprehensive_risks.all_risks || []).map((risk, idx) => (
                      <li key={idx} style={{ margin: '0.5rem 0', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '5px', fontSize: '0.9rem' }}>
                        ⚠️ {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* خامساً: التنبؤات الشاملة */}
            {analysisResults.executive_summary.comprehensive_forecasts && (
              <div style={{ marginBottom: '2rem', background: 'rgba(59, 130, 246, 0.05)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: '#3B82F6', marginBottom: '1rem' }}>
                  🔮 {language === 'ar' ? 'استعراض التنبؤات بناء على جميع التحليلات' : 'Comprehensive Forecasts'}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ background: analysisResults.executive_summary.comprehensive_forecasts.overall_outlook === 'إيجابي' ? '#22C55E' : '#F59E0B', 
                                 color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'التوقعات العامة:' : 'Overall Outlook:'} {analysisResults.executive_summary.comprehensive_forecasts.overall_outlook}
                  </span>
                  <span style={{ marginLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    ({analysisResults.executive_summary.comprehensive_forecasts.total_forecasts} {language === 'ar' ? 'توقع' : 'forecasts'})
                  </span>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {(analysisResults.executive_summary.comprehensive_forecasts.all_forecasts || []).map((forecast, idx) => (
                      <li key={idx} style={{ margin: '0.5rem 0', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '5px', fontSize: '0.9rem' }}>
                        🔮 {forecast}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* سادساً: القرارات والتوصيات الاستراتيجية */}
            {analysisResults.executive_summary.strategic_decisions && (
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '2px solid var(--primary-gold)' }}>
                <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
                  🎯 {language === 'ar' ? 'القرارات والتوصيات الاستراتيجية' : 'Strategic Decisions & Recommendations'}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ background: 'var(--primary-gold)', color: 'black', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                    {language === 'ar' ? 'إجمالي التوصيات:' : 'Total Recommendations:'} {analysisResults.executive_summary.strategic_decisions.total_recommendations}
                  </span>
                  <span style={{ marginLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    {language === 'ar' ? 'تعقيد التنفيذ:' : 'Implementation Complexity:'} {analysisResults.executive_summary.strategic_decisions.implementation_complexity}
                  </span>
                </div>

                {/* التوصيات ذات الأولوية */}
                <div>
                  <h4 style={{ color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>
                    {language === 'ar' ? '🔥 التوصيات ذات الأولوية' : '🔥 Priority Recommendations'}
                  </h4>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <ol style={{ padding: '0 1rem' }}>
                      {(analysisResults.executive_summary.strategic_decisions.priority_recommendations || []).map((rec, idx) => (
                        <li key={idx} style={{ margin: '1rem 0', padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '4px solid var(--primary-gold)', fontSize: '0.95rem' }}>
                          {rec}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* All Analysis Levels */}
        {/* Basic Analysis (13 types) */}
        {analysisResults.basic_analysis && (
          <div className="analysis-section">
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`}>
              📈 {language === 'ar' ? 'التحليل المالي الأساسي/الكلاسيكي (13 نوع)' : 'Basic/Classical Financial Analysis (13 types)'}
            </h2>
            {Object.entries(analysisResults.basic_analysis).map(([key, analysisData]) => {
              const analysisTitle = {
                vertical_analysis: language === 'ar' ? 'التحليل الرأسي' : 'Vertical Analysis',
                financial_ratios: language === 'ar' ? 'تحليل النسب المالية (29 نسبة)' : 'Financial Ratios Analysis (29 ratios)',
                working_capital: language === 'ar' ? 'تحليل رأس المال العامل' : 'Working Capital Analysis',
                break_even: language === 'ar' ? 'تحليل نقطة التعادل' : 'Break-even Analysis',
                horizontal_analysis: language === 'ar' ? 'التحليل الأفقي' : 'Horizontal Analysis',
                mixed_analysis: language === 'ar' ? 'التحليل المختلط' : 'Mixed Analysis',
                basic_cash_flow: language === 'ar' ? 'تحليل التدفقات النقدية الأساسي' : 'Basic Cash Flow Analysis',
                simple_comparative: language === 'ar' ? 'التحليل المقارن البسيط' : 'Simple Comparative Analysis',
                simple_trend: language === 'ar' ? 'تحليل الاتجاهات البسيط' : 'Simple Trend Analysis',
                basic_variance: language === 'ar' ? 'تحليل الانحرافات الأساسي' : 'Basic Variance Analysis',
                dividend_analysis: language === 'ar' ? 'تحليل التوزيعات' : 'Dividend Analysis',
                cost_structure: language === 'ar' ? 'تحليل هيكل التكاليف' : 'Cost Structure Analysis',
                cash_cycle: language === 'ar' ? 'تحليل دورة النقد' : 'Cash Cycle Analysis'
              }[key] || key.replace(/_/g, ' ');
              
              return renderAnalysisType(analysisData, key, analysisTitle);
            })}
          </div>
        )}

        {/* Intermediate Analysis (23 types) */}
        {analysisResults.intermediate_analysis && (
          <div className="analysis-section">
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`}>
              ⚡ {language === 'ar' ? 'التحليل المالي المتوسط (23 نوع)' : 'Intermediate Financial Analysis (23 types)'}
            </h2>
            {Object.entries(analysisResults.intermediate_analysis).map(([key, analysisData]) => {
              const analysisTitle = {
                sensitivity_analysis: language === 'ar' ? 'تحليل الحساسية' : 'Sensitivity Analysis',
                benchmarking: language === 'ar' ? 'تحليل المعايير المرجعية' : 'Benchmarking Analysis',
                scenario_analysis: language === 'ar' ? 'تحليل السيناريوهات' : 'Scenario Analysis',
                advanced_variance: language === 'ar' ? 'تحليل التباين المتقدم' : 'Advanced Variance Analysis',
                banking_credit: language === 'ar' ? 'التحليل البنكي/الائتماني' : 'Banking/Credit Analysis'
              }[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return renderAnalysisType(analysisData, key, analysisTitle);
            })}
          </div>
        )}

        {/* Advanced Analysis (28 types) */}
        {analysisResults.advanced_analysis && (
          <div className="analysis-section">
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`}>
              🔥 {language === 'ar' ? 'التحليل المالي المتقدم (28 نوع)' : 'Advanced Financial Analysis (28 types)'}
            </h2>
            {Object.entries(analysisResults.advanced_analysis).map(([key, analysisData]) => {
              const analysisTitle = {
                dcf_analysis: language === 'ar' ? 'تحليل التدفقات النقدية المخصومة' : 'Discounted Cash Flow Analysis',
                eva_analysis: language === 'ar' ? 'تحليل القيمة الاقتصادية المضافة' : 'Economic Value Added Analysis',
                advanced_dupont: language === 'ar' ? 'تحليل دوبونت المتقدم' : 'Advanced DuPont Analysis',
                multiples_valuation: language === 'ar' ? 'تحليل التقييم بالمضاعفات' : 'Multiples Valuation Analysis',
                advanced_risk_analysis: language === 'ar' ? 'تحليل المخاطر المتقدم' : 'Advanced Risk Analysis'
              }[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return renderAnalysisType(analysisData, key, analysisTitle);
            })}
          </div>
        )}

        {/* Complex Analysis (25 types) */}
        {analysisResults.complex_analysis && (
          <div className="analysis-section">
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`}>
              💎 {language === 'ar' ? 'التحليل المالي المعقد والمتطور (25 نوع)' : 'Complex & Sophisticated Financial Analysis (25 types)'}
            </h2>
            {Object.entries(analysisResults.complex_analysis).map(([key, analysisData]) => {
              const analysisTitle = {
                monte_carlo: language === 'ar' ? 'تحليل مونت كارلو' : 'Monte Carlo Analysis',
                real_options: language === 'ar' ? 'تحليل الخيارات الحقيقية' : 'Real Options Analysis',
                var_analysis: language === 'ar' ? 'تحليل القيمة في خطر' : 'Value at Risk Analysis',
                stress_testing: language === 'ar' ? 'اختبار الضغط المالي' : 'Financial Stress Testing',
                dynamic_financial_systems: language === 'ar' ? 'التحليل الديناميكي للنظم المالية' : 'Dynamic Financial Systems Analysis'
              }[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return renderAnalysisType(analysisData, key, analysisTitle);
            })}
          </div>
        )}

        {/* AI-Powered Analysis (27 types) */}
        {analysisResults.ai_powered_analysis && (
          <div className="analysis-section">
            <h2 className={`analysis-title ${language === 'ar' ? 'arabic-text' : ''}`}>
              🤖 {language === 'ar' ? 'التحليل المالي بالذكاء الاصطناعي (27 نوع)' : 'AI-Powered Financial Analysis (27 types)'}
            </h2>
            {Object.entries(analysisResults.ai_powered_analysis).map(([key, analysisData]) => {
              const analysisTitle = {
                ml_earnings_prediction: language === 'ar' ? 'التنبؤ بالأرباح بالتعلم الآلي' : 'Machine Learning Earnings Prediction',
                neural_pattern_analysis: language === 'ar' ? 'تحليل الأنماط بالشبكات العصبية' : 'Neural Network Pattern Analysis',
                ai_predictive_analysis: language === 'ar' ? 'التحليل التنبؤي بالذكاء الاصطناعي' : 'AI Predictive Analysis',
                nlp_financial_reports: language === 'ar' ? 'تحليل التقارير بمعالجة اللغة الطبيعية' : 'NLP Financial Reports Analysis',
                computer_vision_charts: language === 'ar' ? 'تحليل المخططات بالرؤية الحاسوبية' : 'Computer Vision Charts Analysis'
              }[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return renderAnalysisType(analysisData, key, analysisTitle);
            })}
          </div>
        )}

        {/* معلومة عن باقي التحليلات */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))', 
          padding: '3rem', 
          borderRadius: '20px', 
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            🚀 {language === 'ar' ? 'هذا مجرد البداية!' : 'This is just the beginning!'}
          </h2>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            {language === 'ar' 
              ? 'لقد شاهدت للتو عينة من التحليل الأساسي. النظام الكامل يحتوي على 116+ نوع من التحليل المالي الثوري!'
              : 'You just saw a sample of basic analysis. The complete system contains 116+ types of revolutionary financial analysis!'
            }
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <h4>📊 {language === 'ar' ? 'أساسي/كلاسيكي' : 'Basic/Classical'}</h4>
              <p>13 {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <h4>⚡ {language === 'ar' ? 'متوسط' : 'Intermediate'}</h4>
              <p>23 {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <h4>🔥 {language === 'ar' ? 'متقدم' : 'Advanced'}</h4>
              <p>28 {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <h4>💎 {language === 'ar' ? 'معقد ومتطور' : 'Complex & Sophisticated'}</h4>
              <p>25 {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <h4>🤖 {language === 'ar' ? 'ذكاء اصطناعي' : 'AI-Powered'}</h4>
              <p>27 {language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3 className={language === 'ar' ? 'arabic-text' : ''} style={{ marginBottom: '2rem' }}>
            {language === 'ar' ? '📥 تحميل التقارير الاحترافية' : '📥 Download Professional Reports'}
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
              onClick={() => handleReportDownload('excel')}
            >
              📊 {language === 'ar' ? 'تقرير Excel شامل' : 'Comprehensive Excel Report'}
            </button>
            <button 
              className="btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
              onClick={() => handleReportDownload('pdf')}
            >
              📄 {language === 'ar' ? 'تقرير PDF (50+ صفحة)' : 'PDF Report (50+ pages)'}
            </button>
            <button 
              className="btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
              onClick={() => handleReportDownload('powerpoint')}
            >
              🎯 {language === 'ar' ? 'عرض تقديمي PowerPoint' : 'PowerPoint Presentation'}
            </button>
            <button 
              className="btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
              onClick={() => handleReportDownload('word')}
            >
              📝 {language === 'ar' ? 'تقرير Word مفصل' : 'Detailed Word Report'}
            </button>
          </div>
          <p style={{ marginTop: '1rem', opacity: 0.8 }} className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' 
              ? 'جميع التقارير جاهزة للعرض أمام مجلس الإدارة والجهات الطالبة - احترافية وقابلة للتسليم مباشرة'
              : 'All reports ready for board presentations and requesting parties - professional and ready for immediate delivery'
            }
          </p>
          
          {/* معلومات إضافية عن التقارير */}
          <div style={{ 
            marginTop: '2rem', 
            background: 'rgba(212, 175, 55, 0.1)', 
            padding: '1.5rem', 
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '2rem auto 0'
          }}>
            <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              {language === 'ar' ? '📋 محتويات التقارير' : '📋 Report Contents'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.9rem' }}>
              <div>
                <strong>📊 Excel:</strong><br />
                {language === 'ar' ? 'جداول تفاعلية، رسوم بيانية، تحليل SWOT' : 'Interactive tables, charts, SWOT analysis'}
              </div>
              <div>
                <strong>📄 PDF:</strong><br />
                {language === 'ar' ? '50+ صفحة، تصميم احترافي، جاهز للطباعة' : '50+ pages, professional design, print-ready'}
              </div>
              <div>
                <strong>📝 Word:</strong><br />
                {language === 'ar' ? 'قابل للتعديل، جداول منسقة، توصيات مفصلة' : 'Editable, formatted tables, detailed recommendations'}
              </div>
              <div>
                <strong>🎯 PowerPoint:</strong><br />
                {language === 'ar' ? '50+ شريحة، جاهز للعرض، رسوم بيانية' : '50+ slides, presentation-ready, charts'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className={language === 'ar' ? 'arabic-text' : ''}>
          {language === 'ar' ? 'التحليل المالي الثوري' : 'Revolutionary Financial Analysis'}
        </h1>
        <p className={language === 'ar' ? 'arabic-text' : ''}>
          {language === 'ar' 
            ? 'احصل على تحليل مالي شامل في ثوانٍ معدودة'
            : 'Get comprehensive financial analysis in seconds'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Company Information */}
          <div className="form-container">
            <h3 className={language === 'ar' ? 'arabic-text' : ''}>
              {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
            </h3>
            
            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                className="form-input"
                placeholder={language === 'ar' ? 'ادخل اسم الشركة' : 'Enter company name'}
                required
              />
            </div>

            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'القطاع' : 'Sector'}
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">{language === 'ar' ? 'اختر القطاع' : 'Select Sector'}</option>
                {sectors.map(sector => (
                  <option key={sector.value} value={sector.value}>{sector.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'الكيان القانوني' : 'Legal Entity'}
              </label>
              <select
                name="legal_entity"
                value={formData.legal_entity}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">{language === 'ar' ? 'اختر الكيان القانوني' : 'Select Legal Entity'}</option>
                {legalEntities.map(entity => (
                  <option key={entity.value} value={entity.value}>{entity.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Analysis Settings */}
          <div className="form-container">
            <h3 className={language === 'ar' ? 'arabic-text' : ''}>
              {language === 'ar' ? 'إعدادات التحليل' : 'Analysis Settings'}
            </h3>

            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'مستوى المقارنة' : 'Comparison Level'}
              </label>
              <select
                name="comparison_level"
                value={formData.comparison_level}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">{language === 'ar' ? 'اختر مستوى المقارنة' : 'Select Comparison Level'}</option>
                {comparisonLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'عدد سنوات التحليل' : 'Analysis Years'}
              </label>
              <select
                name="analysis_years"
                value={formData.analysis_years}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                {[1,2,3,4,5,6,7,8,9,10].map(year => (
                  <option key={year} value={year}>
                    {year} {language === 'ar' ? (year === 1 ? 'سنة' : 'سنوات') : (year === 1 ? 'year' : 'years')}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className={`form-label ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'نوع التحليل' : 'Analysis Type'}
              </label>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {analysisTypes.map(type => (
                  <label key={type.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      value={type.value}
                      checked={formData.analysis_types.includes(type.value)}
                      onChange={handleAnalysisTypeChange}
                    />
                    <span className={language === 'ar' ? 'arabic-text' : ''}>{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="form-container">
          <h3 className={language === 'ar' ? 'arabic-text' : ''}>
            {language === 'ar' ? 'رفع القوائم المالية' : 'Upload Financial Statements'}
          </h3>
          <p className={language === 'ar' ? 'arabic-text' : ''} style={{ opacity: 0.8, marginBottom: '1rem' }}>
            {language === 'ar' 
              ? 'يمكنك رفع حتى 10 ملفات بصيغ مختلفة (PDF, Excel, Word, صور)'
              : 'You can upload up to 10 files in different formats (PDF, Excel, Word, images)'
            }
          </p>
          
          <div className="form-group">
            <input
              type="file"
              multiple
              accept=".pdf,.xlsx,.xls,.docx,.doc,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="form-input"
              style={{ padding: '1rem', border: '2px dashed rgba(212, 175, 55, 0.3)' }}
            />
            {files.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <p className={language === 'ar' ? 'arabic-text' : ''}>
                  {language === 'ar' ? 'الملفات المحددة:' : 'Selected files:'}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {files.map((file, index) => (
                    <li key={index} style={{ 
                      padding: '0.5rem', 
                      background: 'rgba(212, 175, 55, 0.1)', 
                      margin: '0.25rem 0',
                      borderRadius: '5px',
                      fontSize: '0.9rem'
                    }}>
                      📄 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ 
              padding: '1rem 3rem', 
              fontSize: '1.2rem',
              background: loading ? 'rgba(212, 175, 55, 0.5)' : 'linear-gradient(45deg, var(--primary-gold), var(--dark-gold))'
            }}
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                {language === 'ar' ? 'جارٍ التحليل...' : 'Analyzing...'}
              </div>
            ) : (
              <>
                🚀 {language === 'ar' ? 'ابدأ التحليل الثوري' : 'Start Revolutionary Analysis'}
              </>
            )}
          </button>
        </div>
      </form>

      {/* Analysis Results */}
      {renderAnalysisResults()}
    </div>
  );
};

export default AnalysisPage;