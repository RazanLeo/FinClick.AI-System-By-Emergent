#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
اختبار النظام المُحدَّث لـ FinClick.AI - Arabic Review Test
Testing the updated FinClick.AI system based on Arabic user request

Focus Areas:
1. Authentication System (3 account types)
2. Core APIs (sectors, legal entities, comparison levels, analysis types)
3. Financial Analysis Engine
4. Error handling
"""

import requests
import sys
import json
import time
from datetime import datetime

class FinClickArabicReviewTester:
    def __init__(self, base_url="https://smartfinance-ai-1.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0
        self.user_data = None
        self.test_results = []

    def log_test_result(self, test_name, success, details=""):
        """Log test result for final summary"""
        self.test_results.append({
            "name": test_name,
            "success": success,
            "details": details
        })

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None, timeout=30):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        test_headers = {'Content-Type': 'application/json'}
        
        if self.token:
            test_headers['Authorization'] = f'Bearer {self.token}'
        
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 اختبار {name}...")
        print(f"   URL: {url}")
        
        try:
            start_time = time.time()
            
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=timeout)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=timeout)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=timeout)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=timeout)

            end_time = time.time()
            duration = end_time - start_time

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ نجح - الحالة: {response.status_code} - المدة: {duration:.2f}s")
                try:
                    response_data = response.json()
                    self.log_test_result(name, True, f"Status: {response.status_code}, Duration: {duration:.2f}s")
                    return True, response_data, duration
                except:
                    self.log_test_result(name, True, f"Status: {response.status_code}, Duration: {duration:.2f}s")
                    return True, {}, duration
            else:
                print(f"❌ فشل - متوقع {expected_status}، حصل على {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   خطأ: {error_data}")
                    self.log_test_result(name, False, f"Expected {expected_status}, got {response.status_code}: {error_data}")
                except:
                    print(f"   خطأ: {response.text}")
                    self.log_test_result(name, False, f"Expected {expected_status}, got {response.status_code}: {response.text}")
                return False, {}, duration

        except requests.exceptions.Timeout:
            print(f"❌ فشل - انتهت مهلة الطلب")
            self.log_test_result(name, False, "Request timeout")
            return False, {}, timeout
        except requests.exceptions.ConnectionError:
            print(f"❌ فشل - خطأ في الاتصال")
            self.log_test_result(name, False, "Connection error")
            return False, {}, 0
        except Exception as e:
            print(f"❌ فشل - خطأ: {str(e)}")
            self.log_test_result(name, False, f"Error: {str(e)}")
            return False, {}, 0

    def test_authentication_system(self):
        """اختبار نظام المصادقة الجديد (3 أنواع حسابات)"""
        print("\n" + "="*80)
        print("🔐 اختبار نظام المصادقة الجديد (3 أنواع حسابات)")
        print("="*80)
        
        # Test accounts from Arabic review request
        test_accounts = [
            {
                "name": "حساب المشتركين",
                "email": "subscriber@finclick.ai",
                "password": "subscriber123",
                "expected_type": "subscriber"
            },
            {
                "name": "حساب الإدارة",
                "email": "Razan@FinClick.AI", 
                "password": "RazanFinClickAI@056300",
                "expected_type": "admin"
            },
            {
                "name": "حساب الضيوف",
                "email": "Guest@FinClick.AI",
                "password": "GuestFinClickAI@123321",
                "expected_type": "guest"
            }
        ]
        
        auth_results = []
        
        for account in test_accounts:
            print(f"\n🔑 اختبار {account['name']}: {account['email']}")
            
            success, response, duration = self.run_test(
                f"تسجيل دخول {account['name']}",
                "POST",
                "auth/login",
                200,
                data={
                    "email": account["email"],
                    "password": account["password"]
                }
            )
            
            if success and 'token' in response:
                token = response['token']
                user_data = response.get('user', {})
                user_type = user_data.get('user_type', '')
                
                print(f"   ✅ تم الحصول على JWT Token: {token[:20]}...")
                print(f"   👤 نوع المستخدم: {user_type}")
                print(f"   📧 البريد الإلكتروني: {user_data.get('email', 'N/A')}")
                
                # Verify user type matches expected
                if user_type == account['expected_type']:
                    print(f"   ✅ نوع المستخدم صحيح: {user_type}")
                    auth_results.append(True)
                else:
                    print(f"   ❌ نوع المستخدم خاطئ: متوقع {account['expected_type']}, حصل على {user_type}")
                    auth_results.append(False)
                
                # Test JWT token validation
                temp_token = self.token
                self.token = token
                
                me_success, me_response, _ = self.run_test(
                    f"التحقق من صحة Token لـ {account['name']}",
                    "GET",
                    "auth/me",
                    200
                )
                
                if me_success:
                    print(f"   ✅ JWT Token صالح ويعمل بشكل صحيح")
                else:
                    print(f"   ❌ JWT Token غير صالح أو لا يعمل")
                    auth_results.append(False)
                
                self.token = temp_token
                
            else:
                print(f"   ❌ فشل تسجيل الدخول لـ {account['name']}")
                auth_results.append(False)
        
        # Set token to subscriber for remaining tests
        subscriber_success, subscriber_response, _ = self.run_test(
            "تسجيل دخول المشترك للاختبارات المتبقية",
            "POST", 
            "auth/login",
            200,
            data={
                "email": "subscriber@finclick.ai",
                "password": "subscriber123"
            }
        )
        
        if subscriber_success and 'token' in subscriber_response:
            self.token = subscriber_response['token']
            self.user_data = subscriber_response.get('user', {})
            print(f"\n✅ تم تعيين token المشترك للاختبارات المتبقية")
        
        return all(auth_results)

    def test_core_apis(self):
        """اختبار APIs الأساسية المُحدَّثة"""
        print("\n" + "="*80)
        print("📊 اختبار APIs الأساسية المُحدَّثة")
        print("="*80)
        
        api_results = []
        
        # Test /api/sectors (should return 50+ sectors)
        print(f"\n🏭 اختبار /api/sectors (يجب أن يعيد 50+ قطاع)")
        success, response, duration = self.run_test(
            "جلب جميع القطاعات",
            "GET",
            "sectors",
            200
        )
        
        if success and response:
            sectors = response.get('sectors', [])
            total_count = response.get('total_count', len(sectors))
            print(f"   📈 عدد القطاعات: {total_count}")
            
            if total_count >= 50:
                print(f"   ✅ متطلب 50+ قطاع مُحقق: {total_count} قطاع")
                api_results.append(True)
            else:
                print(f"   ❌ متطلب 50+ قطاع غير مُحقق: {total_count} قطاع فقط")
                api_results.append(False)
                
            # Check for Arabic and English names
            if sectors and len(sectors) > 0:
                first_sector = sectors[0]
                has_arabic = 'name_ar' in first_sector
                has_english = 'name_en' in first_sector
                print(f"   🌐 دعم ثنائي اللغة: عربي={has_arabic}, إنجليزي={has_english}")
        else:
            api_results.append(False)
        
        # Test /api/legal-entities (should return 10+ legal entities)
        print(f"\n🏢 اختبار /api/legal-entities (يجب أن يعيد 10+ كيان قانوني)")
        success, response, duration = self.run_test(
            "جلب الكيانات القانونية",
            "GET",
            "legal-entities",
            200
        )
        
        if success and response:
            entities = response.get('legal_entities', [])
            total_count = response.get('total_count', len(entities))
            print(f"   📈 عدد الكيانات القانونية: {total_count}")
            
            if total_count >= 10:
                print(f"   ✅ متطلب 10+ كيان مُحقق: {total_count} كيان")
                api_results.append(True)
            else:
                print(f"   ❌ متطلب 10+ كيان غير مُحقق: {total_count} كيان فقط")
                api_results.append(False)
        else:
            api_results.append(False)
        
        # Test /api/comparison-levels (should return 10 comparison levels)
        print(f"\n🌍 اختبار /api/comparison-levels (يجب أن يعيد 10 مستوى مقارنة جغرافي)")
        success, response, duration = self.run_test(
            "جلب مستويات المقارنة",
            "GET",
            "comparison-levels",
            200
        )
        
        if success and response:
            levels = response.get('comparison_levels', [])
            total_count = response.get('total_count', len(levels))
            print(f"   📈 عدد مستويات المقارنة: {total_count}")
            
            if total_count >= 10:
                print(f"   ✅ متطلب 10 مستوى مُحقق: {total_count} مستوى")
                api_results.append(True)
            else:
                print(f"   ❌ متطلب 10 مستوى غير مُحقق: {total_count} مستوى فقط")
                api_results.append(False)
        else:
            api_results.append(False)
        
        # Test /api/analysis-types (should return 116+ analysis types)
        print(f"\n🔬 اختبار /api/analysis-types (يجب أن يعيد أنواع التحليل الـ 116+)")
        success, response, duration = self.run_test(
            "جلب أنواع التحليل",
            "GET",
            "analysis-types",
            200
        )
        
        if success and response:
            analysis_types = response.get('analysis_types', {})
            
            # Count total analysis types across all levels
            total_types = 0
            for level_name, level_data in analysis_types.items():
                if isinstance(level_data, dict) and 'count' in level_data:
                    total_types += level_data['count']
                elif isinstance(level_data, dict) and 'types' in level_data:
                    total_types += len(level_data['types'])
            
            print(f"   📈 إجمالي أنواع التحليل: {total_types}")
            
            if total_types >= 116:
                print(f"   ✅ متطلب 116+ نوع تحليل مُحقق: {total_types} نوع")
                api_results.append(True)
            else:
                print(f"   ❌ متطلب 116+ نوع تحليل غير مُحقق: {total_types} نوع فقط")
                api_results.append(False)
                
            # Check for different analysis levels
            expected_levels = ['basic_classical', 'intermediate', 'advanced', 'complex', 'ai_powered']
            found_levels = [level for level in expected_levels if level in analysis_types]
            print(f"   📊 مستويات التحليل الموجودة: {found_levels}")
        else:
            api_results.append(False)
        
        return all(api_results)

    def test_financial_analysis_engine(self):
        """اختبار محرك التحليل المالي"""
        print("\n" + "="*80)
        print("🧮 اختبار محرك التحليل المالي")
        print("="*80)
        
        analysis_results = []
        
        # Test /api/analyze with comprehensive test data
        print(f"\n💼 اختبار /api/analyze مع بيانات تجريبية شاملة")
        
        test_analysis_data = {
            "company_name": "شركة FinClick للتحليل المالي المتقدم",
            "language": "ar",
            "sector": "fintech",
            "activity": "التكنولوجيا المالية والذكاء الاصطناعي",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 5,
            "analysis_types": ["comprehensive"]
        }
        
        print(f"   🏢 اسم الشركة: {test_analysis_data['company_name']}")
        print(f"   🌐 اللغة: {test_analysis_data['language']}")
        print(f"   🏭 القطاع: {test_analysis_data['sector']}")
        print(f"   📊 نوع التحليل: {test_analysis_data['analysis_types']}")
        print(f"   📅 سنوات التحليل: {test_analysis_data['analysis_years']}")
        
        start_time = time.time()
        success, response, duration = self.run_test(
            "تحليل مالي شامل",
            "POST",
            "analyze",
            200,
            data=test_analysis_data,
            timeout=60  # Allow up to 60 seconds but expect under 30
        )
        end_time = time.time()
        total_duration = end_time - start_time
        
        print(f"\n⏱️ مدة التحليل الإجمالية: {total_duration:.2f} ثانية")
        
        # Check if analysis completes in under 30 seconds
        if total_duration < 30:
            print(f"   ✅ متطلب الأداء مُحقق: التحليل اكتمل في {total_duration:.2f}s (أقل من 30 ثانية)")
            analysis_results.append(True)
        else:
            print(f"   ❌ متطلب الأداء غير مُحقق: التحليل استغرق {total_duration:.2f}s (أكثر من 30 ثانية)")
            analysis_results.append(False)
        
        if success and response:
            print(f"   ✅ التحليل المالي اكتمل بنجاح")
            
            # Check response structure
            results = response.get('results', {})
            company_name = response.get('company_name', '')
            language = response.get('language', '')
            total_analysis_count = response.get('total_analysis_count', 0)
            
            print(f"   🏢 اسم الشركة في الاستجابة: {company_name}")
            print(f"   🌐 لغة الاستجابة: {language}")
            print(f"   📊 إجمالي عدد التحليلات: {total_analysis_count}")
            
            # Check for comprehensive analysis structure
            analysis_levels = ['basic_analysis', 'intermediate_analysis', 'advanced_analysis', 
                             'complex_analysis', 'ai_powered_analysis']
            found_levels = [level for level in analysis_levels if level in results and results[level]]
            
            print(f"   📈 مستويات التحليل المكتملة: {len(found_levels)}/5")
            print(f"   📋 المستويات الموجودة: {found_levels}")
            
            if len(found_levels) >= 4:  # At least 4 out of 5 levels should be present
                print(f"   ✅ التحليل الشامل يحتوي على مستويات كافية")
                analysis_results.append(True)
            else:
                print(f"   ❌ التحليل الشامل لا يحتوي على مستويات كافية")
                analysis_results.append(False)
            
            # Check for Arabic content
            response_str = str(response)
            has_arabic = any(ord(char) > 127 for char in response_str)
            if has_arabic:
                print(f"   ✅ المحتوى العربي موجود في الاستجابة")
                analysis_results.append(True)
            else:
                print(f"   ❌ المحتوى العربي غير موجود في الاستجابة")
                analysis_results.append(False)
            
            # Check for executive summary
            if 'executive_summary' in results:
                print(f"   ✅ الملخص التنفيذي موجود")
                analysis_results.append(True)
            else:
                print(f"   ❌ الملخص التنفيذي غير موجود")
                analysis_results.append(False)
                
        else:
            print(f"   ❌ فشل التحليل المالي")
            analysis_results.extend([False, False, False, False])  # Mark all sub-tests as failed
        
        return all(analysis_results)

    def test_error_handling(self):
        """اختبار حالات الخطأ"""
        print("\n" + "="*80)
        print("⚠️ اختبار حالات الخطأ")
        print("="*80)
        
        error_results = []
        
        # Test 1: Invalid login credentials
        print(f"\n🔐 اختبار محاولة دخول ببيانات خاطئة")
        success, response, duration = self.run_test(
            "محاولة دخول ببيانات خاطئة",
            "POST",
            "auth/login",
            401,  # Expect 401 Unauthorized
            data={
                "email": "invalid@example.com",
                "password": "wrongpassword"
            }
        )
        
        if success:  # Success means we got the expected 401 error
            print(f"   ✅ رسالة خطأ مناسبة للبيانات الخاطئة")
            error_results.append(True)
        else:
            print(f"   ❌ لم يتم إرجاع رسالة خطأ مناسبة للبيانات الخاطئة")
            error_results.append(False)
        
        # Test 2: Access protected endpoint without token
        print(f"\n🔒 اختبار الوصول لـ endpoint محمي بدون token")
        
        # Temporarily remove token
        temp_token = self.token
        self.token = None
        
        success, response, duration = self.run_test(
            "الوصول لـ endpoint محمي بدون token",
            "GET",
            "auth/me",
            401  # Expect 401 Unauthorized
        )
        
        if success:  # Success means we got the expected 401 error
            print(f"   ✅ رسالة خطأ مناسبة للوصول بدون token")
            error_results.append(True)
        else:
            print(f"   ❌ لم يتم إرجاع رسالة خطأ مناسبة للوصول بدون token")
            error_results.append(False)
        
        # Restore token
        self.token = temp_token
        
        # Test 3: Invalid analysis request
        print(f"\n📊 اختبار طلب تحليل بمعاملات خاطئة")
        
        invalid_analysis_data = {
            "company_name": "",  # Empty company name
            "language": "invalid_language",  # Invalid language
            "sector": "non_existent_sector",  # Non-existent sector
            "analysis_types": []  # Empty analysis types
        }
        
        success, response, duration = self.run_test(
            "طلب تحليل بمعاملات خاطئة",
            "POST",
            "analyze",
            400,  # Expect 400 Bad Request or 422 Validation Error
            data=invalid_analysis_data
        )
        
        # Also accept 422 as valid error response
        if not success:
            success, response, duration = self.run_test(
                "طلب تحليل بمعاملات خاطئة (422)",
                "POST",
                "analyze",
                422,  # Expect 422 Validation Error
                data=invalid_analysis_data
            )
        
        if success:
            print(f"   ✅ رسالة خطأ مناسبة للمعاملات الخاطئة")
            error_results.append(True)
        else:
            print(f"   ❌ لم يتم إرجاع رسالة خطأ مناسبة للمعاملات الخاطئة")
            error_results.append(False)
        
        return all(error_results)

    def test_system_health(self):
        """اختبار صحة النظام العامة"""
        print("\n" + "="*80)
        print("🏥 اختبار صحة النظام العامة")
        print("="*80)
        
        health_results = []
        
        # Test health endpoint
        success, response, duration = self.run_test(
            "فحص صحة النظام",
            "GET",
            "health",
            200
        )
        
        if success and response:
            status = response.get('status', '')
            message = response.get('message', '')
            version = response.get('version', '')
            
            print(f"   📊 حالة النظام: {status}")
            print(f"   💬 رسالة النظام: {message}")
            print(f"   🔢 إصدار النظام: {version}")
            
            if status == 'healthy':
                print(f"   ✅ النظام يعمل بصحة جيدة")
                health_results.append(True)
            else:
                print(f"   ❌ النظام لا يعمل بصحة جيدة")
                health_results.append(False)
        else:
            print(f"   ❌ فشل فحص صحة النظام")
            health_results.append(False)
        
        return all(health_results)

    def generate_final_report(self):
        """إنشاء التقرير النهائي"""
        print("\n" + "="*100)
        print("📋 التقرير النهائي لاختبار النظام المُحدَّث لـ FinClick.AI")
        print("="*100)
        
        print(f"\n📊 إحصائيات الاختبار:")
        print(f"   إجمالي الاختبارات: {self.tests_run}")
        print(f"   الاختبارات الناجحة: {self.tests_passed}")
        print(f"   الاختبارات الفاشلة: {self.tests_run - self.tests_passed}")
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"   معدل النجاح: {success_rate:.1f}%")
        
        print(f"\n📋 تفاصيل النتائج:")
        
        # Group results by category
        categories = {
            "نظام المصادقة": [],
            "APIs الأساسية": [],
            "محرك التحليل المالي": [],
            "معالجة الأخطاء": [],
            "صحة النظام": [],
            "أخرى": []
        }
        
        for result in self.test_results:
            name = result["name"]
            if any(keyword in name for keyword in ["تسجيل", "دخول", "Token", "مصادقة"]):
                categories["نظام المصادقة"].append(result)
            elif any(keyword in name for keyword in ["قطاع", "كيان", "مقارنة", "تحليل" ]) and "محرك" not in name:
                categories["APIs الأساسية"].append(result)
            elif any(keyword in name for keyword in ["تحليل مالي", "محرك", "شامل"]):
                categories["محرك التحليل المالي"].append(result)
            elif any(keyword in name for keyword in ["خطأ", "خاطئة", "محمي", "token"]):
                categories["معالجة الأخطاء"].append(result)
            elif "صحة" in name:
                categories["صحة النظام"].append(result)
            else:
                categories["أخرى"].append(result)
        
        for category, results in categories.items():
            if results:
                print(f"\n🔹 {category}:")
                for result in results:
                    status = "✅" if result["success"] else "❌"
                    print(f"   {status} {result['name']}")
                    if result["details"]:
                        print(f"      التفاصيل: {result['details']}")
        
        # Overall assessment
        print(f"\n🎯 التقييم العام:")
        if success_rate >= 90:
            print(f"   🎉 ممتاز! النظام يعمل بشكل مثالي")
            overall_status = "ممتاز"
        elif success_rate >= 80:
            print(f"   ✅ جيد جداً! النظام يعمل بشكل جيد مع مشاكل طفيفة")
            overall_status = "جيد جداً"
        elif success_rate >= 70:
            print(f"   ⚠️ جيد! النظام يعمل لكن يحتاج بعض التحسينات")
            overall_status = "جيد"
        elif success_rate >= 50:
            print(f"   ⚠️ مقبول! النظام يعمل جزئياً ويحتاج إصلاحات")
            overall_status = "مقبول"
        else:
            print(f"   ❌ ضعيف! النظام يحتاج إصلاحات جوهرية")
            overall_status = "ضعيف"
        
        return overall_status, success_rate

def main():
    """الدالة الرئيسية لتشغيل جميع الاختبارات"""
    print("🚀 بدء اختبار النظام المُحدَّث لـ FinClick.AI")
    print("📋 التركيز على المتطلبات المذكورة في الطلب العربي")
    print("="*100)
    
    tester = FinClickArabicReviewTester()
    
    # Run all test phases
    test_phases = [
        ("اختبار نظام المصادقة الجديد (3 أنواع حسابات)", tester.test_authentication_system),
        ("اختبار APIs الأساسية المُحدَّثة", tester.test_core_apis),
        ("اختبار محرك التحليل المالي", tester.test_financial_analysis_engine),
        ("اختبار حالات الخطأ", tester.test_error_handling),
        ("اختبار صحة النظام العامة", tester.test_system_health)
    ]
    
    phase_results = []
    
    for phase_name, phase_function in test_phases:
        print(f"\n🔄 بدء {phase_name}...")
        try:
            result = phase_function()
            phase_results.append((phase_name, result))
            if result:
                print(f"✅ {phase_name} - نجح")
            else:
                print(f"❌ {phase_name} - فشل")
        except Exception as e:
            print(f"❌ {phase_name} - خطأ: {str(e)}")
            phase_results.append((phase_name, False))
    
    # Generate final report
    overall_status, success_rate = tester.generate_final_report()
    
    print(f"\n" + "="*100)
    print(f"🏁 انتهاء اختبار النظام المُحدَّث لـ FinClick.AI")
    print(f"📊 النتيجة النهائية: {overall_status} ({success_rate:.1f}%)")
    print("="*100)
    
    # Return appropriate exit code
    if success_rate >= 80:
        return 0  # Success
    else:
        return 1  # Failure

if __name__ == "__main__":
    sys.exit(main())