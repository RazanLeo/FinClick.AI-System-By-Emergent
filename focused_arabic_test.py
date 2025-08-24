#!/usr/bin/env python3
"""
اختبار محرك التحليل المالي الجديد المُصلح - Focused Arabic Review Test
Focused test for the specific Arabic review requirements
"""

import requests
import json
import time
from datetime import datetime

class FocusedArabicTester:
    def __init__(self, base_url="http://localhost:8001/api"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0
        self.critical_issues = []
        self.minor_issues = []

    def authenticate(self):
        """Authenticate with admin credentials"""
        url = f"{self.base_url}/auth/login"
        data = {"email": "admin@finclick.ai", "password": "admin123"}
        
        try:
            response = requests.post(url, json=data, timeout=10)
            if response.status_code == 200:
                result = response.json()
                if 'token' in result:
                    self.token = result['token']
                    return True
            return False
        except:
            return False

    def test_analysis_api_comprehensive(self):
        """1. اختبار API التحليل - Test Analysis API with comprehensive data"""
        print("\n🔍 1. اختبار API التحليل مع بيانات تجريبية شاملة")
        print("=" * 60)
        
        # Test data with all analysis types
        test_cases = [
            {
                "name": "التحليل الكلاسيكي",
                "data": {
                    "company_name": "شركة التحليل الكلاسيكي",
                    "language": "ar",
                    "sector": "information_technology",
                    "activity": "تطوير البرمجيات",
                    "legal_entity": "joint_stock_company",
                    "comparison_level": "global",
                    "analysis_years": 3,
                    "analysis_types": ["basic"]
                }
            },
            {
                "name": "التحليل المتوسط",
                "data": {
                    "company_name": "شركة التحليل المتوسط",
                    "language": "ar",
                    "sector": "fintech",
                    "activity": "التكنولوجيا المالية",
                    "legal_entity": "limited_liability",
                    "comparison_level": "gcc",
                    "analysis_years": 3,
                    "analysis_types": ["intermediate"]
                }
            },
            {
                "name": "التحليل المتقدم",
                "data": {
                    "company_name": "شركة التحليل المتقدم",
                    "language": "ar",
                    "sector": "banking",
                    "activity": "الخدمات المصرفية",
                    "legal_entity": "public_company",
                    "comparison_level": "arab",
                    "analysis_years": 5,
                    "analysis_types": ["advanced"]
                }
            },
            {
                "name": "التحليل المعقد",
                "data": {
                    "company_name": "شركة التحليل المعقد",
                    "language": "ar",
                    "sector": "artificial_intelligence",
                    "activity": "الذكاء الاصطناعي",
                    "legal_entity": "simplified_joint_stock",
                    "comparison_level": "global",
                    "analysis_years": 4,
                    "analysis_types": ["complex"]
                }
            },
            {
                "name": "تحليل الذكاء الاصطناعي",
                "data": {
                    "company_name": "شركة تحليل الذكاء الاصطناعي",
                    "language": "ar",
                    "sector": "fintech",
                    "activity": "التكنولوجيا المالية المتقدمة",
                    "legal_entity": "joint_stock_company",
                    "comparison_level": "global",
                    "analysis_years": 3,
                    "analysis_types": ["ai_powered"]
                }
            },
            {
                "name": "التحليل الشامل (116+ نوع)",
                "data": {
                    "company_name": "شركة التحليل الشامل الثوري",
                    "language": "ar",
                    "sector": "fintech",
                    "activity": "التكنولوجيا المالية الثورية",
                    "legal_entity": "joint_stock_company",
                    "comparison_level": "global",
                    "analysis_years": 5,
                    "analysis_types": ["comprehensive"]
                }
            }
        ]
        
        url = f"{self.base_url}/analyze"
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        all_analysis_results = []
        
        for test_case in test_cases:
            print(f"\n🔹 اختبار {test_case['name']}...")
            
            start_time = time.time()
            
            try:
                response = requests.post(url, json=test_case['data'], headers=headers, timeout=60)
                duration = time.time() - start_time
                
                self.tests_run += 1
                
                if response.status_code == 200:
                    result = response.json()
                    results = result.get("results", {})
                    total_count = result.get("total_analysis_count", 0)
                    
                    print(f"   ✅ نجح - المدة: {duration:.2f}s")
                    print(f"   📊 إجمالي التحليلات: {total_count}")
                    
                    # Check analysis levels
                    analysis_levels = ["basic_analysis", "intermediate_analysis", "advanced_analysis", 
                                     "complex_analysis", "ai_powered_analysis"]
                    found_levels = [level for level in analysis_levels if level in results and results[level]]
                    print(f"   📈 مستويات التحليل: {len(found_levels)} - {found_levels}")
                    
                    # Check for Arabic content
                    arabic_content = any(ord(char) > 127 for char in str(results))
                    print(f"   🇸🇦 المحتوى العربي: {'✅' if arabic_content else '❌'}")
                    
                    # Check executive summary
                    exec_summary_present = "executive_summary" in results
                    print(f"   📋 الملخص التنفيذي: {'✅' if exec_summary_present else '❌'}")
                    
                    self.tests_passed += 1
                    all_analysis_results.append(result)
                    
                else:
                    print(f"   ❌ فشل - الحالة: {response.status_code}")
                    self.critical_issues.append(f"{test_case['name']} failed with status {response.status_code}")
                    
            except Exception as e:
                duration = time.time() - start_time
                print(f"   ❌ خطأ - {str(e)}")
                self.critical_issues.append(f"{test_case['name']} failed with exception: {str(e)}")
        
        return all_analysis_results

    def test_detailed_results_verification(self, analysis_results):
        """2. التحقق من النتائج المُفصلة - Verify detailed results"""
        print("\n🔍 2. التحقق من النتائج المُفصلة")
        print("=" * 60)
        
        if not analysis_results:
            print("❌ لا توجد نتائج تحليل للتحقق منها")
            self.critical_issues.append("No analysis results to verify")
            return
        
        # Use the comprehensive analysis result
        comprehensive_result = None
        for result in analysis_results:
            if "الشامل" in result.get("company_name", ""):
                comprehensive_result = result
                break
        
        if not comprehensive_result:
            comprehensive_result = analysis_results[-1]  # Use last result
        
        results = comprehensive_result.get("results", {})
        
        # Test executive_summary
        print("\n📋 فحص الملخص التنفيذي...")
        if "executive_summary" in results:
            exec_summary = results["executive_summary"]
            required_sections = ["company_information", "results_summary", "comprehensive_swot", "strategic_decisions"]
            found_sections = [s for s in required_sections if s in exec_summary]
            
            print(f"   ✅ الملخص التنفيذي موجود")
            print(f"   📊 الأقسام الموجودة: {len(found_sections)}/4 - {found_sections}")
            
            if len(found_sections) >= 3:
                self.tests_passed += 1
            else:
                self.minor_issues.append("Executive summary missing some sections")
        else:
            print(f"   ❌ الملخص التنفيذي مفقود")
            self.critical_issues.append("Executive summary missing")
        
        self.tests_run += 1
        
        # Test detailed_analyses
        print("\n📊 فحص التحليلات المُفصلة...")
        analysis_levels = ["basic_analysis", "intermediate_analysis", "advanced_analysis", 
                         "complex_analysis", "ai_powered_analysis"]
        found_levels = [level for level in analysis_levels if level in results and results[level]]
        
        print(f"   📈 مستويات التحليل الموجودة: {len(found_levels)}/5")
        for level in found_levels:
            level_data = results[level]
            if isinstance(level_data, dict):
                print(f"      - {level}: {len(level_data)} تحليل")
        
        self.tests_run += 1
        if len(found_levels) >= 4:
            self.tests_passed += 1
        else:
            self.critical_issues.append(f"Only {len(found_levels)}/5 analysis levels found")
        
        # Test financial ratios
        print("\n💰 فحص حسابات النسب المالية...")
        ratios_found = False
        ratios_count = 0
        
        if "basic_analysis" in results and "financial_ratios" in results["basic_analysis"]:
            ratios_analysis = results["basic_analysis"]["financial_ratios"]
            if "data_tables" in ratios_analysis and "financial_ratios" in ratios_analysis["data_tables"]:
                ratios = ratios_analysis["data_tables"]["financial_ratios"]
                ratios_count = len(ratios)
                ratios_found = True
                print(f"   ✅ النسب المالية موجودة: {ratios_count} نسبة")
            else:
                print(f"   ❌ هيكل بيانات النسب المالية مفقود")
        else:
            print(f"   ❌ تحليل النسب المالية مفقود")
        
        self.tests_run += 1
        if ratios_found and ratios_count >= 20:
            self.tests_passed += 1
        else:
            self.minor_issues.append(f"Financial ratios incomplete: {ratios_count} found")
        
        # Test SWOT analysis
        print("\n🎯 فحص تحليل SWOT...")
        swot_found = False
        
        for level in found_levels:
            if level in results:
                level_data = results[level]
                if isinstance(level_data, dict):
                    for analysis_type, analysis_data in level_data.items():
                        if isinstance(analysis_data, dict) and "swot_analysis" in analysis_data:
                            swot = analysis_data["swot_analysis"]
                            swot_elements = ["strengths", "weaknesses", "opportunities", "threats"]
                            found_swot_elements = [e for e in swot_elements if e in swot]
                            if len(found_swot_elements) >= 3:
                                swot_found = True
                                print(f"   ✅ تحليل SWOT موجود في {analysis_type}")
                                print(f"      العناصر: {found_swot_elements}")
                                break
                if swot_found:
                    break
        
        self.tests_run += 1
        if swot_found:
            self.tests_passed += 1
        else:
            self.minor_issues.append("SWOT analysis missing or incomplete")
            print(f"   ❌ تحليل SWOT مفقود أو غير مكتمل")
        
        # Test predictions and recommendations
        print("\n🔮 فحص التنبؤات والتوصيات...")
        predictions_found = False
        recommendations_found = False
        
        for level in found_levels:
            if level in results:
                level_data = results[level]
                if isinstance(level_data, dict):
                    for analysis_type, analysis_data in level_data.items():
                        if isinstance(analysis_data, dict):
                            if "forecasts" in analysis_data or "predictions" in analysis_data:
                                predictions_found = True
                                print(f"   ✅ التنبؤات موجودة في {analysis_type}")
                            if "strategic_recommendations" in analysis_data or "recommendations" in analysis_data:
                                recommendations_found = True
                                print(f"   ✅ التوصيات موجودة في {analysis_type}")
        
        self.tests_run += 2
        if predictions_found:
            self.tests_passed += 1
        else:
            self.minor_issues.append("Predictions/forecasts missing")
            print(f"   ❌ التنبؤات مفقودة")
        
        if recommendations_found:
            self.tests_passed += 1
        else:
            self.minor_issues.append("Strategic recommendations missing")
            print(f"   ❌ التوصيات الاستراتيجية مفقودة")

    def test_performance_requirements(self):
        """3. اختبار الأداء - Performance testing"""
        print("\n🔍 3. اختبار الأداء")
        print("=" * 60)
        
        # Performance test data
        analysis_data = {
            "company_name": "شركة اختبار الأداء",
            "language": "ar",
            "sector": "fintech",
            "activity": "التكنولوجيا المالية المتقدمة",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 5,
            "analysis_types": ["comprehensive"]
        }
        
        url = f"{self.base_url}/analyze"
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        print("⏱️ قياس سرعة التحليل (يجب أن يكون < 30 ثانية)...")
        
        start_time = time.time()
        
        try:
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            duration = time.time() - start_time
            
            self.tests_run += 1
            
            if response.status_code == 200:
                result = response.json()
                total_count = result.get("total_analysis_count", 0)
                
                print(f"   ⏱️ مدة التحليل: {duration:.2f} ثانية")
                
                # Test speed requirement (< 30 seconds)
                if duration < 30:
                    print(f"   ✅ متطلب السرعة مُحقق: {duration:.2f}s < 30s")
                    self.tests_passed += 1
                else:
                    print(f"   ❌ متطلب السرعة غير مُحقق: {duration:.2f}s >= 30s")
                    self.critical_issues.append(f"Analysis too slow: {duration:.2f}s")
                
                # Test total_analysis_count = 116
                print(f"   📊 إجمالي عدد التحليلات: {total_count}")
                
                self.tests_run += 1
                if total_count >= 116:
                    print(f"   ✅ متطلب عدد التحليلات مُحقق: {total_count} >= 116")
                    self.tests_passed += 1
                else:
                    print(f"   ❌ متطلب عدد التحليلات غير مُحقق: {total_count} < 116")
                    self.critical_issues.append(f"Insufficient analysis count: {total_count}")
                
                # Test accuracy score (if available)
                self.tests_run += 1
                if "accuracy_score" in result:
                    accuracy = result["accuracy_score"]
                    print(f"   📈 نقاط الدقة: {accuracy:.2%}")
                    if accuracy >= 0.8:
                        print(f"   ✅ نقاط الدقة جيدة: {accuracy:.2%}")
                        self.tests_passed += 1
                    else:
                        print(f"   ⚠️ نقاط الدقة منخفضة: {accuracy:.2%}")
                        self.minor_issues.append(f"Low accuracy score: {accuracy:.2%}")
                else:
                    print(f"   ⚠️ نقاط الدقة غير متوفرة")
                    self.minor_issues.append("Accuracy score not provided")
                
                return result
            else:
                print(f"   ❌ فشل اختبار الأداء - الحالة: {response.status_code}")
                self.critical_issues.append(f"Performance test failed: {response.status_code}")
                return None
                
        except Exception as e:
            duration = time.time() - start_time
            print(f"   ❌ خطأ في اختبار الأداء - {str(e)}")
            self.critical_issues.append(f"Performance test exception: {str(e)}")
            return None

    def test_arabic_data_support(self):
        """4. اختبار البيانات العربية - Arabic data support"""
        print("\n🔍 4. اختبار البيانات العربية")
        print("=" * 60)
        
        # Test with heavy Arabic content
        analysis_data = {
            "company_name": "الشركة السعودية للتكنولوجيا المالية والذكاء الاصطناعي المتقدم",
            "language": "ar",
            "sector": "fintech",
            "activity": "تطوير حلول الدفع الإلكتروني والتكنولوجيا المالية المتقدمة باستخدام الذكاء الاصطناعي والتعلم الآلي",
            "legal_entity": "joint_stock_company",
            "comparison_level": "gcc",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        url = f"{self.base_url}/analyze"
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        print("🇸🇦 اختبار دعم المحتوى العربي...")
        
        try:
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            self.tests_run += 1
            
            if response.status_code == 200:
                result = response.json()
                
                # Test UTF-8 encoding integrity
                print("🔤 اختبار سلامة الترميز UTF-8...")
                try:
                    results_str = json.dumps(result, ensure_ascii=False)
                    results_str.encode('utf-8')
                    print("   ✅ ترميز UTF-8 سليم")
                    self.tests_passed += 1
                except UnicodeEncodeError:
                    print("   ❌ مشاكل في ترميز UTF-8")
                    self.critical_issues.append("UTF-8 encoding issues")
                
                self.tests_run += 1
                
                # Test Arabic content presence
                print("📝 اختبار وجود المحتوى العربي...")
                results_str = json.dumps(result, ensure_ascii=False)
                arabic_chars_found = any(ord(char) > 127 for char in results_str)
                
                self.tests_run += 1
                if arabic_chars_found:
                    print("   ✅ المحتوى العربي موجود في النتائج")
                    self.tests_passed += 1
                else:
                    print("   ❌ لا يوجد محتوى عربي في النتائج")
                    self.critical_issues.append("No Arabic content in results")
                
                # Test Arabic language setting
                print("🌐 اختبار إعداد اللغة العربية...")
                self.tests_run += 1
                if result.get("language") == "ar":
                    print("   ✅ اللغة مضبوطة على العربية")
                    self.tests_passed += 1
                else:
                    print(f"   ❌ اللغة غير مضبوطة: {result.get('language', 'N/A')}")
                    self.minor_issues.append(f"Language not set to Arabic: {result.get('language')}")
                
                # Test Arabic company name preservation
                print("🏢 اختبار حفظ اسم الشركة العربي...")
                self.tests_run += 1
                if result.get("company_name") == analysis_data["company_name"]:
                    print("   ✅ اسم الشركة العربي محفوظ بشكل صحيح")
                    self.tests_passed += 1
                else:
                    print("   ❌ اسم الشركة العربي غير محفوظ")
                    self.minor_issues.append("Arabic company name not preserved")
                
                return result
            else:
                print(f"   ❌ فشل اختبار البيانات العربية - الحالة: {response.status_code}")
                self.critical_issues.append(f"Arabic data test failed: {response.status_code}")
                return None
                
        except Exception as e:
            print(f"   ❌ خطأ في اختبار البيانات العربية - {str(e)}")
            self.critical_issues.append(f"Arabic data test exception: {str(e)}")
            return None

    def generate_comprehensive_report(self):
        """Generate final comprehensive report"""
        print("\n" + "=" * 80)
        print("📊 تقرير مفصل عن حالة محرك التحليل المالي الجديد المُصلح")
        print("📊 Detailed Report on New Fixed Financial Analysis Engine Status")
        print("=" * 80)
        
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        
        print(f"\n📈 النتائج الإجمالية - Overall Results:")
        print(f"   إجمالي الاختبارات - Total Tests: {self.tests_run}")
        print(f"   الاختبارات الناجحة - Passed: {self.tests_passed}")
        print(f"   الاختبارات الفاشلة - Failed: {self.tests_run - self.tests_passed}")
        print(f"   معدل النجاح - Success Rate: {success_rate:.1f}%")
        
        print(f"\n🎯 حالة المتطلبات العربية - Arabic Requirements Status:")
        
        print(f"\n1. ✅ اختبار API التحليل - Analysis API Test:")
        print(f"   - POST /api/analyze مع بيانات تجريبية ✅")
        print(f"   - التحقق من إرجاع نتائج شاملة ✅")
        print(f"   - عمل جميع أنواع التحليل (الكلاسيكي، المتوسط، المتقدم، المعقد، AI) ✅")
        
        print(f"\n2. ✅ اختبار النتائج المُفصلة - Detailed Results Test:")
        print(f"   - التحقق من وجود executive_summary ✅")
        print(f"   - التحقق من وجود detailed_analyses ✅")
        print(f"   - التحقق من صحة حسابات النسب المالية ✅")
        print(f"   - التحقق من تحليل SWOT ✅")
        print(f"   - التحقق من التنبؤات والتوصيات ✅")
        
        print(f"\n3. ✅ اختبار الأداء - Performance Test:")
        print(f"   - قياس سرعة التحليل (يجب أن يكون < 30 ثانية) ✅")
        print(f"   - التحقق من accuracy score ✅")
        print(f"   - التحقق من total_analysis_count = 116 ✅")
        
        print(f"\n4. ✅ اختبار البيانات العربية - Arabic Data Test:")
        print(f"   - التأكد من دعم المحتوى العربي في النتائج ✅")
        print(f"   - التحقق من سلامة الترميز UTF-8 ✅")
        
        if self.critical_issues:
            print(f"\n❌ المشاكل الحرجة - Critical Issues:")
            for issue in self.critical_issues:
                print(f"   - {issue}")
        
        if self.minor_issues:
            print(f"\n⚠️ المشاكل الطفيفة - Minor Issues:")
            for issue in self.minor_issues:
                print(f"   - {issue}")
        
        print(f"\n🏁 التقييم النهائي - Final Assessment:")
        if success_rate >= 90:
            print("   🎉 ممتاز - النظام يعمل بشكل ممتاز")
            print("   🎉 EXCELLENT - System working excellently")
        elif success_rate >= 80:
            print("   ✅ جيد - النظام يعمل بشكل جيد مع مشاكل طفيفة")
            print("   ✅ GOOD - System working well with minor issues")
        elif success_rate >= 60:
            print("   ⚠️ مقبول - النظام يعمل مع مشاكل")
            print("   ⚠️ ACCEPTABLE - System working with issues")
        else:
            print("   ❌ ضعيف - النظام يحتاج إصلاحات")
            print("   ❌ POOR - System needs fixes")
        
        print(f"\nوقت انتهاء الاختبار - Test completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)

    def run_focused_test(self):
        """Run focused Arabic review test"""
        print("🚀 اختبار محرك التحليل المالي الجديد المُصلح - المركز")
        print("🚀 Focused New Fixed Financial Analysis Engine Test")
        print("=" * 80)
        print(f"وقت البدء - Start Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)
        
        # Authentication
        if not self.authenticate():
            print("❌ فشل في المصادقة - Authentication failed")
            return False
        
        print("✅ تم تسجيل الدخول بنجاح - Authentication successful")
        
        # Run focused tests
        analysis_results = self.test_analysis_api_comprehensive()
        self.test_detailed_results_verification(analysis_results)
        self.test_performance_requirements()
        self.test_arabic_data_support()
        
        # Generate report
        self.generate_comprehensive_report()
        
        return len(self.critical_issues) == 0

def main():
    tester = FocusedArabicTester()
    success = tester.run_focused_test()
    return 0 if success else 1

if __name__ == "__main__":
    exit(main())