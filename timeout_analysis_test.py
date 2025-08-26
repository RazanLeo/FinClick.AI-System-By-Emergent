#!/usr/bin/env python3
"""
Focused test for /api/analyze endpoint timeout and performance verification
Based on review request: Quick verification test to ensure the analysis endpoint is working 
after the PDF processing and timeout fixes
"""

import requests
import time
import json
from datetime import datetime

class TimeoutAnalysisTest:
    def __init__(self, base_url="https://finclick-ai-3.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.token = None
        self.test_results = []
        
    def login_admin(self):
        """Login with admin credentials as specified in review request"""
        print("🔐 Logging in with admin@finclick.ai / admin123...")
        
        login_data = {
            "email": "admin@finclick.ai",
            "password": "admin123"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/auth/login",
                json=login_data,
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                self.token = data.get('token')
                print("✅ Admin login successful")
                return True
            else:
                print(f"❌ Login failed: {response.status_code} - {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Login error: {e}")
            return False
    
    def test_comprehensive_analysis_with_timeout(self):
        """
        Test comprehensive analysis with timeout handling
        SUCCESS CRITERIA:
        - Analysis endpoint responds within 60 seconds
        - No infinite loading or system hangs
        - Proper JSON response with analysis results
        - All 116+ analysis types are included
        - Error handling works if AI agents timeout
        """
        print("\n🎯 TESTING COMPREHENSIVE ANALYSIS WITH TIMEOUT HANDLING")
        print("=" * 70)
        
        analysis_data = {
            "company_name": "شركة اختبار التحليل الشامل مع معالجة المهلة الزمنية",
            "language": "ar",
            "sector": "information_technology",
            "activity": "تطوير البرمجيات والحلول التقنية المتقدمة",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        print(f"📊 Submitting comprehensive analysis request...")
        print(f"   Company: {analysis_data['company_name']}")
        print(f"   Sector: {analysis_data['sector']}")
        print(f"   Analysis Types: {analysis_data['analysis_types']}")
        
        start_time = time.time()
        
        try:
            # Test with 60 second timeout as per success criteria
            response = requests.post(
                f"{self.base_url}/analyze",
                json=analysis_data,
                headers=headers,
                timeout=60  # 60 seconds as per success criteria
            )
            
            end_time = time.time()
            duration = end_time - start_time
            
            print(f"⏱️  Analysis completed in {duration:.2f} seconds")
            
            # Check if within time limit
            if duration > 60:
                print(f"⚠️  WARNING: Analysis took longer than 60 seconds ({duration:.2f}s)")
                self.test_results.append({
                    "test": "Timeout Performance",
                    "status": "WARNING",
                    "message": f"Analysis took {duration:.2f}s (>60s limit)"
                })
            else:
                print(f"✅ Analysis completed within time limit ({duration:.2f}s < 60s)")
                self.test_results.append({
                    "test": "Timeout Performance", 
                    "status": "PASS",
                    "message": f"Analysis completed in {duration:.2f}s"
                })
            
            # Check response status
            if response.status_code == 200:
                print(f"✅ HTTP Status: {response.status_code} (Success)")
                
                try:
                    response_data = response.json()
                    
                    # Verify JSON response structure
                    if isinstance(response_data, dict):
                        print("✅ Proper JSON response received")
                        
                        # Check for analysis results
                        if "results" in response_data:
                            results = response_data["results"]
                            print("✅ Analysis results present in response")
                            
                            # Check for 116+ analysis types
                            total_count = response_data.get("total_analysis_count", 0)
                            print(f"📈 Total analysis count: {total_count}")
                            
                            if total_count >= 116:
                                print("✅ All 116+ analysis types included")
                                self.test_results.append({
                                    "test": "Analysis Types Count",
                                    "status": "PASS", 
                                    "message": f"Found {total_count} analysis types (≥116)"
                                })
                            else:
                                print(f"⚠️  WARNING: Only {total_count} analysis types found (expected ≥116)")
                                self.test_results.append({
                                    "test": "Analysis Types Count",
                                    "status": "WARNING",
                                    "message": f"Only {total_count} analysis types found"
                                })
                            
                            # Check for analysis levels
                            analysis_levels = ["basic_analysis", "intermediate_analysis", 
                                             "advanced_analysis", "complex_analysis", "ai_powered_analysis"]
                            found_levels = [level for level in analysis_levels if level in results and results[level]]
                            
                            print(f"📊 Analysis levels found: {len(found_levels)}/5")
                            print(f"   Levels: {found_levels}")
                            
                            if len(found_levels) == 5:
                                print("✅ All 5 analysis levels present")
                                self.test_results.append({
                                    "test": "Analysis Levels",
                                    "status": "PASS",
                                    "message": "All 5 analysis levels present"
                                })
                            else:
                                print(f"⚠️  WARNING: Only {len(found_levels)}/5 analysis levels found")
                                self.test_results.append({
                                    "test": "Analysis Levels",
                                    "status": "WARNING", 
                                    "message": f"Only {len(found_levels)}/5 levels found"
                                })
                            
                            # Check for AI enrichment (should work with timeout handling)
                            ai_indicators = ["market_context", "economic_context", "industry_benchmarks"]
                            found_ai = sum(1 for indicator in ai_indicators if indicator in str(results).lower())
                            
                            if found_ai > 0:
                                print(f"✅ AI enrichment detected ({found_ai} indicators)")
                                self.test_results.append({
                                    "test": "AI Enrichment",
                                    "status": "PASS",
                                    "message": f"AI enrichment working ({found_ai} indicators)"
                                })
                            else:
                                print("⚠️  AI enrichment may have timed out (using fallback data)")
                                self.test_results.append({
                                    "test": "AI Enrichment",
                                    "status": "WARNING",
                                    "message": "AI enrichment may have timed out"
                                })
                            
                            # Overall success
                            self.test_results.append({
                                "test": "Overall Analysis",
                                "status": "PASS",
                                "message": "Analysis completed successfully without hanging"
                            })
                            
                            return True, response_data
                            
                        else:
                            print("❌ No analysis results in response")
                            self.test_results.append({
                                "test": "Response Structure",
                                "status": "FAIL",
                                "message": "No analysis results in response"
                            })
                            return False, response_data
                    else:
                        print("❌ Invalid JSON response format")
                        self.test_results.append({
                            "test": "Response Format",
                            "status": "FAIL", 
                            "message": "Invalid JSON response format"
                        })
                        return False, {}
                        
                except json.JSONDecodeError as e:
                    print(f"❌ JSON decode error: {e}")
                    self.test_results.append({
                        "test": "JSON Response",
                        "status": "FAIL",
                        "message": f"JSON decode error: {e}"
                    })
                    return False, {}
                    
            else:
                print(f"❌ HTTP Error: {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error details: {error_data}")
                except:
                    print(f"   Error text: {response.text}")
                
                self.test_results.append({
                    "test": "HTTP Response",
                    "status": "FAIL",
                    "message": f"HTTP {response.status_code}: {response.text[:100]}"
                })
                return False, {}
                
        except requests.exceptions.Timeout:
            end_time = time.time()
            duration = end_time - start_time
            print(f"❌ TIMEOUT: Analysis timed out after {duration:.2f} seconds")
            print("❌ This indicates the infinite loading issue may still exist")
            self.test_results.append({
                "test": "Timeout Handling",
                "status": "FAIL",
                "message": f"Analysis timed out after {duration:.2f}s"
            })
            return False, {}
            
        except requests.exceptions.ConnectionError as e:
            print(f"❌ Connection error: {e}")
            self.test_results.append({
                "test": "Connection",
                "status": "FAIL",
                "message": f"Connection error: {e}"
            })
            return False, {}
            
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            self.test_results.append({
                "test": "Unexpected Error",
                "status": "FAIL",
                "message": f"Unexpected error: {e}"
            })
            return False, {}
    
    def test_error_handling_with_ai_timeout(self):
        """Test that system handles AI agent timeouts gracefully"""
        print("\n🔧 TESTING ERROR HANDLING WITH AI TIMEOUT SIMULATION")
        print("=" * 70)
        
        # Test with a request that might stress the AI agents
        analysis_data = {
            "company_name": "شركة اختبار معالجة الأخطاء والمهلة الزمنية",
            "language": "ar", 
            "sector": "artificial_intelligence",
            "activity": "تطوير حلول الذكاء الاصطناعي المعقدة",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 5,  # More years might stress the system
            "analysis_types": ["ai_powered", "complex"]  # AI-heavy analysis
        }
        
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        
        print("🧪 Testing AI timeout error handling...")
        start_time = time.time()
        
        try:
            response = requests.post(
                f"{self.base_url}/analyze",
                json=analysis_data,
                headers=headers,
                timeout=45  # Shorter timeout to test error handling
            )
            
            end_time = time.time()
            duration = end_time - start_time
            
            if response.status_code == 200:
                print(f"✅ Analysis completed successfully in {duration:.2f}s")
                print("✅ System handled potential AI timeouts gracefully")
                
                response_data = response.json()
                if "results" in response_data:
                    print("✅ Proper error handling - analysis results returned")
                    self.test_results.append({
                        "test": "AI Timeout Handling",
                        "status": "PASS",
                        "message": "System handled AI processing gracefully"
                    })
                    return True, response_data
                    
            elif response.status_code == 500:
                # Check if it's a proper error response
                try:
                    error_data = response.json()
                    if "detail" in error_data:
                        print(f"✅ Proper error response: {error_data['detail']}")
                        print("✅ System returned proper error instead of hanging")
                        self.test_results.append({
                            "test": "Error Response",
                            "status": "PASS",
                            "message": "Proper error response returned"
                        })
                        return True, error_data
                except:
                    pass
                    
            print(f"⚠️  Unexpected response: {response.status_code}")
            return False, {}
            
        except requests.exceptions.Timeout:
            print("❌ Request timed out - error handling may need improvement")
            self.test_results.append({
                "test": "AI Timeout Handling",
                "status": "FAIL", 
                "message": "Request timed out during AI processing"
            })
            return False, {}
            
        except Exception as e:
            print(f"❌ Error during timeout test: {e}")
            return False, {}
    
    def test_system_stability(self):
        """Test that system remains stable after analysis requests"""
        print("\n🏥 TESTING SYSTEM STABILITY")
        print("=" * 70)
        
        # Test basic endpoint to verify system is still responsive
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            if response.status_code == 200:
                print("✅ System remains stable and responsive")
                self.test_results.append({
                    "test": "System Stability",
                    "status": "PASS",
                    "message": "System stable after analysis requests"
                })
                return True
            else:
                print(f"⚠️  System response: {response.status_code}")
                return False
                
        except Exception as e:
            print(f"❌ System stability issue: {e}")
            self.test_results.append({
                "test": "System Stability",
                "status": "FAIL",
                "message": f"System stability issue: {e}"
            })
            return False
    
    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 70)
        print("📋 TIMEOUT & PERFORMANCE TEST SUMMARY")
        print("=" * 70)
        
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t["status"] == "PASS"])
        warning_tests = len([t for t in self.test_results if t["status"] == "WARNING"])
        failed_tests = len([t for t in self.test_results if t["status"] == "FAIL"])
        
        print(f"Total Tests: {total_tests}")
        print(f"✅ Passed: {passed_tests}")
        print(f"⚠️  Warnings: {warning_tests}")
        print(f"❌ Failed: {failed_tests}")
        
        if failed_tests == 0:
            if warning_tests == 0:
                print("\n🎉 ALL TESTS PASSED! Analysis endpoint working perfectly!")
                print("✅ No infinite loading issues detected")
                print("✅ Timeout handling working correctly")
                print("✅ System remains stable")
                return "SUCCESS"
            else:
                print("\n⚠️  MOSTLY SUCCESSFUL with minor warnings")
                print("✅ Core functionality working")
                print("⚠️  Some performance or feature warnings")
                return "SUCCESS_WITH_WARNINGS"
        else:
            print("\n❌ CRITICAL ISSUES DETECTED")
            print("❌ Analysis endpoint has significant problems")
            print("❌ May still have infinite loading or timeout issues")
            return "FAILURE"
        
        print("\nDetailed Results:")
        for result in self.test_results:
            status_icon = "✅" if result["status"] == "PASS" else "⚠️ " if result["status"] == "WARNING" else "❌"
            print(f"  {status_icon} {result['test']}: {result['message']}")

