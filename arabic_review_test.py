#!/usr/bin/env python3
"""
🎯 اختبار إصلاح المشاكل الثلاثة المطلوبة - Arabic Review Request Testing
Testing the three critical fixes as requested in the Arabic review.
"""

import requests
import sys
import json
import time
from datetime import datetime

class ArabicReviewTester:
    def __init__(self, base_url="https://finclick-ai-3.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0
        self.user_data = None

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        test_headers = {'Content-Type': 'application/json'}
        
        if self.token:
            test_headers['Authorization'] = f'Bearer {self.token}'
        
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=30)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=30)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=30)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, dict) and len(str(response_data)) < 1000:
                        print(f"   Response: {response_data}")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_admin_authentication(self):
        """Test admin authentication with admin@finclick.ai/admin123"""
        print(f"🔐 Testing admin login: admin@finclick.ai / admin123")
        
        success, response = self.run_test(
            "Admin Authentication",
            "POST",
            "auth/login",
            200,
            data={
                "email": "admin@finclick.ai",
                "password": "admin123"
            }
        )
        
        if success and response and 'token' in response:
            self.token = response['token']
            self.user_data = response.get('user', {})
            print(f"   ✅ Admin authentication: SUCCESS")
            print(f"   🎫 Token received: {self.token[:20]}...")
            print(f"   👤 User type: {self.user_data.get('user_type', 'N/A')}")
            return True, response
        else:
            print(f"   ❌ Admin authentication: FAILED")
            return False, {}

    def test_arabic_review_three_fixes(self):
        """🎯 اختبار إصلاح المشاكل الثلاثة المطلوبة - Arabic Review Request"""
        print("\n🎯 اختبار إصلاح المشاكل الثلاثة المطلوبة - Arabic Review Request")
        print("=" * 90)
        
        # Test data exactly as requested by the user
        analysis_data = {
            "company_name": "شركة FinClick الشاملة الثورية",
            "language": "ar", 
            "sector": "technology",
            "legal_entity": "corporation",
            "comparison_level": "saudi",
            "analysis_years": 1
        }
        
        print(f"🔍 Testing Three Critical Fixes:")
        print(f"   1. ✅ إصلاح خطأ النظام: معالجة شاملة للأخطاء مع fallback analysis وJSON safety")
        print(f"   2. ✅ إصلاح النص: تحديث إلى 'نظام FinClick.AI للتحليل المالي الذكي الثوري'")
        print(f"   3. ✅ تطبيق النظام الشامل: ComprehensiveFinancialAnalyzer مع 170+ تحليل مالي")
        print(f"")
        print(f"📊 Test Data:")
        print(f"   Company: {analysis_data['company_name']}")
        print(f"   Language: {analysis_data['language']}")
        print(f"   Sector: {analysis_data['sector']}")
        print(f"   Legal Entity: {analysis_data['legal_entity']}")
        print(f"   Comparison Level: {analysis_data['comparison_level']}")
        print(f"   Analysis Years: {analysis_data['analysis_years']}")
        
        start_time = time.time()
        
        # Test the main analysis endpoint
        success, response = self.run_test(
            "🚀 POST /api/analyze - Three Fixes Validation",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        end_time = time.time()
        duration = end_time - start_time
        
        print(f"\n⏱️  Analysis Duration: {duration:.2f} seconds")
        
        if success and response:
            print(f"\n✅ THREE FIXES VALIDATION RESULTS:")
            
            # Fix 1: ✅ عدم وجود "خطأ في النظام" 
            response_str = str(response)
            has_system_error = "خطأ في النظام" in response_str
            if not has_system_error:
                print(f"   ✅ Fix 1 - No System Error: VERIFIED - No 'خطأ في النظام' found")
            else:
                print(f"   ❌ Fix 1 - System Error Found: FAILED - 'خطأ في النظام' detected")
            
            # Fix 2: 🔥 وجود "FinClick.AI v3.0 - النظام الثوري الشامل"
            system_info = response.get("system_info", {})
            engine_version = system_info.get("engine_version", "")
            
            has_correct_title = "FinClick.AI" in engine_version and "النظام الثوري الشامل" in engine_version
            if has_correct_title:
                print(f"   🔥 Fix 2 - Correct Title: VERIFIED - '{engine_version}'")
            else:
                print(f"   ❌ Fix 2 - Wrong Title: FAILED - Expected 'FinClick.AI v3.0 - النظام الثوري الشامل'")
            
            # Fix 3: 📊 وجود 170+ تحليل مالي شامل
            analysis_count_text = system_info.get("analysis_count", "")
            has_170_plus = "170+" in analysis_count_text
            if has_170_plus:
                print(f"   📊 Fix 3 - 170+ Analysis: VERIFIED - '{analysis_count_text}'")
            else:
                print(f"   ❌ Fix 3 - Missing 170+: FAILED - Expected '170+ تحليل مالي شامل'")
            
            # Additional Verifications
            print(f"\n📋 Additional Verifications:")
            
            # Check executive_summary with company_information
            executive_summary = response.get("executive_summary", {})
            has_company_info = "company_information" in executive_summary
            if has_company_info:
                print(f"   📋 Executive Summary with company_information: ✅ PRESENT")
            else:
                print(f"   📋 Executive Summary with company_information: ❌ MISSING")
            
            # Check for three analysis levels
            results = response.get("results", {})
            analysis_levels = ["basic_analysis", "intermediate_analysis", "advanced_analysis"]
            found_levels = [level for level in analysis_levels if level in results and results[level]]
            if len(found_levels) >= 3:
                print(f"   🏗️ Three Analysis Levels: ✅ FOUND - {found_levels}")
            else:
                print(f"   🏗️ Three Analysis Levels: ❌ INCOMPLETE - Only {found_levels}")
            
            # Check comprehensive_swot, risk_analysis, forecasts
            has_swot = "comprehensive_swot" in executive_summary
            has_risk_analysis = any("risk" in str(results).lower() for _ in [1])
            has_forecasts = any("forecast" in str(results).lower() for _ in [1])
            
            print(f"   📈 Comprehensive SWOT: {'✅' if has_swot else '❌'}")
            print(f"   📈 Risk Analysis: {'✅' if has_risk_analysis else '❌'}")
            print(f"   📈 Forecasts: {'✅' if has_forecasts else '❌'}")
            
            # Check strategic_decisions
            has_strategic_decisions = "strategic_decisions" in executive_summary
            if has_strategic_decisions:
                print(f"   💡 Strategic Decisions: ✅ PRESENT")
            else:
                print(f"   💡 Strategic Decisions: ❌ MISSING")
            
            # JSON Safety Check
            has_infinity = "infinity" in response_str.lower() or "inf" in response_str.lower()
            has_nan = "nan" in response_str.lower()
            json_safe = not has_infinity and not has_nan
            
            if json_safe:
                print(f"   💾 JSON Safety: ✅ SAFE - No infinity or NaN values")
            else:
                print(f"   💾 JSON Safety: ❌ UNSAFE - Found infinity or NaN values")
            
            # Performance Check
            performance_ok = duration < 30
            if performance_ok:
                print(f"   ⚡ Performance: ✅ EXCELLENT - {duration:.2f}s (under 30s)")
            else:
                print(f"   ⚡ Performance: ❌ SLOW - {duration:.2f}s (exceeds 30s)")
            
            # Final Assessment
            critical_fixes = [
                not has_system_error,  # Fix 1: No system error
                has_correct_title,     # Fix 2: Correct title
                has_170_plus          # Fix 3: 170+ analyses
            ]
            
            additional_checks = [
                has_company_info,      # Executive summary
                len(found_levels) >= 3, # Three levels
                has_swot,             # SWOT analysis
                has_strategic_decisions, # Strategic decisions
                json_safe,            # JSON safety
                performance_ok        # Performance
            ]
            
            critical_passed = sum(critical_fixes)
            additional_passed = sum(additional_checks)
            
            print(f"\n🎉 FINAL ASSESSMENT:")
            print(f"   🔥 Critical Fixes: {critical_passed}/3 ({'✅ ALL FIXED' if critical_passed == 3 else '❌ NEEDS ATTENTION'})")
            print(f"   📊 Additional Checks: {additional_passed}/6")
            print(f"   📈 Overall Success Rate: {((critical_passed + additional_passed) / 9) * 100:.1f}%")
            
            if critical_passed == 3:
                print(f"   ✅ STATUS: جميع المشاكل الثلاثة تم إصلاحها بنجاح!")
                print(f"   🎯 CONCLUSION: النظام الثوري يعمل بشكل ممتاز!")
            else:
                print(f"   ❌ STATUS: بعض المشاكل لا تزال تحتاج إصلاح")
            
            return critical_passed == 3, response
        else:
            print(f"\n❌ THREE FIXES TEST FAILED!")
            print(f"   🚨 CRITICAL: Analysis endpoint returned error instead of 200 OK")
            return False, {}

def main():
    print("🚀 Starting FinClick.AI Arabic Review Request Testing...")
    print("🎯 اختبار إصلاح المشاكل الثلاثة المطلوبة")
    print("=" * 80)
    
    # Setup
    tester = ArabicReviewTester()
    
    # PHASE 1: Authentication with admin@finclick.ai/admin123
    print("\n🔐 PHASE 1: Authentication Testing")
    print("=" * 50)
    
    auth_success, auth_response = tester.test_admin_authentication()
    
    if auth_success:
        # PHASE 2: Test the Three Critical Fixes
        print("\n🎯 PHASE 2: Testing Three Critical Fixes")
        print("=" * 50)
        
        fixes_success, fixes_response = tester.test_arabic_review_three_fixes()
        
        if fixes_success:
            print("\n🎉 SUCCESS: جميع المشاكل الثلاثة تم إصلاحها بنجاح!")
        else:
            print("\n❌ ISSUES FOUND: بعض المشاكل لا تزال تحتاج إصلاح")
        
        # PHASE 3: Quick System Health Check
        print("\n🏥 PHASE 3: System Health Check")
        print("=" * 50)
        
        # Test basic endpoints
        tester.run_test("Health Check", "GET", "health", 200)
        tester.run_test("Sectors API", "GET", "sectors", 200)
        tester.run_test("Legal Entities API", "GET", "legal-entities", 200)
        tester.run_test("Comparison Levels API", "GET", "comparison-levels", 200)
        
    else:
        print(f"   ❌ Admin authentication: FAILED")
        print(f"   🚨 Cannot proceed with testing without authentication")
        return
    
    # Final Summary
    print(f"\n" + "=" * 80)
    print(f"🎯 FINAL TESTING SUMMARY")
    print(f"=" * 80)
    print(f"📊 Tests Run: {tester.tests_run}")
    print(f"✅ Tests Passed: {tester.tests_passed}")
    print(f"❌ Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"📈 Success Rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")
    
    if fixes_success:
        print(f"\n🎉 CONCLUSION: النظام الثوري يعمل بشكل ممتاز!")
        print(f"✅ جميع المشاكل الثلاثة المطلوبة تم إصلاحها بنجاح")
        print(f"🚀 النظام جاهز للاستخدام الإنتاجي")
    else:
        print(f"\n⚠️ CONCLUSION: النظام يحتاج إلى مراجعة")
        print(f"❌ بعض المشاكل لا تزال تحتاج إصلاح")
        print(f"🔧 يُنصح بمراجعة التفاصيل أعلاه")

if __name__ == "__main__":
    main()