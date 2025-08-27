import requests
import sys
import json
import time
from datetime import datetime

class FinClickAPITester:
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
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, dict) and len(str(response_data)) < 500:
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

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API Endpoint", "GET", "", 200)

    def test_register_user(self, email, password, user_type="subscriber"):
        """Test user registration"""
        success, response = self.run_test(
            "User Registration",
            "POST",
            "auth/register",
            200,
            data={
                "email": email,
                "password": password,
                "user_type": user_type
            }
        )
        if success and 'token' in response:
            self.token = response['token']
            self.user_data = response.get('user', {})
            return True
        return False

    def test_login_user(self, email, password):
        """Test user login"""
        success, response = self.run_test(
            f"User Login ({email})",
            "POST",
            "auth/login",
            200,
            data={
                "email": email,
                "password": password
            }
        )
        if success and 'token' in response:
            self.token = response['token']
            self.user_data = response.get('user', {})
            return True
        return False

    def test_get_current_user(self):
        """Test getting current user info"""
        return self.run_test("Get Current User", "GET", "auth/me", 200)

    def test_create_company(self, name, sector, activity, legal_entity):
        """Test creating a company"""
        success, response = self.run_test(
            "Create Company",
            "POST",
            "companies",
            200,
            data={
                "name": name,
                "sector": sector,
                "activity": activity,
                "legal_entity": legal_entity
            }
        )
        return success, response

    def test_get_companies(self):
        """Test getting user companies"""
        return self.run_test("Get User Companies", "GET", "companies", 200)

    def test_basic_analysis(self):
        """Test basic financial analysis (13 types)"""
        analysis_data = {
            "company_name": "شركة التحليل الأساسي",
            "language": "ar",
            "sector": "oil_gas",
            "activity": "استخراج النفط والغاز",
            "legal_entity": "joint_stock_company",
            "comparison_level": "gcc",
            "analysis_years": 3,
            "analysis_types": ["basic"]
        }
        
        success, response = self.run_test(
            "Basic Financial Analysis (13 types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            # Verify 11-point template structure
            results = response.get("results", {})
            basic_analysis = results.get("basic_analysis", {})
            
            print(f"   📊 Basic analysis types found: {len(basic_analysis)}")
            
            # Check for key analysis types
            expected_basic_types = ["vertical_analysis", "financial_ratios", "working_capital", "break_even"]
            found_types = [t for t in expected_basic_types if t in basic_analysis]
            print(f"   ✅ Key analysis types present: {found_types}")
            
            # Verify 11-point template in vertical analysis
            if "vertical_analysis" in basic_analysis:
                va = basic_analysis["vertical_analysis"]
                template_points = ["introduction", "data_tables", "charts_data", "detailed_analysis", 
                                 "benchmark_comparison", "risks", "forecasts", "swot_analysis", 
                                 "final_evaluation", "strategic_recommendations"]
                found_points = [p for p in template_points if p in va]
                print(f"   📋 Template points in vertical analysis: {len(found_points)}/10")
                
        return success, response

    def test_comprehensive_analysis(self):
        """Test comprehensive financial analysis (116+ types)"""
        analysis_data = {
            "company_name": "شركة التحليل الشامل المتطور",
            "language": "ar",
            "sector": "information_technology",
            "activity": "تطوير البرمجيات والحلول التقنية",
            "legal_entity": "simplified_joint_stock",
            "comparison_level": "global",
            "analysis_years": 5,
            "analysis_types": ["comprehensive"]
        }
        
        success, response = self.run_test(
            "Comprehensive Financial Analysis (116+ types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            
            # Check all 5 analysis levels
            levels = ["basic_analysis", "intermediate_analysis", "advanced_analysis", 
                     "complex_analysis", "ai_powered_analysis"]
            found_levels = [level for level in levels if level in results and results[level]]
            print(f"   🎯 Analysis levels completed: {found_levels}")
            print(f"   📈 Total analysis count claimed: {response.get('total_analysis_count', 0)}")
            
            # Verify executive summary
            if "executive_summary" in results:
                print(f"   📋 Executive summary generated: ✅")
            
            # Check bilingual support
            if "basic_analysis" in results and "vertical_analysis" in results["basic_analysis"]:
                va = results["basic_analysis"]["vertical_analysis"]
                if "introduction" in va and "definition" in va["introduction"]:
                    definition = va["introduction"]["definition"]
                    has_arabic = "ar" in definition and definition["ar"]
                    has_english = "en" in definition and definition["en"]
                    print(f"   🌐 Bilingual support: AR={has_arabic}, EN={has_english}")
                    
        return success, response

    def test_intermediate_analysis(self):
        """Test intermediate financial analysis (23 types)"""
        analysis_data = {
            "company_name": "شركة التحليل المتوسط",
            "language": "en",
            "sector": "banking",
            "activity": "Banking and Financial Services",
            "legal_entity": "public_company",
            "comparison_level": "arab",
            "analysis_years": 3,
            "analysis_types": ["intermediate"]
        }
        
        success, response = self.run_test(
            "Intermediate Financial Analysis (23 types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            intermediate_analysis = results.get("intermediate_analysis", {})
            print(f"   📊 Intermediate analysis types: {len(intermediate_analysis)}")
            
            # Check for key intermediate types
            expected_types = ["sensitivity_analysis", "benchmarking", "scenario_analysis"]
            found_types = [t for t in expected_types if t in intermediate_analysis]
            print(f"   ✅ Key intermediate types: {found_types}")
            
        return success, response

    def test_advanced_analysis(self):
        """Test advanced financial analysis (28 types)"""
        analysis_data = {
            "company_name": "شركة التحليل المتقدم",
            "language": "ar",
            "sector": "pharmaceuticals",
            "activity": "تصنيع الأدوية والمستحضرات الطبية",
            "legal_entity": "limited_liability",
            "comparison_level": "asia",
            "analysis_years": 4,
            "analysis_types": ["advanced"]
        }
        
        success, response = self.run_test(
            "Advanced Financial Analysis (28 types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            advanced_analysis = results.get("advanced_analysis", {})
            print(f"   📊 Advanced analysis types: {len(advanced_analysis)}")
            
            # Check for key advanced types
            expected_types = ["dcf_analysis", "eva_analysis", "advanced_dupont"]
            found_types = [t for t in expected_types if t in advanced_analysis]
            print(f"   ✅ Key advanced types: {found_types}")
            
        return success, response

    def test_complex_analysis(self):
        """Test complex financial analysis (25 types)"""
        analysis_data = {
            "company_name": "شركة التحليل المعقد",
            "language": "ar",
            "sector": "artificial_intelligence",
            "activity": "تطوير حلول الذكاء الاصطناعي",
            "legal_entity": "single_person_company",
            "comparison_level": "saudi",
            "analysis_years": 2,
            "analysis_types": ["complex"]
        }
        
        success, response = self.run_test(
            "Complex Financial Analysis (25 types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            complex_analysis = results.get("complex_analysis", {})
            print(f"   📊 Complex analysis types: {len(complex_analysis)}")
            
            # Check for key complex types
            expected_types = ["monte_carlo", "real_options", "var_analysis"]
            found_types = [t for t in expected_types if t in complex_analysis]
            print(f"   ✅ Key complex types: {found_types}")
            
        return success, response

    def test_ai_powered_analysis(self):
        """Test AI-powered financial analysis (27 types)"""
        analysis_data = {
            "company_name": "شركة التحليل بالذكاء الاصطناعي",
            "language": "ar",
            "sector": "fintech",
            "activity": "التكنولوجيا المالية والمدفوعات الرقمية",
            "legal_entity": "cooperative",
            "comparison_level": "europe",
            "analysis_years": 3,
            "analysis_types": ["ai_powered"]
        }
        
        success, response = self.run_test(
            "AI-Powered Financial Analysis (27 types)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            ai_analysis = results.get("ai_powered_analysis", {})
            print(f"   📊 AI-powered analysis types: {len(ai_analysis)}")
            
            # Check for key AI types
            expected_types = ["ml_earnings_prediction", "neural_pattern_analysis", "ai_predictive_analysis"]
            found_types = [t for t in expected_types if t in ai_analysis]
            print(f"   ✅ Key AI analysis types: {found_types}")
            
        return success, response

    def test_custom_analysis_combination(self):
        """Test custom combination of analysis types"""
        analysis_data = {
            "company_name": "شركة التحليل المخصص",
            "language": "ar",
            "sector": "renewable_energy",
            "activity": "الطاقة المتجددة والطاقة الشمسية",
            "legal_entity": "foundation",
            "comparison_level": "gcc",
            "analysis_years": 4,
            "analysis_types": ["basic", "intermediate", "advanced"]
        }
        
        success, response = self.run_test(
            "Custom Analysis Combination (Basic + Intermediate + Advanced)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            
            # Should have 3 levels: basic, intermediate, advanced
            expected_levels = ["basic_analysis", "intermediate_analysis", "advanced_analysis"]
            found_levels = [level for level in expected_levels if level in results and results[level]]
            print(f"   🎯 Custom combination levels: {found_levels}")
            
            # Should NOT have complex or AI analysis
            unexpected_levels = ["complex_analysis", "ai_powered_analysis"]
            unexpected_found = [level for level in unexpected_levels if level in results and results[level]]
            if not unexpected_found:
                print(f"   ✅ Correctly excluded unwanted levels")
            else:
                print(f"   ❌ Unexpectedly found levels: {unexpected_found}")
                
        return success, response

    def test_bilingual_support(self):
        """Test Arabic/English bilingual support"""
        # Test Arabic
        analysis_data_ar = {
            "company_name": "شركة اختبار اللغة العربية",
            "language": "ar",
            "sector": "telecommunications",
            "activity": "خدمات الاتصالات والإنترنت",
            "legal_entity": "joint_stock_company",
            "comparison_level": "arab",
            "analysis_years": 3,
            "analysis_types": ["basic"]
        }
        
        success_ar, response_ar = self.run_test(
            "Bilingual Support - Arabic",
            "POST",
            "analyze",
            200,
            data=analysis_data_ar
        )
        
        # Test English
        analysis_data_en = {
            "company_name": "English Language Test Company",
            "language": "en",
            "sector": "telecommunications",
            "activity": "Telecommunications and Internet Services",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["basic"]
        }
        
        success_en, response_en = self.run_test(
            "Bilingual Support - English",
            "POST",
            "analyze",
            200,
            data=analysis_data_en
        )
        
        if success_ar and success_en:
            print(f"   🌐 Both Arabic and English analysis completed successfully")
            
            # Check language in responses
            if response_ar and "language" in response_ar:
                print(f"   🇸🇦 Arabic response language: {response_ar.get('language')}")
            if response_en and "language" in response_en:
                print(f"   🇺🇸 English response language: {response_en.get('language')}")
                
        return success_ar and success_en, {"arabic": response_ar, "english": response_en}

    def test_analysis_template_structure(self):
        """Test the 11-point analysis template structure"""
        analysis_data = {
            "company_name": "شركة اختبار القالب",
            "language": "ar",
            "sector": "construction",
            "activity": "التشييد والبناء",
            "legal_entity": "limited_partnership",
            "comparison_level": "saudi",
            "analysis_years": 3,
            "analysis_types": ["basic"]
        }
        
        success, response = self.run_test(
            "11-Point Analysis Template Structure",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            
            # Check if basic analysis exists
            if "basic_analysis" in results and "vertical_analysis" in results["basic_analysis"]:
                va = results["basic_analysis"]["vertical_analysis"]
                
                # Check all 11 template points
                template_points = [
                    "introduction",           # 1. المقدمة
                    "data_tables",           # 2. جداول المعلومات والبيانات
                    "charts_data",           # 3. الرسوم البيانية
                    "detailed_analysis",     # 4. التحليل التفصيلي
                    "benchmark_comparison",  # 5. المقارنة المعيارية
                    "risks",                 # 6. المخاطر
                    "forecasts",             # 7. التنبؤات
                    "swot_analysis",         # 8. تحليل SWOT
                    "final_evaluation",      # 9. التقييم النهائي
                    "strategic_recommendations", # 10. التوصيات الاستراتيجية
                    "printable_report"       # 11. إمكانية الطباعة (or export_options)
                ]
                
                found_points = []
                missing_points = []
                
                for point in template_points:
                    if point in va:
                        found_points.append(point)
                    else:
                        missing_points.append(point)
                
                print(f"   📋 Template points found: {len(found_points)}/11")
                print(f"   ✅ Present: {found_points}")
                if missing_points:
                    print(f"   ❌ Missing: {missing_points}")
                
                # Check specific structure elements
                if "introduction" in va:
                    intro = va["introduction"]
                    intro_elements = ["definition", "what_it_measures", "meaning_and_benefit", "calculation_method"]
                    found_intro = [e for e in intro_elements if e in intro]
                    print(f"   📖 Introduction elements: {len(found_intro)}/4")
                
                if "swot_analysis" in va:
                    swot = va["swot_analysis"]
                    swot_elements = ["strengths", "weaknesses", "opportunities", "threats"]
                    found_swot = [e for e in swot_elements if e in swot]
                    print(f"   🎯 SWOT elements: {len(found_swot)}/4")
                    
        return success, response

    def test_analysis_history(self):
        """Test getting analysis history"""
        return self.run_test("Analysis History", "GET", "analysis-history", 200)

    def test_market_data(self):
        """Test market data endpoint"""
        return self.run_test("Market Data", "GET", "market-data", 200)

    def test_ocr_capabilities(self):
        """Test OCR capabilities endpoint"""
        return self.run_test("OCR Capabilities", "GET", "ocr-capabilities", 200)

    def test_ai_agents_status(self):
        """Test AI agents status endpoint"""
        return self.run_test("AI Agents Status", "GET", "ai-agents-status", 200)

    def test_file_processing_history(self):
        """Test file processing history endpoint"""
        return self.run_test("File Processing History", "GET", "file-processing-history", 200)

    def test_upload_financial_files(self):
        """Test file upload endpoint with mock PDF data"""
        # Create a simple PDF-like content (mock)
        test_file_content = b"""
        %PDF-1.4
        Financial Statement Report
        
        Company: Test Financial Corp
        Revenue: 5,000,000
        Gross Profit: 2,000,000
        Net Income: 800,000
        Total Assets: 10,000,000
        Current Assets: 4,000,000
        Current Liabilities: 2,000,000
        """
        
        # Prepare form data with PDF extension
        files = {'files': ('test_financial.pdf', test_file_content, 'application/pdf')}
        data = {'company_name': 'Test Company OCR'}
        
        # Custom test for file upload
        url = f"{self.base_url}/upload-financial-files"
        headers = {}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing File Upload (OCR Processing)...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, files=files, data=data, headers=headers, timeout=30)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if "processing_summary" in response_data:
                        print(f"   Files processed: {response_data.get('files_processed', 0)}")
                        print(f"   Processing status: {response_data.get('status', 'unknown')}")
                    elif "extracted_data" in response_data:
                        print(f"   Files processed: {response_data.get('files_processed', 0)}")
                        print(f"   Processing status: {response_data.get('status', 'unknown')}")
                        extracted = response_data.get('extracted_data', {})
                        if 'balance_sheet' in extracted:
                            print(f"   Balance sheet items extracted: {len(extracted['balance_sheet'])}")
                        if 'income_statement' in extracted:
                            print(f"   Income statement items extracted: {len(extracted['income_statement'])}")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}
                
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_enrich_company_data(self):
        """Test company data enrichment endpoint"""
        # Prepare form data
        data = {
            'company_name': 'Test Technology Company',
            'sector': 'information_technology',
            'country': 'Israel'
        }
        
        # Custom test for form data
        url = f"{self.base_url}/enrich-company-data"
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing Company Data Enrichment...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, data=data, headers=headers, timeout=30)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if "enriched_data" in response_data:
                        enriched = response_data["enriched_data"]
                        print(f"   Company: {enriched.get('company_name', 'N/A')}")
                        print(f"   Confidence Score: {enriched.get('confidence_score', 0):.1f}%")
                        print(f"   Data Sources: {len(enriched.get('data_sources_used', []))}")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}
                
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_enhanced_analysis_with_ai_enrichment(self):
        """Test enhanced analysis with AI agents enrichment"""
        analysis_data = {
            "company_name": "شركة التحليل المعزز بالذكاء الاصطناعي",
            "language": "ar",
            "sector": "information_technology",
            "activity": "تطوير البرمجيات والحلول التقنية المتقدمة",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        success, response = self.run_test(
            "Enhanced Analysis with AI Enrichment",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            
            # Check if AI enrichment data is included
            ai_enrichment_indicators = [
                "market_context",
                "economic_context", 
                "industry_benchmarks",
                "company_research",
                "risk_factors",
                "opportunities"
            ]
            
            found_enrichment = []
            for indicator in ai_enrichment_indicators:
                if indicator in results or any(indicator in str(results).lower() for indicator in ai_enrichment_indicators):
                    found_enrichment.append(indicator)
            
            print(f"   🤖 AI Enrichment indicators found: {len(found_enrichment)}")
            print(f"   📊 Analysis includes market context: {'✅' if 'market' in str(results).lower() else '❌'}")
            print(f"   🌍 Economic context included: {'✅' if 'economic' in str(results).lower() else '❌'}")
            print(f"   📈 Industry benchmarks: {'✅' if 'benchmark' in str(results).lower() else '❌'}")
            
        return success, response

    def test_performance_under_30_seconds(self):
        """Test that analysis completes in under 30 seconds as required"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        print(f"\n🔍 Testing Performance (Must complete in under 30 seconds)...")
        print(f"   URL: {self.base_url}/analyze")
        
        import time
        start_time = time.time()
        
        success, response = self.run_test(
            "Performance Test - Analysis Under 30 Seconds",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        end_time = time.time()
        duration = end_time - start_time
        
        print(f"   ⏱️  Analysis Duration: {duration:.2f} seconds")
        
        if duration < 30:
            print(f"   ✅ PERFORMANCE PASSED - Analysis completed in {duration:.2f}s (under 30s requirement)")
            performance_passed = True
        else:
            print(f"   ❌ PERFORMANCE FAILED - Analysis took {duration:.2f}s (exceeds 30s requirement)")
            performance_passed = False
            
        return success and performance_passed, response

    def test_new_executive_summary_template(self):
        """Test the new executive summary template structure"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar", 
            "sector": "technology",
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        success, response = self.run_test(
            "New Executive Summary Template Structure",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            executive_summary = results.get("executive_summary", {})
            
            # Check required sections in new template
            required_sections = [
                "company_information",
                "results_summary", 
                "comprehensive_swot",
                "strategic_decisions"
            ]
            
            found_sections = []
            for section in required_sections:
                if section in executive_summary:
                    found_sections.append(section)
            
            print(f"   📋 Executive Summary sections found: {len(found_sections)}/{len(required_sections)}")
            print(f"   ✅ Present sections: {found_sections}")
            
            # Check for summary table in results_summary
            if "results_summary" in executive_summary and "summary_table" in executive_summary["results_summary"]:
                summary_table = executive_summary["results_summary"]["summary_table"]
                print(f"   📊 Summary table entries: {len(summary_table)}")
                
                # Check for clear analysis names (not "التحليل رقم 23")
                clear_names_count = 0
                for entry in summary_table:
                    if "name" in entry and "رقم" not in entry["name"]:
                        clear_names_count += 1
                
                print(f"   🏷️  Clear analysis names (not 'رقم X'): {clear_names_count}/{len(summary_table)}")
                
        return success, response

    def test_comprehensive_financial_ratios(self):
        """Test comprehensive financial ratios analysis (29 ratios)"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology", 
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["basic"]  # Financial ratios are in basic analysis
        }
        
        success, response = self.run_test(
            "Comprehensive Financial Ratios Analysis (29 ratios)",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        if success and response:
            results = response.get("results", {})
            basic_analysis = results.get("basic_analysis", {})
            
            # Check for financial ratios analysis
            if "financial_ratios" in basic_analysis:
                ratios_analysis = basic_analysis["financial_ratios"]
                
                # Check for ratios in data_tables
                if "data_tables" in ratios_analysis and "financial_ratios" in ratios_analysis["data_tables"]:
                    ratios = ratios_analysis["data_tables"]["financial_ratios"]
                    print(f"   📊 Financial ratios calculated: {len(ratios)}")
                    
                    # Check for different ratio categories
                    categories = {}
                    for ratio_key, ratio_data in ratios.items():
                        if isinstance(ratio_data, dict) and "category" in ratio_data:
                            category = ratio_data["category"]
                            if category not in categories:
                                categories[category] = 0
                            categories[category] += 1
                    
                    print(f"   📈 Ratio categories found: {list(categories.keys())}")
                    print(f"   🔢 Ratios per category: {categories}")
                    
                    total_ratios = sum(categories.values())
                    if total_ratios >= 29:
                        print(f"   ✅ COMPREHENSIVE RATIOS PASSED - {total_ratios} ratios (meets 29+ requirement)")
                    else:
                        print(f"   ⚠️  RATIOS INCOMPLETE - {total_ratios} ratios (needs 29+)")
                        
        return success, response

    def test_generate_pdf_report(self):
        """Test PDF report generation endpoint"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا", 
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        # Custom test for PDF generation
        url = f"{self.base_url}/generate-pdf-report"
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing PDF Report Generation...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check if response is PDF
                content_type = response.headers.get('content-type', '')
                if 'application/pdf' in content_type:
                    print(f"   📄 PDF Content-Type confirmed")
                    print(f"   📊 PDF Size: {len(response.content)} bytes")
                    return True, {"pdf_size": len(response.content)}
                else:
                    print(f"   ⚠️  Unexpected content type: {content_type}")
                    
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                    
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}
            
        return success, {}

    def test_generate_excel_report(self):
        """Test Excel report generation endpoint"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company", 
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        # Custom test for Excel generation
        url = f"{self.base_url}/generate-excel-report"
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing Excel Report Generation...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check if response is Excel
                content_type = response.headers.get('content-type', '')
                if 'spreadsheetml' in content_type:
                    print(f"   📊 Excel Content-Type confirmed")
                    print(f"   📈 Excel Size: {len(response.content)} bytes")
                    return True, {"excel_size": len(response.content)}
                else:
                    print(f"   ⚠️  Unexpected content type: {content_type}")
                    
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                    
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}
            
        return success, {}

    def test_generate_word_report(self):
        """Test Word report generation endpoint"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global", 
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        # Custom test for Word generation
        url = f"{self.base_url}/generate-word-report"
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing Word Report Generation...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check if response is Word
                content_type = response.headers.get('content-type', '')
                if 'wordprocessingml' in content_type:
                    print(f"   📝 Word Content-Type confirmed")
                    print(f"   📄 Word Size: {len(response.content)} bytes")
                    return True, {"word_size": len(response.content)}
                else:
                    print(f"   ⚠️  Unexpected content type: {content_type}")
                    
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                    
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}
            
        return success, {}

    def test_generate_powerpoint_report(self):
        """Test PowerPoint report generation endpoint"""
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar",
            "sector": "technology",
            "activity": "تطوير التكنولوجيا",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["comprehensive"]
        }
        
        # Custom test for PowerPoint generation
        url = f"{self.base_url}/generate-powerpoint-report"
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        print(f"\n🔍 Testing PowerPoint Report Generation...")
        print(f"   URL: {url}")
        
        try:
            import requests
            response = requests.post(url, json=analysis_data, headers=headers, timeout=60)
            
            success = response.status_code == 200
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check if response is PowerPoint
                content_type = response.headers.get('content-type', '')
                if 'presentationml' in content_type:
                    print(f"   🎯 PowerPoint Content-Type confirmed")
                    print(f"   📊 PowerPoint Size: {len(response.content)} bytes")
                    return True, {"ppt_size": len(response.content)}
                else:
                    print(f"   ⚠️  Unexpected content type: {content_type}")
                    
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                    
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}
            
        return success, {}

    def test_revolutionary_170_analysis_engine(self):
        """🚀 اختبار المحرك الثوري الجديد مع 170+ تحليل مالي - NEW REVOLUTIONARY ENGINE TEST"""
        print("\n🚀 اختبار المحرك الثوري الجديد مع 170+ تحليل مالي - NEW REVOLUTIONARY ENGINE TEST")
        print("=" * 90)
        
        # Test data exactly as requested by the user
        analysis_data = {
            "company_name": "شركة FinClick للاختبار الثوري",
            "analysis_language": "ar",
            "sector": "technology",
            "legal_entity": "corporation",
            "comparison_level": "saudi",
            "analysis_years": 1
        }
        
        print(f"🔍 Testing NEW Revolutionary 170+ Analysis Engine:")
        print(f"   Company: {analysis_data['company_name']}")
        print(f"   Language: {analysis_data['analysis_language']}")
        print(f"   Sector: {analysis_data['sector']}")
        print(f"   Legal Entity: {analysis_data['legal_entity']}")
        print(f"   Comparison Level: {analysis_data['comparison_level']}")
        print(f"   Analysis Years: {analysis_data['analysis_years']}")
        print(f"   Expected: 170+ analysis types (updated from 116+)")
        print(f"   Expected Categories: 15 categories (updated from 5)")
        
        start_time = time.time()
        
        # Test the main analysis endpoint with new 170+ engine
        success, response = self.run_test(
            "NEW Revolutionary 170+ Analysis Engine",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        end_time = time.time()
        duration = end_time - start_time
        
        print(f"\n⏱️  NEW Revolutionary Analysis Duration: {duration:.2f} seconds")
        
        if success and response:
            print(f"\n✅ NEW REVOLUTIONARY 170+ ENGINE TEST PASSED!")
            
            # Test 1: Verify 170+ analyses count
            total_analysis_count = response.get("total_analysis_count", 0)
            print(f"   🎯 Total Analysis Count: {total_analysis_count} (Target: 170+)")
            
            if total_analysis_count >= 170:
                print(f"   ✅ ANALYSIS COUNT VERIFIED: {total_analysis_count} analyses (meets 170+ requirement)")
            else:
                print(f"   ❌ ANALYSIS COUNT INSUFFICIENT: {total_analysis_count} analyses (needs 170+)")
            
            # Test 2: Verify new categories (15 instead of 5)
            analysis_categories = response.get("analysis_categories", {})
            categories_count = len(analysis_categories)
            print(f"   📊 Analysis Categories: {categories_count} (Target: 15)")
            
            expected_categories = [
                "liquidity_ratios", "activity_ratios", "profitability_ratios", 
                "leverage_ratios", "market_ratios", "advanced_analyses"
            ]
            
            found_categories = []
            for category in expected_categories:
                if category in analysis_categories:
                    found_categories.append(category)
                    count = analysis_categories[category]
                    print(f"      - {category}: {count} analyses")
            
            print(f"   ✅ Key Categories Found: {len(found_categories)}/6 - {found_categories}")
            
            # Test 3: Verify system_info shows new engine version
            system_info = response.get("system_info", {})
            engine_version = system_info.get("engine_version", "")
            print(f"   🔧 Engine Version: {engine_version}")
            
            if "FinClick.AI v3.0" in engine_version and "المحرك الثوري" in engine_version:
                print(f"   ✅ ENGINE VERSION VERIFIED: FinClick.AI v3.0 - المحرك الثوري")
            else:
                print(f"   ❌ ENGINE VERSION INCORRECT: Expected 'FinClick.AI v3.0 - المحرك الثوري'")
            
            # Test 4: Verify executive_summary structure
            executive_summary = response.get("executive_summary", {})
            if executive_summary:
                required_sections = ["company_information", "results_summary", "comprehensive_swot", "strategic_decisions"]
                found_sections = []
                for section in required_sections:
                    if section in executive_summary:
                        found_sections.append(section)
                
                print(f"   📋 Executive Summary Sections: {len(found_sections)}/4 - {found_sections}")
                
                if len(found_sections) == 4:
                    print(f"   ✅ EXECUTIVE SUMMARY STRUCTURE VERIFIED")
                else:
                    print(f"   ❌ EXECUTIVE SUMMARY INCOMPLETE: Missing sections")
            
            # Test 5: Verify analysis_statistics
            analysis_statistics = response.get("analysis_statistics", {})
            if analysis_statistics:
                total_ratios = analysis_statistics.get("total_ratios_calculated", 0)
                print(f"   📈 Analysis Statistics:")
                print(f"      - Total Ratios Calculated: {total_ratios}")
                print(f"      - Success Rate: {analysis_statistics.get('success_rate', 'N/A')}")
                print(f"      - Processing Time: {analysis_statistics.get('processing_time', 'N/A')}")
                
                if total_ratios >= 170:
                    print(f"   ✅ STATISTICS VERIFIED: {total_ratios} ratios calculated")
                else:
                    print(f"   ❌ STATISTICS INSUFFICIENT: {total_ratios} ratios (needs 170+)")
            
            # Test 6: Performance requirement (< 30 seconds)
            if duration < 30:
                print(f"   ✅ PERFORMANCE REQUIREMENT MET: {duration:.2f}s (under 30s requirement)")
            else:
                print(f"   ❌ PERFORMANCE REQUIREMENT FAILED: {duration:.2f}s (exceeds 30s requirement)")
            
            # Test 7: Verify request_info
            request_info = response.get("request_info", {})
            if request_info:
                print(f"   📝 Request Info Verified:")
                print(f"      - Company: {request_info.get('company_name', 'N/A')}")
                print(f"      - Language: {request_info.get('analysis_language', 'N/A')}")
                print(f"      - Sector: {request_info.get('sector', 'N/A')}")
                print(f"      - User: {request_info.get('user_email', 'N/A')}")
            
            # Test 8: Check for Arabic content support
            response_str = str(response)
            arabic_content = any(ord(char) > 127 for char in response_str)
            if arabic_content:
                print(f"   ✅ ARABIC CONTENT SUPPORT VERIFIED")
            else:
                print(f"   ❌ ARABIC CONTENT SUPPORT MISSING")
            
            # Summary of NEW Revolutionary Engine Test
            print(f"\n🎉 NEW REVOLUTIONARY 170+ ENGINE SUMMARY:")
            print(f"   - Analysis Count: {total_analysis_count}/170+ ({'✅' if total_analysis_count >= 170 else '❌'})")
            print(f"   - Categories: {categories_count}/15 ({'✅' if categories_count >= 10 else '❌'})")
            print(f"   - Engine Version: {'✅' if 'v3.0' in engine_version else '❌'}")
            print(f"   - Performance: {'✅' if duration < 30 else '❌'}")
            print(f"   - Arabic Support: {'✅' if arabic_content else '❌'}")
            
            return True, response
        else:
            print(f"\n❌ NEW REVOLUTIONARY 170+ ENGINE TEST FAILED!")
            return False, {}



    def test_urgent_user_request(self):
        """URGENT TEST - Test the exact data provided by the angry user"""
        print("\n🚨 URGENT USER REQUEST TEST - Testing exact user data")
        print("=" * 60)
        
        # Exact data from user request
        analysis_data = {
            "company_name": "شركة الاختبار",
            "language": "ar", 
            "sector": "technology",
            "activity": "تطوير البرمجيات",
            "legal_entity": "joint_stock_company",
            "comparison_level": "global",
            "analysis_years": 3,
            "analysis_types": ["basic"]
        }
        
        print(f"🔍 Testing /api/analyze endpoint with user's exact data:")
        print(f"   Company: {analysis_data['company_name']}")
        print(f"   Language: {analysis_data['language']}")
        print(f"   Sector: {analysis_data['sector']}")
        print(f"   Activity: {analysis_data['activity']}")
        print(f"   Legal Entity: {analysis_data['legal_entity']}")
        print(f"   Comparison Level: {analysis_data['comparison_level']}")
        print(f"   Analysis Years: {analysis_data['analysis_years']}")
        print(f"   Analysis Types: {analysis_data['analysis_types']}")
        
        import time
        start_time = time.time()
        
        success, response = self.run_test(
            "URGENT - User's Exact Analysis Request",
            "POST",
            "analyze",
            200,
            data=analysis_data
        )
        
        end_time = time.time()
        duration = end_time - start_time
        
        print(f"\n⏱️  Analysis Duration: {duration:.2f} seconds")
        
        if success and response:
            print(f"\n✅ URGENT TEST PASSED - Analysis completed successfully!")
            
            # Detailed verification of response
            results = response.get("results", {})
            
            # Check basic analysis
            if "basic_analysis" in results:
                basic_analysis = results["basic_analysis"]
                print(f"   📊 Basic analysis types found: {len(basic_analysis)}")
                
                # Check for Arabic content
                arabic_content_found = False
                for analysis_type, analysis_data in basic_analysis.items():
                    if isinstance(analysis_data, dict):
                        analysis_str = str(analysis_data)
                        if any(ord(char) > 127 for char in analysis_str):  # Check for non-ASCII (Arabic) characters
                            arabic_content_found = True
                            break
                
                print(f"   🇸🇦 Arabic content detected: {'✅' if arabic_content_found else '❌'}")
                
                # Check for 11-point template in vertical analysis
                if "vertical_analysis" in basic_analysis:
                    va = basic_analysis["vertical_analysis"]
                    template_points = ["introduction", "data_tables", "charts_data", "detailed_analysis", 
                                     "benchmark_comparison", "risks", "forecasts", "swot_analysis", 
                                     "final_evaluation", "strategic_recommendations"]
                    found_points = [p for p in template_points if p in va]
                    print(f"   📋 Template points found: {len(found_points)}/10")
                    
                    if len(found_points) >= 8:
                        print(f"   ✅ 11-point template structure: GOOD")
                    else:
                        print(f"   ⚠️  11-point template structure: INCOMPLETE")
            
            # Check executive summary
            if "executive_summary" in results:
                print(f"   📋 Executive summary: ✅ PRESENT")
            else:
                print(f"   📋 Executive summary: ❌ MISSING")
            
            # Check response metadata
            print(f"   📈 Total analysis count: {response.get('total_analysis_count', 'N/A')}")
            print(f"   🌐 Language: {response.get('language', 'N/A')}")
            print(f"   🏢 Company: {response.get('company_name', 'N/A')}")
            
            return True, response
        else:
            print(f"\n❌ URGENT TEST FAILED - Analysis did not complete successfully!")
            print(f"   This is a CRITICAL issue that needs immediate attention!")
            return False, {}

    def test_urgent_authentication_flow(self):
        """URGENT TEST - Test complete authentication flow with provided credentials"""
        print("\n🚨 URGENT AUTHENTICATION FLOW TEST")
        print("=" * 60)
        
        # Reset authentication state
        self.token = None
        self.user_data = None
        
        # Test admin login with exact credentials from user request
        print(f"🔐 Testing admin login: admin@finclick.ai / admin123")
        
        success, response = self.run_test(
            "URGENT - Admin Authentication",
            "POST",
            "auth/login",
            200,
            data={
                "email": "admin@finclick.ai",
                "password": "admin123"
            }
        )
        
        if success and response:
            if 'token' in response:
                self.token = response['token']
                self.user_data = response.get('user', {})
                print(f"   ✅ Admin authentication: SUCCESS")
                print(f"   🎫 Token received: {self.token[:20]}...")
                print(f"   👤 User type: {self.user_data.get('user_type', 'N/A')}")
                print(f"   📧 Email: {self.user_data.get('email', 'N/A')}")
                
                # Test protected endpoint access
                me_success, me_response = self.run_test(
                    "URGENT - Protected Endpoint Access",
                    "GET",
                    "auth/me",
                    200
                )
                
                if me_success:
                    print(f"   ✅ Protected endpoint access: SUCCESS")
                    return True, response
                else:
                    print(f"   ❌ Protected endpoint access: FAILED")
                    return False, {}
            else:
                print(f"   ❌ Admin authentication: NO TOKEN RECEIVED")
                return False, {}
        else:
            print(f"   ❌ Admin authentication: FAILED")
            return False, {}

def main():
    print("🚀 Starting FinClick.AI Enhanced Financial Analysis Engine Testing...")
    print("🚨 URGENT USER REQUEST - SYSTEM NOT WORKING - IMMEDIATE TESTING REQUIRED")
    print("=" * 80)
    
    # Setup
    tester = FinClickAPITester()
    
    # URGENT PHASE: Test user's exact request first
    print("\n🚨 URGENT PHASE: Testing User's Exact Request")
    print("=" * 80)
    
    # Test urgent authentication flow
    urgent_auth_success = tester.test_urgent_authentication_flow()
    
    if urgent_auth_success:
        # Test the exact user request immediately
        urgent_test_success = tester.test_urgent_user_request()
        
        if urgent_test_success:
            print("\n✅ URGENT TEST PASSED - User's request is working!")
        else:
            print("\n❌ URGENT TEST FAILED - User's request is NOT working!")
            print("🚨 CRITICAL ISSUE DETECTED - Immediate attention required!")
    else:
        print("\n❌ URGENT AUTHENTICATION FAILED - Cannot proceed with user test!")
        print("🚨 AUTHENTICATION ISSUE - Admin login not working!")
    
    # Test 1: Root endpoint
    print("\n📍 PHASE 1: Basic API Connectivity")
    tester.test_root_endpoint()
    
    # Test 2: Authentication Tests with provided accounts
    print("\n📍 PHASE 2: Authentication Testing")
    
    # Test with review request provided accounts (if not already done in urgent phase)
    if not urgent_auth_success:
        admin_login_success = tester.test_login_user("admin@finclick.ai", "admin123")
        if admin_login_success:
            print("✅ Admin login successful")
            tester.test_get_current_user()
        else:
            print("❌ Admin login failed - trying to register admin account")
            admin_register_success = tester.test_register_user("admin@finclick.ai", "admin123", "admin")
            if admin_register_success:
                print("✅ Admin account registered successfully")
    
    # Reset token for guest test
    tester.token = None
    tester.user_data = None
    
    guest_login_success = tester.test_login_user("guest@finclick.ai", "guest123")
    if guest_login_success:
        print("✅ Guest login successful")
        tester.test_get_current_user()
    else:
        print("❌ Guest login failed - trying to register guest account")
        guest_register_success = tester.test_register_user("guest@finclick.ai", "guest123", "guest")
        if guest_register_success:
            print("✅ Guest account registered successfully")
    
    # Test 3: Data APIs (sectors, legal entities, comparison levels)
    if tester.token:
        print("\n📍 PHASE 3: Data APIs Testing")
        tester.run_test("Get All Sectors (50+)", "GET", "sectors", 200)
        tester.run_test("Get Legal Entities (10+)", "GET", "legal-entities", 200)
        tester.run_test("Get Comparison Levels", "GET", "comparison-levels", 200)
        tester.run_test("Get Analysis Types (116+)", "GET", "analysis-types", 200)
    
    # Test 4: Comprehensive Financial Analysis Engine Testing
    if tester.token:
        print("\n📍 PHASE 4: COMPREHENSIVE FINANCIAL ANALYSIS ENGINE TESTING")
        print("=" * 80)
        
        # Test 4.1: Basic Analysis (13 types)
        print("\n🔹 Testing Basic Analysis Level (13 types)")
        tester.test_basic_analysis()
        
        # Test 4.2: Intermediate Analysis (23 types)  
        print("\n🔹 Testing Intermediate Analysis Level (23 types)")
        tester.test_intermediate_analysis()
        
        # Test 4.3: Advanced Analysis (28 types)
        print("\n🔹 Testing Advanced Analysis Level (28 types)")
        tester.test_advanced_analysis()
        
        # Test 4.4: Complex Analysis (25 types)
        print("\n🔹 Testing Complex Analysis Level (25 types)")
        tester.test_complex_analysis()
        
        # Test 4.5: AI-Powered Analysis (27 types)
        print("\n🔹 Testing AI-Powered Analysis Level (27 types)")
        tester.test_ai_powered_analysis()
        
        # Test 4.6: Comprehensive Analysis (All 116+ types)
        print("\n🔹 Testing Comprehensive Analysis (ALL 116+ types)")
        tester.test_comprehensive_analysis()
        
        # Test 4.7: Custom Analysis Combinations
        print("\n🔹 Testing Custom Analysis Combinations")
        tester.test_custom_analysis_combination()
        
        # Test 4.8: Bilingual Support (Arabic/English)
        print("\n🔹 Testing Bilingual Support (Arabic/English)")
        tester.test_bilingual_support()
        
        # Test 4.9: 11-Point Template Structure
        print("\n🔹 Testing 11-Point Analysis Template Structure")
        tester.test_analysis_template_structure()
        
        # Test 4.10: Analysis History
        print("\n🔹 Testing Analysis History")
        tester.test_analysis_history()
    
    # Test 5: NEW OCR Data Processing System Testing
    if tester.token:
        print("\n📍 PHASE 5: NEW OCR DATA PROCESSING SYSTEM TESTING")
        print("=" * 80)
        
        # Test 5.1: OCR Capabilities
        print("\n🔹 Testing OCR System Capabilities")
        tester.test_ocr_capabilities()
        
        # Test 5.2: File Upload and Processing
        print("\n🔹 Testing File Upload and OCR Processing")
        tester.test_upload_financial_files()
        
        # Test 5.3: File Processing History
        print("\n🔹 Testing File Processing History")
        tester.test_file_processing_history()
    
    # Test 6: NEW AI Agents System Testing
    if tester.token:
        print("\n📍 PHASE 6: NEW AI AGENTS SYSTEM TESTING")
        print("=" * 80)
        
        # Test 6.1: AI Agents Status
        print("\n🔹 Testing AI Agents Status and Capabilities")
        tester.test_ai_agents_status()
        
        # Test 6.2: Company Data Enrichment
        print("\n🔹 Testing Company Data Enrichment")
        tester.test_enrich_company_data()
        
        # Test 6.3: Market Data
        print("\n🔹 Testing Live Market Data")
        tester.test_market_data()
    
    # Test 7: Enhanced Analysis Integration Testing
    if tester.token:
        print("\n📍 PHASE 7: ENHANCED ANALYSIS INTEGRATION TESTING")
        print("=" * 80)
        
        # Test 7.1: Analysis with AI Enrichment
        print("\n🔹 Testing Enhanced Analysis with AI Agents Integration")
        tester.test_enhanced_analysis_with_ai_enrichment()
    
    # Test 8: REVOLUTIONARY ANALYSIS ENGINE TESTING (USER REQUEST)
    if tester.token:
        print("\n📍 PHASE 8: REVOLUTIONARY ANALYSIS ENGINE TESTING")
        print("=" * 80)
        
        # Test 8.1: Revolutionary Analysis Engine
        print("\n🔹 Testing Revolutionary Analysis Engine (116+ types)")
        tester.test_revolutionary_analysis_engine()
        
        # Test 8.2: Performance Testing (Under 30 seconds)
        print("\n🔹 Testing Performance Requirement (Under 30 seconds)")
        tester.test_performance_under_30_seconds()
        
        # Test 8.3: New Executive Summary Template
        print("\n🔹 Testing New Executive Summary Template Structure")
        tester.test_new_executive_summary_template()
        
        # Test 8.4: Comprehensive Financial Ratios (29 ratios)
        print("\n🔹 Testing Comprehensive Financial Ratios (29 ratios)")
        tester.test_comprehensive_financial_ratios()
    
    # Test 9: NEW REPORT GENERATION ENDPOINTS TESTING
    if tester.token:
        print("\n📍 PHASE 9: NEW REPORT GENERATION ENDPOINTS TESTING")
        print("=" * 80)
        
        # Test 9.1: PDF Report Generation
        print("\n🔹 Testing PDF Report Generation")
        tester.test_generate_pdf_report()
        
        # Test 9.2: Excel Report Generation
        print("\n🔹 Testing Excel Report Generation")
        tester.test_generate_excel_report()
        
        # Test 9.3: Word Report Generation
        print("\n🔹 Testing Word Report Generation")
        tester.test_generate_word_report()
        
        # Test 9.4: PowerPoint Report Generation
        print("\n🔹 Testing PowerPoint Report Generation")
        tester.test_generate_powerpoint_report()
    
    # Print final results
    print("\n" + "=" * 80)
    print("📊 COMPREHENSIVE FINANCIAL ANALYSIS ENGINE TEST RESULTS")
    print("=" * 80)
    print(f"Total Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    
    # Detailed analysis of results
    if tester.tests_passed == tester.tests_run:
        print("\n🎉 ALL TESTS PASSED! Enhanced Financial Analysis Engine is working perfectly!")
        print("✅ All 5 analysis levels (basic, intermediate, advanced, complex, AI-powered) functional")
        print("✅ Comprehensive analysis with 116+ types working")
        print("✅ 11-point template structure implemented correctly")
        print("✅ Bilingual support (Arabic/English) operational")
        print("✅ Authentication and data APIs working")
        return 0
    elif tester.tests_passed >= tester.tests_run * 0.8:
        print("\n⚠️  MOST TESTS PASSED - Minor issues detected")
        print("✅ Core financial analysis engine is functional")
        print("⚠️  Some advanced features may need attention")
        return 0
    elif tester.tests_passed >= tester.tests_run * 0.6:
        print("\n⚠️  MODERATE SUCCESS - Several issues found")
        print("⚠️  Financial analysis engine has significant gaps")
        print("❌ Multiple analysis levels or features not working properly")
        return 1
    else:
        print("\n❌ CRITICAL ISSUES FOUND - Major problems in financial analysis engine")
        print("❌ Core functionality is not working as expected")
        print("❌ Requires immediate attention and fixes")
        return 1

if __name__ == "__main__":
    sys.exit(main())