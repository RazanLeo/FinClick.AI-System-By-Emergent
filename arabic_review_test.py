#!/usr/bin/env python3
"""
🎯 اختبار سريع ومركز للمحرك الثوري 170+ تحليل - FINAL VALIDATION
Arabic Review Request - Focused Testing for Revolutionary Engine
"""

import requests
import time
import json
from datetime import datetime

class ArabicReviewTester:
    def __init__(self, base_url="https://finclick-ai-3.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0

    def login_admin(self):
        """🔐 تسجيل الدخول: admin@finclick.ai/admin123"""
        print("🔐 Step 1: Testing admin login: admin@finclick.ai / admin123")
        
        url = f"{self.base_url}/auth/login"
        data = {
            "email": "admin@finclick.ai",
            "password": "admin123"
        }
        
        try:
            response = requests.post(url, json=data, timeout=10)
            
            if response.status_code == 200:
                response_data = response.json()
                if 'token' in response_data:
                    self.token = response_data['token']
                    print("✅ Admin authentication: SUCCESS")
                    return True
                else:
                    print("❌ Admin authentication: NO TOKEN RECEIVED")
                    return False
            else:
                print(f"❌ Admin authentication: FAILED - Status {response.status_code}")
                return False
                
        except Exception as e:
            print(f"❌ Admin authentication: ERROR - {str(e)}")
            return False

    def test_revolutionary_engine_170(self):
        """🚀 POST /api/analyze مع البيانات المطلوبة"""
        print("\n🚀 Step 2: Testing Revolutionary Engine with 170+ analyses")
        
        # البيانات المطلوبة بالضبط
        analysis_data = {
            "company_name": "شركة FinClick الثورية", 
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا المالية الثورية",
            "legal_entity": "corporation", 
            "comparison_level": "saudi",
            "analysis_years": 1,
            "analysis_types": ["comprehensive"]
        }
        
        print(f"📊 Testing POST /api/analyze with:")
        print(f"   Company: {analysis_data['company_name']}")
        print(f"   Language: {analysis_data['language']}")
        print(f"   Sector: {analysis_data['sector']}")
        print(f"   Legal Entity: {analysis_data['legal_entity']}")
        print(f"   Comparison Level: {analysis_data['comparison_level']}")
        print(f"   Analysis Years: {analysis_data['analysis_years']}")
        
        url = f"{self.base_url}/analyze"
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        print(f"\n🎯 التحقق من:")
        print(f"   ✅ الاستجابة بـ 200 OK (بدلاً من 500 error)")
        print(f"   🔥 وجود 'FinClick.AI v3.0 - المحرك الثوري' في system_info")
        print(f"   📊 وجود 170+ في analysis_count")
        print(f"   💾 البيانات JSON سليمة (لا يوجد infinity أو NaN values)")
        print(f"   ⚡ السرعة أقل من 30 ثانية")
        
        start_time = time.time()
        
        try:
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            end_time = time.time()
            duration = end_time - start_time
            
            print(f"\n⏱️  Analysis Duration: {duration:.2f} seconds")
            
            # Test 1: ✅ الاستجابة بـ 200 OK
            if response.status_code == 200:
                print(f"   ✅ Response Status: 200 OK (SUCCESS)")
                
                try:
                    response_data = response.json()
                    
                    # Test 2: 🔥 وجود "FinClick.AI v3.0 - المحرك الثوري" في system_info
                    system_info = response_data.get("system_info", {})
                    engine_version = system_info.get("engine_version", "")
                    analysis_count_text = system_info.get("analysis_count", "")
                    
                    if "FinClick.AI v3.0" in engine_version and "المحرك الثوري" in engine_version:
                        print(f"   🔥 Engine Version: ✅ FOUND - {engine_version}")
                        engine_check = True
                    else:
                        print(f"   🔥 Engine Version: ❌ NOT FOUND - {engine_version}")
                        engine_check = False
                    
                    # Test 3: 📊 وجود 170+ في analysis_count
                    if "170+" in analysis_count_text:
                        print(f"   📊 Analysis Count: ✅ FOUND - {analysis_count_text}")
                        count_check = True
                    else:
                        print(f"   📊 Analysis Count: ❌ NOT FOUND - {analysis_count_text}")
                        count_check = False
                    
                    # Test 4: 💾 البيانات JSON سليمة (check for infinity/NaN)
                    response_str = str(response_data)
                    has_infinity = "infinity" in response_str.lower() or "inf" in response_str.lower()
                    has_nan = "nan" in response_str.lower()
                    
                    if not has_infinity and not has_nan:
                        print(f"   💾 JSON Safety: ✅ SAFE - No infinity or NaN values")
                        json_check = True
                    else:
                        print(f"   💾 JSON Safety: ❌ UNSAFE - Found infinity or NaN values")
                        json_check = False
                    
                    # Test 5: ⚡ السرعة أقل من 30 ثانية
                    if duration < 30:
                        print(f"   ⚡ Performance: ✅ PASSED - {duration:.2f}s (under 30s requirement)")
                        perf_check = True
                    else:
                        print(f"   ⚡ Performance: ❌ FAILED - {duration:.2f}s (exceeds 30s requirement)")
                        perf_check = False
                    
                    # Additional verification
                    total_analysis_count = response_data.get("total_analysis_count", 0)
                    if total_analysis_count >= 170:
                        print(f"   🎯 Total Analysis Count: ✅ {total_analysis_count} (meets 170+ requirement)")
                        total_check = True
                    else:
                        print(f"   🎯 Total Analysis Count: ❌ {total_analysis_count} (needs 170+)")
                        total_check = False
                    
                    # Check for Arabic content
                    arabic_content = any(ord(char) > 127 for char in response_str)
                    if arabic_content:
                        print(f"   🇸🇦 Arabic Content: ✅ PRESENT")
                        arabic_check = True
                    else:
                        print(f"   🇸🇦 Arabic Content: ❌ MISSING")
                        arabic_check = False
                    
                    # Final assessment
                    all_checks = [
                        True,  # 200 OK (already verified)
                        engine_check,  # Engine version
                        count_check,  # Analysis count
                        json_check,  # JSON safety
                        perf_check,  # Performance
                        arabic_check  # Arabic support
                    ]
                    
                    passed_checks = sum(all_checks)
                    success_rate = (passed_checks / len(all_checks)) * 100
                    
                    print(f"\n🎉 FINAL VALIDATION RESULTS:")
                    print(f"   📊 Success Rate: {success_rate:.1f}% ({passed_checks}/{len(all_checks)} checks passed)")
                    
                    if success_rate >= 80:
                        print(f"   ✅ REVOLUTIONARY ENGINE STATUS: WORKING EXCELLENTLY")
                        status = "EXCELLENT"
                    elif success_rate >= 60:
                        print(f"   ⚠️  REVOLUTIONARY ENGINE STATUS: WORKING WITH MINOR ISSUES")
                        status = "GOOD"
                    else:
                        print(f"   ❌ REVOLUTIONARY ENGINE STATUS: NEEDS ATTENTION")
                        status = "NEEDS_ATTENTION"
                    
                    return {
                        "success": True,
                        "status": status,
                        "success_rate": success_rate,
                        "duration": duration,
                        "checks": {
                            "response_200": True,
                            "engine_version": engine_check,
                            "analysis_count": count_check,
                            "json_safety": json_check,
                            "performance": perf_check,
                            "arabic_content": arabic_check
                        },
                        "response_data": response_data
                    }
                    
                except json.JSONDecodeError:
                    print(f"   ❌ JSON Decode Error: Response is not valid JSON")
                    return {"success": False, "error": "Invalid JSON response"}
                    
            else:
                print(f"   ❌ Response Status: {response.status_code} (FAILED - Expected 200)")
                try:
                    error_data = response.json()
                    print(f"   Error Details: {error_data}")
                except:
                    print(f"   Error Text: {response.text}")
                
                return {"success": False, "status_code": response.status_code, "error": response.text}
                
        except requests.exceptions.Timeout:
            print(f"   ❌ Request Timeout: Analysis took longer than 60 seconds")
            return {"success": False, "error": "Request timeout"}
            
        except Exception as e:
            print(f"   ❌ Request Error: {str(e)}")
            return {"success": False, "error": str(e)}

def main():
    print("🎯 اختبار سريع ومركز للمحرك الثوري 170+ تحليل - FINAL VALIDATION")
    print("=" * 80)
    print("**الهدف:** التحقق السريع من عمل المحرك الجديد بعد إصلاحات JSON serialization")
    print()
    
    tester = ArabicReviewTester()
    
    # Step 1: Login
    if tester.login_admin():
        # Step 2: Test Revolutionary Engine
        result = tester.test_revolutionary_engine_170()
        
        print(f"\n" + "=" * 80)
        print("🏁 FINAL SUMMARY:")
        
        if result["success"]:
            print(f"✅ TEST COMPLETED SUCCESSFULLY")
            print(f"📊 Success Rate: {result['success_rate']:.1f}%")
            print(f"⏱️  Duration: {result['duration']:.2f} seconds")
            print(f"🎯 Status: {result['status']}")
            
            print(f"\n📋 Detailed Results:")
            checks = result["checks"]
            for check_name, check_result in checks.items():
                status = "✅" if check_result else "❌"
                print(f"   {status} {check_name}: {'PASSED' if check_result else 'FAILED'}")
                
            if result["status"] == "EXCELLENT":
                print(f"\n🎉 CONCLUSION: المحرك الثوري يعمل بشكل ممتاز!")
            elif result["status"] == "GOOD":
                print(f"\n⚠️  CONCLUSION: المحرك الثوري يعمل مع مشاكل بسيطة")
            else:
                print(f"\n❌ CONCLUSION: المحرك الثوري يحتاج إلى إصلاحات")
                
        else:
            print(f"❌ TEST FAILED")
            print(f"🚨 Error: {result.get('error', 'Unknown error')}")
            if 'status_code' in result:
                print(f"📊 Status Code: {result['status_code']}")
            print(f"\n❌ CONCLUSION: المحرك الثوري لا يعمل - يحتاج إلى إصلاحات فورية!")
    else:
        print(f"\n❌ AUTHENTICATION FAILED - Cannot proceed with testing!")
        print(f"🚨 CRITICAL: Admin login not working!")

if __name__ == "__main__":
    main()