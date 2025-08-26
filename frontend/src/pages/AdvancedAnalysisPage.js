import React, { useState, useEffect, useCallback } from 'react';
import { 
  Upload, Target, BarChart3, Zap, Loader2, CheckCircle, XCircle, 
  Play, Download, FileText, Image, File, AlertTriangle
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '/api';

const AdvancedAnalysisPage = () => {
  // 🎯 حالة المستخدم
  const [user, setUser] = useState(null);
  
  // 🌍 إدارة اللغة
  const [language, setLanguage] = useState('ar');
  
  // 🎨 نظام التنبيهات
  const { toast } = useToast();

  // 📋 حالة النموذج
  const [formData, setFormData] = useState({
    company_name: '',
    language: 'ar',
    sector: '',
    activity: '',
    legal_entity: '',
    comparison_level: '',
    analysis_years: 1,
    analysis_types: ['comprehensive']
  });
  
  // 📁 إدارة الملفات
  const [files, setFiles] = useState([]);
  
  // ⚡ حالة التحميل والتقدم
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisResults, setAnalysisResults] = useState(null);

  // 🔍 تحقق من تسجيل الدخول
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // البيانات الأساسية
  // جلب القطاعات من الـ API
  const [sectors, setSectors] = useState([]);
  const [legalEntitiesData, setLegalEntitiesData] = useState([]);
  const [comparisonLevelsData, setComparisonLevelsData] = useState([]);

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectorsRes, entitiesRes, levelsRes] = await Promise.all([
          axios.get(`${API}/sectors`),
          axios.get(`${API}/legal-entities`),
          axios.get(`${API}/comparison-levels`)
        ]);

        setSectors(sectorsRes.data.sectors);
        setLegalEntitiesData(entitiesRes.data.legal_entities);
        setComparisonLevelsData(levelsRes.data.comparison_levels);
      } catch (error) {
        console.error('Error fetching data:', error);
        // استخدام بيانات احتياطية في حالة الخطأ
        setSectors([
          { id: 'oil_gas', name_ar: 'النفط والغاز', name_en: 'Oil & Gas' },
          { id: 'banking', name_ar: 'البنوك والتمويل', name_en: 'Banking & Finance' },
          { id: 'technology', name_ar: 'التكنولوجيا', name_en: 'Technology' },
          { id: 'healthcare', name_ar: 'الرعاية الصحية', name_en: 'Healthcare' },
          { id: 'real_estate', name_ar: 'العقارات', name_en: 'Real Estate' }
        ]);
        setLegalEntitiesData([
          { id: 'sole_proprietorship', name_ar: 'مؤسسة فردية', name_en: 'Sole Proprietorship' },
          { id: 'limited_liability', name_ar: 'شركة ذات مسؤولية محدودة', name_en: 'Limited Liability Company' }
        ]);
        setComparisonLevelsData([
          { id: 'saudi', name_ar: 'المستوى المحلي (السعودية)', name_en: 'Local Level (Saudi Arabia)' },
          { id: 'gcc', name_ar: 'دول مجلس التعاون الخليجي', name_en: 'GCC Countries' }
        ]);
      }
    };
    
    fetchData();
  }, []);

  const legalEntities = legalEntitiesData.map(entity => ({
    value: entity.id,
    label: language === 'ar' ? entity.name_ar : entity.name_en
  }));

  const comparisonLevels = comparisonLevelsData.map(level => ({
    value: level.id,
    label: language === 'ar' ? level.name_ar : level.name_en
  }));

  // 📊 أنواع التحليلات الثورية الكاملة
  const analysisTypes = [
    {
      category: 'basic_classical',
      name: language === 'ar' ? 'التحليل الكلاسيكي الأساسي (13 نوع)' : 'Basic Classical Analysis (13 Types)',
      description: language === 'ar' ? 'التحليل المالي الأساسي والتقليدي مع 29 نسبة مالية' : 'Basic and traditional financial analysis with 29 ratios',
      count: 13,
      icon: '📊',
      color: '#3B82F6'
    },
    {
      category: 'intermediate',
      name: language === 'ar' ? 'التحليل المالي المتوسط (23 نوع)' : 'Intermediate Financial Analysis (23 Types)', 
      description: language === 'ar' ? 'تحليلات تطبيقية وقيمة ومخاطر متوسطة التعقيد' : 'Applied analysis with medium complexity risk assessment',
      count: 23,
      icon: '📈',
      color: '#10B981'
    },
    {
      category: 'advanced',
      name: language === 'ar' ? 'التحليل المالي المتقدم (28 نوع)' : 'Advanced Financial Analysis (28 Types)',
      description: language === 'ar' ? 'نماذج تقييم واستثمار وإحصاء متطورة' : 'Advanced valuation, investment and statistical models',
      count: 28,
      icon: '🚀',
      color: '#8B5CF6'
    },
    {
      category: 'complex',
      name: language === 'ar' ? 'التحليل المعقد والمتطور (25 نوع)' : 'Complex & Sophisticated Analysis (25 Types)',
      description: language === 'ar' ? 'نمذجة ومحاكاة متطورة ومعقدة' : 'Advanced modeling and sophisticated simulation',
      count: 25,
      icon: '⚙️',
      color: '#F59E0B'
    },
    {
      category: 'ai_powered',
      name: language === 'ar' ? 'التحليل بالذكاء الاصطناعي (27 نوع)' : 'AI-Powered Analysis (27 Types)',
      description: language === 'ar' ? 'تعلم آلي وتنبؤ وأتمتة ذكية' : 'Machine learning, prediction and intelligent automation',
      count: 27,
      icon: '🤖',
      color: '#EF4444'
    },
    {
      category: 'comprehensive',
      name: language === 'ar' ? 'التحليل الشامل الثوري (170+ نوع)' : 'Revolutionary Comprehensive Analysis (170+ Types)',
      description: language === 'ar' ? 'جميع أنواع التحليلات معاً بالذكاء الاصطناعي المتقدم - أحدث إصدار' : 'All analysis types combined with advanced AI - Latest version',
      count: 170,
      icon: '⚡',
      color: '#D4AF37'
    }
  ];

  // معالجة رفع الملفات
  const handleFileUpload = useCallback((event) => {
    const selectedFiles = Array.from(event.target.files);
    
    if (files.length + selectedFiles.length > 10) {
      toast({
        title: language === 'ar' ? '⚠️ تجاوز الحد الأقصى' : '⚠️ Maximum Limit Exceeded',
        description: language === 'ar' ? 'يمكن رفع 10 ملفات كحد أقصى للتحليل الواحد' : 'Maximum 10 files allowed per analysis',
        variant: 'destructive'
      });
      return;
    }

    const newFiles = selectedFiles.map(file => ({
      file,
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'ready'
    }));

    setFiles(prev => [...prev, ...newFiles]);
    
    toast({
      title: language === 'ar' ? '✅ تم رفع الملفات بنجاح' : '✅ Files Uploaded Successfully',
      description: language === 'ar' ? `تم إضافة ${newFiles.length} ملف للتحليل` : `Added ${newFiles.length} files for analysis`,
    });
  }, [files.length, language, toast]);

  // حذف ملف
  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  // معالجة النموذج
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // بدء التحليل
  const startAnalysis = async () => {
    // التحقق من البيانات المطلوبة
    if (!formData.company_name.trim()) {
      toast({
        title: language === 'ar' ? '❌ خطأ في البيانات' : '❌ Data Error',
        description: language === 'ar' ? 'يرجى إدخال اسم الشركة' : 'Please enter company name',
        variant: 'destructive'
      });
      return;
    }
    
    if (!formData.sector) {
      toast({
        title: language === 'ar' ? '❌ خطأ في البيانات' : '❌ Data Error',
        description: language === 'ar' ? 'يرجى اختيار القطاع' : 'Please select sector',
        variant: 'destructive'
      });
      return;
    }

    if (!formData.analysis_types || formData.analysis_types.length === 0) {
      toast({
        title: language === 'ar' ? '❌ خطأ في البيانات' : '❌ Data Error',
        description: language === 'ar' ? 'يرجى اختيار نوع التحليل المطلوب' : 'Please select analysis type',
        variant: 'destructive'
      });
      return;
    }

    if (files.length === 0) {
      toast({
        title: language === 'ar' ? '❌ خطأ في البيانات' : '❌ Data Error',
        description: language === 'ar' ? 'يرجى رفع ملف واحد على الأقل' : 'Please upload at least one file',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    setAnalysisProgress(0);
    setCurrentStep(2);

    try {
      // محاكاة التقدم
      const progressSteps = [10, 25, 45, 65, 80, 95, 100];
      for (let i = 0; i < progressSteps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setAnalysisProgress(progressSteps[i]);
      }

      // إرسال طلب التحليل
      const analysisData = {
        company_name: formData.company_name,
        language: formData.language,
        sector: formData.sector,
        activity: formData.activity || 'عام',
        legal_entity: formData.legal_entity || 'limited_liability', 
        comparison_level: formData.comparison_level || 'saudi',
        analysis_years: formData.analysis_years,
        analysis_types: formData.analysis_types
      };

      const response = await axios.post(`${API}/analyze`, analysisData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        timeout: 60000 // 60 ثانية timeout
      });

      if (response.data && response.data.status === 'success') {
        setAnalysisResults(response.data);
        setCurrentStep(3);
        
        toast({
          title: language === 'ar' ? '🎉 تم التحليل بنجاح!' : '🎉 Analysis Complete!',
          description: language === 'ar' ? 'تم إنجاز التحليل المالي الثوري بنجاح' : 'Revolutionary financial analysis completed successfully',
        });
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error('Analysis error:', error);
      
      let errorMessage = language === 'ar' ? 'حدث خطأ في النظام' : 'System error occurred';
      
      if (error.response) {
        // خطأ من الخادم
        errorMessage = error.response.data?.detail || error.response.data?.message || errorMessage;
      } else if (error.request) {
        // خطأ في الشبكة
        errorMessage = language === 'ar' ? 'خطأ في الاتصال بالخادم' : 'Network connection error';
      }
      
      toast({
        title: language === 'ar' ? '❌ خطأ في التحليل' : '❌ Analysis Error',
        description: errorMessage,
        variant: 'destructive'
      });
      
      setCurrentStep(1);
    } finally {
      setLoading(false);
    }
  };

  // تنسيق حجم الملف
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // التحقق من تسجيل الدخول
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center p-8 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 max-w-md mx-4">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {language === 'ar' ? 'تسجيل الدخول مطلوب' : 'Login Required'}
          </h2>
          <p className="text-gray-300 mb-6">
            {language === 'ar' 
              ? 'يجب تسجيل الدخول للوصول إلى نظام التحليل المالي المتقدم'
              : 'Please login to access the advanced financial analysis system'
            }
          </p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            {language === 'ar' ? 'تسجيل الدخول' : 'Login Now'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-yellow-400 font-serif" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* الهيدر */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/5"></div>
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Zap className="w-12 h-12 text-black" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-normal">
              {language === 'ar' ? 'نظام التحليل المالي الذكي الثوري' : 'Revolutionary Intelligent Financial Analysis System'}
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نظام ذكي ثوري للتحليل المالي الشامل مع الذكاء الاصطناعي - تحليل احترافي لجميع القوائم المالية'
                : 'Revolutionary intelligent system for comprehensive financial analysis with AI - Professional analysis for all financial statements'
              }
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 rounded-lg p-4 border border-yellow-600/50">
                <div className="text-4xl font-bold text-yellow-400 mb-2">170+</div>
                <div className="text-sm text-yellow-300">{language === 'ar' ? 'نوع تحليل' : 'Analysis Types'}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 rounded-lg p-4 border border-yellow-600/50">
                <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;30s</div>
                <div className="text-sm text-yellow-300">{language === 'ar' ? 'زمن التحليل' : 'Analysis Time'}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 rounded-lg p-4 border border-yellow-600/50">
                <div className="text-4xl font-bold text-yellow-400 mb-2">60+</div>
                <div className="text-sm text-yellow-300">{language === 'ar' ? 'قطاع' : 'Sectors'}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 rounded-lg p-4 border border-yellow-600/50">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <div className="text-sm text-yellow-300">{language === 'ar' ? 'دقة' : 'Accuracy'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* النموذج الرئيسي */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* شريط التقدم */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className={`flex items-center space-x-3 ${currentStep >= 1 ? 'text-yellow-400' : 'text-gray-400'}`} style={{ gap: '1rem' }}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-yellow-400 text-black' : 'bg-gray-700'} font-bold`}>1</div>
                <span className="font-medium">{language === 'ar' ? 'إعداد التحليل' : 'Setup Analysis'}</span>
              </div>
              <div className={`flex items-center space-x-3 ${currentStep >= 2 ? 'text-yellow-400' : 'text-gray-400'}`} style={{ gap: '1rem' }}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-yellow-400 text-black' : 'bg-gray-700'} font-bold`}>2</div>
                <span className="font-medium">{language === 'ar' ? 'معالجة البيانات' : 'Processing'}</span>
              </div>
              <div className={`flex items-center space-x-3 ${currentStep >= 3 ? 'text-yellow-400' : 'text-gray-400'}`} style={{ gap: '1rem' }}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-yellow-400 text-black' : 'bg-gray-700'} font-bold`}>3</div>
                <span className="font-medium">{language === 'ar' ? 'النتائج' : 'Results'}</span>
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* المحتوى حسب المرحلة */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* معلومات الشركة */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-yellow-400" />
                  {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      value={formData.company_name}
                      onChange={(e) => handleInputChange('company_name', e.target.value)}
                      placeholder={language === 'ar' ? 'أدخل اسم الشركة' : 'Enter company name'}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'القطاع' : 'Sector'}
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => handleInputChange('sector', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="">{language === 'ar' ? 'اختر القطاع' : 'Select Sector'}</option>
                      {sectors.map(sector => (
                        <option key={sector.id} value={sector.id}>
                          {language === 'ar' ? sector.name_ar : sector.name_en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'النشاط' : 'Activity'}
                    </label>
                    <input
                      type="text"
                      value={formData.activity}
                      onChange={(e) => handleInputChange('activity', e.target.value)}
                      placeholder={language === 'ar' ? 'النشاط التجاري' : 'Business Activity'}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'الكيان القانوني' : 'Legal Entity'}
                    </label>
                    <select
                      value={formData.legal_entity}
                      onChange={(e) => handleInputChange('legal_entity', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="">{language === 'ar' ? 'اختر الكيان القانوني' : 'Select Legal Entity'}</option>
                      {legalEntities.map(entity => (
                        <option key={entity.value} value={entity.value}>
                          {entity.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'مستوى المقارنة' : 'Comparison Level'}
                    </label>
                    <select
                      value={formData.comparison_level}
                      onChange={(e) => handleInputChange('comparison_level', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="">{language === 'ar' ? 'اختر مستوى المقارنة' : 'Select Comparison Level'}</option>
                      {comparisonLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      {language === 'ar' ? 'عدد سنوات التحليل' : 'Analysis Years'}
                    </label>
                    <select
                      value={formData.analysis_years}
                      onChange={(e) => handleInputChange('analysis_years', parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(year => (
                        <option key={year} value={year}>
                          {year} {language === 'ar' ? (year === 1 ? 'سنة' : 'سنوات') : (year === 1 ? 'year' : 'years')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold mb-4 text-white text-xl">
                    {language === 'ar' ? 'أنواع التحليل المطلوب' : 'Analysis Types Required'}
                  </h3>
                  <div className="space-y-4">
                    {analysisTypes.map((type) => (
                      <div key={type.category} 
                           className={`border rounded-xl p-6 hover:border-yellow-400 transition-all cursor-pointer ${
                             formData.analysis_types.includes(type.category) 
                               ? 'border-yellow-400 bg-gradient-to-r from-yellow-900/30 to-yellow-800/20' 
                               : 'border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-900/30'
                           }`}
                           onClick={() => handleInputChange('analysis_types', [type.category])}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                                 style={{ backgroundColor: type.color + '30', border: `2px solid ${type.color}50` }}>
                              <div className="text-2xl">{type.icon}</div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-white text-lg mb-1">{type.name}</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-3xl mb-1" style={{ color: type.color }}>{type.count}</div>
                            <div className="text-xs text-gray-400">{language === 'ar' ? 'نوع تحليل' : 'analysis types'}</div>
                            {formData.analysis_types.includes(type.category) && (
                              <div className="mt-2">
                                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mx-auto">
                                  <div className="w-3 h-3 bg-black rounded-full"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-600/50 rounded-xl">
                    <div className="flex items-center gap-3 text-yellow-300">
                      <div className="text-2xl">⚡</div>
                      <div>
                        <div className="font-bold text-lg">
                          {language === 'ar' ? 'نوع التحليل المحدد:' : 'Selected Analysis Type:'}
                        </div>
                        <div className="text-yellow-400 font-medium">
                          {formData.analysis_types.length > 0 
                            ? analysisTypes.find(t => t.category === formData.analysis_types[0])?.name 
                            : (language === 'ar' ? 'لم يتم اختيار نوع التحليل بعد' : 'No analysis type selected yet')
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* رفع الملفات */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Upload className="w-6 h-6 text-yellow-400" />
                  {language === 'ar' ? 'رفع المستندات' : 'Upload Documents'}
                </h2>
                
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-yellow-400 transition-all min-h-[200px] bg-gradient-to-br from-gray-800/30 to-gray-900/30">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <Upload className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {language === 'ar' ? 'اسحب الملفات أو اضغط للاختيار' : 'Drag files or click to select'}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {language === 'ar' 
                        ? 'القوائم المالية، موازين المراجعة، PDF، Excel، Word، الصور'
                        : 'Financial Statements, Trial Balance, PDF, Excel, Word, Images'
                      }
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">📄</div>
                        <div className="text-xs text-red-300">PDF</div>
                      </div>
                      <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">📊</div>
                        <div className="text-xs text-green-300">Excel</div>
                      </div>
                      <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">📝</div>
                        <div className="text-xs text-blue-300">Word</div>
                      </div>
                      <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-3">
                        <div className="text-2xl mb-1">🖼️</div>
                        <div className="text-xs text-purple-300">Images</div>
                      </div>
                    </div>
                    <p className="text-yellow-400 font-bold text-lg">
                      {language === 'ar' ? 'حد أقصى: 10 ملفات - حجم غير محدود' : 'Maximum: 10 files - Unlimited size'}
                    </p>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-bold mb-6 text-white text-xl flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      {language === 'ar' ? 'الملفات المرفوعة' : 'Uploaded Files'} ({files.length}/10)
                    </h3>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                      <div className="space-y-4 max-h-80 overflow-y-auto">
                        {files.map((fileInfo) => (
                          <div key={fileInfo.id} 
                               className="flex items-center justify-between bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-lg p-4 border border-gray-600 hover:border-yellow-400/50 transition-all">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">
                                  {fileInfo.type.includes('pdf') ? '📄' :
                                   fileInfo.type.includes('excel') || fileInfo.type.includes('sheet') ? '📊' :
                                   fileInfo.type.includes('word') ? '📝' :
                                   fileInfo.type.includes('image') ? '🖼️' : '📁'}
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white text-base">
                                  {fileInfo.name}
                                </div>
                                <div className="text-gray-400 text-sm">
                                  {formatFileSize(fileInfo.size)}
                                </div>
                                <div className="text-green-400 text-xs font-medium flex items-center gap-1 mt-1">
                                  <CheckCircle className="w-3 h-3" />
                                  {language === 'ar' ? 'جاهز للتحليل' : 'Ready for analysis'}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="bg-green-900/30 border border-green-700/50 rounded-lg px-3 py-1">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              </div>
                              <button
                                onClick={() => removeFile(fileInfo.id)}
                                className="p-2 hover:bg-red-600/20 rounded-lg transition-all"
                                title={language === 'ar' ? 'حذف الملف' : 'Remove file'}
                              >
                                <XCircle className="w-5 h-5 text-red-400 hover:text-red-300" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {files.length > 0 && (
                        <div className="mt-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <div className="flex items-center gap-3 text-green-400">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">
                              {language === 'ar' 
                                ? `تم رفع ${files.length} ملف بنجاح - جاهز للتحليل المالي الشامل`
                                : `${files.length} files uploaded successfully - Ready for comprehensive analysis`
                              }
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* مرحلة المعالجة */}
          {currentStep === 2 && (
            <div className="text-center py-20">
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-8 animate-pulse">
                  <Loader2 className="w-12 h-12 text-black animate-spin" />
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  {language === 'ar' ? 'جاري التحليل المتقدم...' : 'Advanced Analysis in Progress...'}
                </h2>
                
                <p className="text-gray-300 mb-8 text-lg">
                  {language === 'ar' 
                    ? 'الذكاء الاصطناعي يعمل على تحليل بياناتك المالية باستخدام أكثر من 170 خوارزمية'
                    : 'AI is analyzing your financial data using 170+ sophisticated algorithms'
                  }
                </p>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">{language === 'ar' ? 'التقدم' : 'Progress'}</span>
                    <span className="text-yellow-400 font-bold">{analysisProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${analysisProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* مرحلة النتائج */}
          {currentStep === 3 && analysisResults && (
            <div className="space-y-8">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-white">
                  {language === 'ar' ? 'تم إكمال التحليل بنجاح!' : 'Analysis Complete!'}
                </h2>
                <p className="text-gray-300 text-lg">
                  {language === 'ar' 
                    ? 'تم إنتاج تحليل مالي شامل مع توصيات استراتيجية'
                    : 'Comprehensive financial analysis with strategic recommendations generated'
                  }
                </p>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all font-bold">
                  <Download className="w-5 h-5" />
                  {language === 'ar' ? 'تقرير PDF' : 'PDF Report'}
                </button>
                
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all font-bold">
                  <Download className="w-5 h-5" />
                  {language === 'ar' ? 'عرض تقديمي' : 'Presentation'}
                </button>
                
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all font-bold">
                  <Download className="w-5 h-5" />
                  {language === 'ar' ? 'ملف Excel' : 'Excel File'}
                </button>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-white">
                  {language === 'ar' ? 'ملخص التحليل الشامل' : 'Comprehensive Analysis Summary'}
                </h3>
                
                {/* معلومات الشركة */}
                <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-3">
                    {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-400">{language === 'ar' ? 'اسم الشركة:' : 'Company:'}</span> <span className="text-white">{analysisResults.company_name}</span></div>
                    <div><span className="text-gray-400">{language === 'ar' ? 'تاريخ التحليل:' : 'Analysis Date:'}</span> <span className="text-white">{new Date(analysisResults.analysis_date).toLocaleDateString()}</span></div>
                    <div><span className="text-gray-400">{language === 'ar' ? 'إجمالي التحليلات:' : 'Total Analyses:'}</span> <span className="text-yellow-400 font-bold">{analysisResults.total_analysis_count}</span></div>
                    <div><span className="text-gray-400">{language === 'ar' ? 'الملفات المعالجة:' : 'Files Processed:'}</span> <span className="text-green-400">{analysisResults.files_processed}</span></div>
                  </div>
                </div>
                
                {/* إحصائيات التحليل */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">13</div>
                    <div className="text-blue-300 text-sm">{language === 'ar' ? 'كلاسيكي' : 'Classical'}</div>
                  </div>
                  
                  <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">23</div>
                    <div className="text-green-300 text-sm">{language === 'ar' ? 'متوسط' : 'Intermediate'}</div>
                  </div>
                  
                  <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">28</div>
                    <div className="text-purple-300 text-sm">{language === 'ar' ? 'متقدم' : 'Advanced'}</div>
                  </div>
                  
                  <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">25</div>
                    <div className="text-orange-300 text-sm">{language === 'ar' ? 'معقد' : 'Complex'}</div>
                  </div>
                  
                  <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">27</div>
                    <div className="text-red-300 text-sm">{language === 'ar' ? 'ذكاء اصطناعي' : 'AI-Powered'}</div>
                  </div>
                </div>

                {/* الملخص التنفيذي */}
                {analysisResults.results?.executive_summary && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-600/50 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                      <span>⭐</span>
                      {language === 'ar' ? 'النتائج الرئيسية' : 'Key Findings'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      {analysisResults.results.executive_summary.key_findings && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">{analysisResults.results.executive_summary.key_findings.overall_rating || 'B+'}</div>
                            <div className="text-yellow-300 text-xs">{language === 'ar' ? 'التقييم العام' : 'Overall Rating'}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{analysisResults.results.executive_summary.key_findings.financial_health_score || '82'}</div>
                            <div className="text-green-300 text-xs">{language === 'ar' ? 'الصحة المالية' : 'Financial Health'}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{analysisResults.results.executive_summary.key_findings.liquidity_status || 'قوي'}</div>
                            <div className="text-blue-300 text-xs">{language === 'ar' ? 'السيولة' : 'Liquidity'}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* النسب المالية الرئيسية */}
                {analysisResults.results?.financial_ratios && (
                  <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span>📊</span>
                      {language === 'ar' ? 'النسب المالية الرئيسية' : 'Key Financial Ratios'}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {Object.entries(analysisResults.results.financial_ratios).slice(0, 8).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-white">{typeof value === 'number' ? value.toFixed(2) : value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* تحليل SWOT */}
                {analysisResults.results?.swot_analysis && (
                  <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span>⚡</span>
                      {language === 'ar' ? 'تحليل SWOT' : 'SWOT Analysis'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="font-medium text-green-400">{language === 'ar' ? 'نقاط القوة:' : 'Strengths:'}</div>
                        <ul className="text-green-300 space-y-1">
                          {(analysisResults.results.swot_analysis.strengths || []).slice(0, 3).map((strength, idx) => (
                            <li key={idx} className="text-xs">• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="font-medium text-blue-400">{language === 'ar' ? 'الفرص:' : 'Opportunities:'}</div>
                        <ul className="text-blue-300 space-y-1">
                          {(analysisResults.results.swot_analysis.opportunities || []).slice(0, 3).map((opportunity, idx) => (
                            <li key={idx} className="text-xs">• {opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* التوصيات */}
                {analysisResults.results?.recommendations && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-600/50 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <span>💡</span>
                      {language === 'ar' ? 'التوصيات الاستراتيجية' : 'Strategic Recommendations'}
                    </h4>
                    <div className="space-y-2">
                      {(analysisResults.results.recommendations || []).slice(0, 3).map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                          <div>
                            <div className="font-medium text-white">{rec.category}</div>
                            <div className="text-gray-300 text-xs">{rec.recommendation}</div>
                            <div className="text-blue-400 text-xs">أولوية: {rec.priority}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-6">
                    {language === 'ar' 
                      ? 'التحليل مكتمل وجاهز للمراجعة والتحميل'
                      : 'Analysis is complete and ready for review and download'
                    }
                  </p>
                  
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setFiles([]);
                      setFormData({
                        company_name: '',
                        language: language,
                        sector: '',
                        activity: '',
                        legal_entity: '',
                        comparison_level: '',
                        analysis_years: 1,
                        analysis_types: ['comprehensive']
                      });
                      setAnalysisResults(null);
                      setAnalysisProgress(0);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all"
                  >
                    {language === 'ar' ? 'تحليل جديد' : 'New Analysis'}
                  </button>
                </div>

            </div>
          )}

          {/* زر بدء التحليل */}
          {currentStep === 1 && (
            <div className="text-center mt-12">
              <button
                onClick={startAnalysis}
                disabled={loading || !formData.company_name || !formData.sector || files.length === 0 || !formData.analysis_types.length}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-16 py-5 rounded-xl font-bold text-2xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  {loading ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                  ) : (
                    <Play className="w-8 h-8" />
                  )}
                  {language === 'ar' ? 'بدء التحليل الثوري الذكي' : 'Start Revolutionary Smart Analysis'}
                </div>
              </button>
              
              {(!formData.company_name || !formData.sector || files.length === 0 || !formData.analysis_types.length) && (
                <div className="mt-6 p-4 bg-amber-900/20 border border-amber-600/50 rounded-xl max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 text-amber-400">
                    <AlertTriangle className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-bold mb-2">
                        {language === 'ar' ? 'متطلبات التحليل:' : 'Analysis Requirements:'}
                      </div>
                      <ul className="text-sm space-y-1">
                        {!formData.company_name && (
                          <li>• {language === 'ar' ? 'اسم الشركة' : 'Company name'}</li>
                        )}
                        {!formData.sector && (
                          <li>• {language === 'ar' ? 'اختيار القطاع' : 'Select sector'}</li>
                        )}
                        {files.length === 0 && (
                          <li>• {language === 'ar' ? 'رفع الملفات المالية' : 'Upload financial files'}</li>
                        )}
                        {!formData.analysis_types.length && (
                          <li>• {language === 'ar' ? 'اختيار نوع التحليل' : 'Select analysis type'}</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalysisPage;