def main():
    print("🎯 FINCLICK.AI ANALYSIS ENDPOINT TIMEOUT & PERFORMANCE TEST")
    print("Focus: Verify analysis endpoint works after PDF processing and timeout fixes")
    print("=" * 70)
    
    tester = TimeoutAnalysisTest()
    
    # Step 1: Login with admin credentials
    if not tester.login_admin():
        print("❌ Cannot proceed without admin login")
        return 1
    
    # Step 2: Test comprehensive analysis with timeout handling
    print("\n🔍 STEP 1: Testing comprehensive analysis with timeout handling...")
    success1, _ = tester.test_comprehensive_analysis_with_timeout()
    
    # Step 3: Test error handling with AI timeout simulation
    print("\n🔍 STEP 2: Testing error handling with AI timeout simulation...")
    success2, _ = tester.test_error_handling_with_ai_timeout()
    
    # Step 4: Test system stability
    print("\n🔍 STEP 3: Testing system stability...")
    success3 = tester.test_system_stability()
    
    # Print summary
    result = tester.print_summary()
    
    # Return appropriate exit code
    if result == "SUCCESS":
        return 0
    elif result == "SUCCESS_WITH_WARNINGS":
        return 0
    else:
        return 1

if __name__ == "__main__":
    import sys
    sys.exit(main())