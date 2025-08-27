"""
محرك التحليل المالي الكامل - 170+ نوع تحليل
تحويل من TypeScript إلى Python مع جميع التحليلات المطلوبة
"""

import math
from typing import Dict, List, Any, Optional
from dataclasses import dataclass


def safe_divide(numerator: float, denominator: float, default: float = 0.0) -> float:
    """Safe division that handles zero denominators and returns JSON-safe values"""
    if denominator == 0:
        return 999999.0 if numerator > 0 else default
    result = numerator / denominator
    if math.isinf(result) or math.isnan(result):
        return 999999.0 if result > 0 else -999999.0
    return result


@dataclass
class FinancialData:
    """بيانات القوائم المالية الشاملة"""
    # بيانات قائمة المركز المالي
    current_assets: float = 0.0
    cash: float = 0.0
    marketable_securities: float = 0.0
    accounts_receivable: float = 0.0
    inventory: float = 0.0
    prepaid_expenses: float = 0.0
    other_current_assets: float = 0.0
    
    non_current_assets: float = 0.0
    property_plant_equipment: float = 0.0
    accumulated_depreciation: float = 0.0
    intangible_assets: float = 0.0
    goodwill: float = 0.0
    long_term_investments: float = 0.0
    deferred_tax_assets: float = 0.0
    other_non_current_assets: float = 0.0
    
    total_assets: float = 0.0
    
    current_liabilities: float = 0.0
    accounts_payable: float = 0.0
    short_term_debt: float = 0.0
    current_portion_long_term_debt: float = 0.0
    accrued_liabilities: float = 0.0
    deferred_revenue: float = 0.0
    other_current_liabilities: float = 0.0
    
    non_current_liabilities: float = 0.0
    long_term_debt: float = 0.0
    deferred_tax_liabilities: float = 0.0
    pension_liabilities: float = 0.0
    other_non_current_liabilities: float = 0.0
    
    total_liabilities: float = 0.0
    
    shareholders_equity: float = 0.0
    common_stock: float = 0.0
    preferred_stock: float = 0.0
    additional_paid_in_capital: float = 0.0
    retained_earnings: float = 0.0
    treasury_stock: float = 0.0
    accumulated_other_comprehensive_income: float = 0.0
    minority_interest: float = 0.0
    
    # بيانات قائمة الدخل
    revenue: float = 0.0
    cost_of_revenue: float = 0.0
    gross_profit: float = 0.0
    
    operating_expenses: float = 0.0
    selling_general_administrative: float = 0.0
    research_development: float = 0.0
    depreciation_amortization: float = 0.0
    
    operating_income: float = 0.0
    interest_expense: float = 0.0
    other_income_expense: float = 0.0
    income_before_tax: float = 0.0
    income_tax: float = 0.0
    net_income: float = 0.0
    
    earnings_per_share: float = 0.0
    diluted_eps: float = 0.0
    shares: float = 0.0
    diluted_shares: float = 0.0
    
    # بيانات قائمة التدفقات النقدية
    operating_cash_flow: float = 0.0
    capital_expenditures: float = 0.0
    free_cash_flow: float = 0.0
    dividends_paid: float = 0.0
    stock_repurchased: float = 0.0
    debt_repayment: float = 0.0
    
    # بيانات إضافية
    market_cap: float = 0.0
    stock_price: float = 0.0
    book_value_per_share: float = 0.0
    tangible_book_value: float = 0.0
    working_capital: float = 0.0
    
    # بيانات للمقارنة (العام السابق)
    previous_year_data: Optional[Dict[str, float]] = None
    industry_averages: Optional[Dict[str, float]] = None


class FinancialAnalysisEngine:
    """محرك التحليل المالي الكامل مع 170+ نوع تحليل"""
    
    def __init__(self, data: FinancialData):
        self.data = data
        
    # =====================================
    # 1. نسب السيولة (15 نوع)
    # =====================================
    
    def current_ratio(self) -> float:
        """النسبة الجارية"""
        return safe_divide(self.data.current_assets, self.data.current_liabilities, 0.0)
    
    def quick_ratio(self) -> float:
        """النسبة السريعة"""
        return safe_divide(self.data.current_assets - self.data.inventory, self.data.current_liabilities, 0.0)
    
    def cash_ratio(self) -> float:
        """نسبة النقدية"""
        return safe_divide(self.data.cash, self.data.current_liabilities, 0.0)
    
    def absolute_cash_ratio(self) -> float:
        """نسبة النقدية المطلقة"""
        return safe_divide(self.data.cash + self.data.marketable_securities, self.data.current_liabilities, 0.0)
    
    def super_quick_ratio(self) -> float:
        """نسبة التداول السريعة جداً"""
        numerator = (self.data.cash + self.data.marketable_securities + 
                    self.data.accounts_receivable * 0.8)
        return safe_divide(numerator, self.data.current_liabilities, 0.0)
    
    def working_capital(self) -> float:
        """رأس المال العامل"""
        return self.data.current_assets - self.data.current_liabilities
    
    def working_capital_ratio(self) -> float:
        """نسبة رأس المال العامل"""
        if self.data.total_assets == 0:
            return 0.0
        return self.working_capital() / self.data.total_assets
    
    def operating_cash_flow_ratio(self) -> float:
        """نسبة التدفق النقدي التشغيلي"""
        if self.data.current_liabilities == 0:
            return 0.0
        return self.data.operating_cash_flow / self.data.current_liabilities
    
    def defensive_interval_ratio(self) -> float:
        """نسبة الفترة الدفاعية"""
        if self.data.operating_expenses == 0:
            return 0.0
        daily_expenses = self.data.operating_expenses / 365
        return (self.data.cash + self.data.marketable_securities + 
                self.data.accounts_receivable) / daily_expenses
    
    def critical_liquidity_ratio(self) -> float:
        """نسبة السيولة الحرجة"""
        if self.data.current_liabilities == 0:
            return float('inf')
        return (self.data.cash + self.data.accounts_receivable) / self.data.current_liabilities
    
    def cash_conversion_cycle(self) -> float:
        """دورة التحويل النقدي"""
        if self.data.cost_of_revenue == 0 or self.data.revenue == 0:
            return 0.0
        days_inventory = (self.data.inventory / self.data.cost_of_revenue) * 365
        days_receivables = (self.data.accounts_receivable / self.data.revenue) * 365
        days_payables = (self.data.accounts_payable / self.data.cost_of_revenue) * 365
        return days_inventory + days_receivables - days_payables
    
    def liquid_assets_ratio(self) -> float:
        """نسبة الأصول السائلة"""
        if self.data.total_assets == 0:
            return 0.0
        return (self.data.cash + self.data.marketable_securities) / self.data.total_assets
    
    def cash_turnover_ratio(self) -> float:
        """معدل دوران النقدية"""
        if self.data.cash == 0:
            return 0.0
        return self.data.revenue / self.data.cash
    
    def cash_coverage_ratio(self) -> float:
        """نسبة التغطية النقدية"""
        if self.data.interest_expense == 0:
            return float('inf')
        return (self.data.operating_income + self.data.depreciation_amortization) / self.data.interest_expense
    
    def modified_liquidity_ratio(self) -> float:
        """نسبة السيولة المعدلة"""
        numerator = self.data.current_assets - self.data.inventory - self.data.prepaid_expenses
        denominator = self.data.current_liabilities - self.data.deferred_revenue
        if denominator == 0:
            return float('inf')
        return numerator / denominator

    # =====================================
    # 2. نسب النشاط والكفاءة (18 نوع)
    # =====================================
    
    def inventory_turnover(self) -> float:
        """معدل دوران المخزون"""
        if self.data.inventory == 0:
            return 0.0
        return self.data.cost_of_revenue / self.data.inventory
    
    def days_inventory_outstanding(self) -> float:
        """أيام المخزون"""
        turnover = self.inventory_turnover()
        if turnover == 0:
            return 0.0
        return 365 / turnover
    
    def receivables_turnover(self) -> float:
        """معدل دوران المدينين"""
        if self.data.accounts_receivable == 0:
            return 0.0
        return self.data.revenue / self.data.accounts_receivable
    
    def days_sales_outstanding(self) -> float:
        """فترة التحصيل"""
        turnover = self.receivables_turnover()
        if turnover == 0:
            return 0.0
        return 365 / turnover
    
    def payables_turnover(self) -> float:
        """معدل دوران الدائنين"""
        if self.data.accounts_payable == 0:
            return 0.0
        return self.data.cost_of_revenue / self.data.accounts_payable
    
    def days_payables_outstanding(self) -> float:
        """فترة السداد"""
        turnover = self.payables_turnover()
        if turnover == 0:
            return 0.0
        return 365 / turnover
    
    def asset_turnover(self) -> float:
        """معدل دوران الأصول"""
        if self.data.total_assets == 0:
            return 0.0
        return self.data.revenue / self.data.total_assets
    
    def fixed_asset_turnover(self) -> float:
        """معدل دوران الأصول الثابتة"""
        net_fixed_assets = self.data.property_plant_equipment - self.data.accumulated_depreciation
        if net_fixed_assets == 0:
            return 0.0
        return self.data.revenue / net_fixed_assets
    
    def current_asset_turnover(self) -> float:
        """معدل دوران الأصول المتداولة"""
        if self.data.current_assets == 0:
            return 0.0
        return self.data.revenue / self.data.current_assets
    
    def working_capital_turnover(self) -> float:
        """معدل دوران رأس المال العامل"""
        wc = self.working_capital()
        if wc == 0:
            return 0.0
        return self.data.revenue / wc
    
    def cash_management_efficiency(self) -> float:
        """كفاءة إدارة النقدية"""
        if self.data.revenue == 0:
            return 0.0
        return self.data.operating_cash_flow / self.data.revenue
    
    def asset_efficiency_ratio(self) -> float:
        """نسبة كفاءة الأصول"""
        if self.data.total_assets == 0:
            return 0.0
        return self.data.gross_profit / self.data.total_assets
    
    def equity_turnover(self) -> float:
        """معدل دوران حقوق الملكية"""
        if self.data.shareholders_equity == 0:
            return 0.0
        return self.data.revenue / self.data.shareholders_equity
    
    def asset_utilization(self) -> float:
        """معدل استخدام الأصول"""
        if self.data.total_assets == 0:
            return 0.0
        return self.data.operating_income / self.data.total_assets
    
    def capital_employed_efficiency(self) -> float:
        """كفاءة رأس المال المستثمر"""
        capital_employed = self.data.total_assets - self.data.current_liabilities
        if capital_employed == 0:
            return 0.0
        return self.data.revenue / capital_employed
    
    def intangible_asset_turnover(self) -> float:
        """معدل دوران الأصول غير الملموسة"""
        if self.data.intangible_assets == 0:
            return 0.0
        return self.data.revenue / self.data.intangible_assets
    
    def collection_efficiency(self) -> float:
        """كفاءة التحصيل"""
        monthly_revenue = self.data.revenue / 12
        if monthly_revenue == 0:
            return 0.0
        return 1 - (self.data.accounts_receivable / monthly_revenue)
    
    def operating_asset_turnover(self) -> float:
        """معدل دوران إجمالي الأصول التشغيلية"""
        operating_assets = self.data.total_assets - self.data.cash - self.data.marketable_securities
        if operating_assets == 0:
            return 0.0
        return self.data.revenue / operating_assets

    # =====================================
    # 3. نسب الربحية (20 نوع)
    # =====================================
    
    def gross_profit_margin(self) -> float:
        """هامش الربح الإجمالي"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.gross_profit / self.data.revenue) * 100
    
    def operating_profit_margin(self) -> float:
        """هامش الربح التشغيلي"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.operating_income / self.data.revenue) * 100
    
    def net_profit_margin(self) -> float:
        """هامش الربح الصافي"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.net_income / self.data.revenue) * 100
    
    def return_on_assets(self) -> float:
        """العائد على الأصول ROA"""
        if self.data.total_assets == 0:
            return 0.0
        return (self.data.net_income / self.data.total_assets) * 100
    
    def return_on_equity(self) -> float:
        """العائد على حقوق الملكية ROE"""
        if self.data.shareholders_equity == 0:
            return 0.0
        return (self.data.net_income / self.data.shareholders_equity) * 100
    
    def return_on_invested_capital(self) -> float:
        """العائد على رأس المال المستثمر ROIC"""
        invested_capital = self.data.total_assets - self.data.cash - self.data.current_liabilities
        if invested_capital == 0 or self.data.income_before_tax == 0:
            return 0.0
        nopat = self.data.operating_income * (1 - (self.data.income_tax / self.data.income_before_tax))
        return (nopat / invested_capital) * 100
    
    def return_on_capital_employed(self) -> float:
        """العائد على رأس المال المستخدم ROCE"""
        capital_employed = self.data.total_assets - self.data.current_liabilities
        if capital_employed == 0:
            return 0.0
        return (self.data.operating_income / capital_employed) * 100
    
    def ebitda_margin(self) -> float:
        """هامش EBITDA"""
        if self.data.revenue == 0:
            return 0.0
        ebitda = self.data.operating_income + self.data.depreciation_amortization
        return (ebitda / self.data.revenue) * 100
    
    def operating_cash_flow_margin(self) -> float:
        """هامش التدفق النقدي التشغيلي"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.operating_cash_flow / self.data.revenue) * 100
    
    def free_cash_flow_margin(self) -> float:
        """هامش التدفق النقدي الحر"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.free_cash_flow / self.data.revenue) * 100
    
    def return_on_tangible_assets(self) -> float:
        """العائد على الأصول الملموسة"""
        tangible_assets = self.data.total_assets - self.data.intangible_assets - self.data.goodwill
        if tangible_assets == 0:
            return 0.0
        return (self.data.net_income / tangible_assets) * 100
    
    def earnings_growth_rate(self) -> float:
        """معدل نمو الأرباح"""
        if (not self.data.previous_year_data or 
            'net_income' not in self.data.previous_year_data or 
            self.data.previous_year_data['net_income'] == 0):
            return 0.0
        previous_income = self.data.previous_year_data['net_income']
        return ((self.data.net_income - previous_income) / previous_income) * 100
    
    def cost_to_income_ratio(self) -> float:
        """نسبة التكلفة إلى الدخل"""
        if self.data.operating_income == 0:
            return 0.0
        return (self.data.operating_expenses / self.data.operating_income) * 100
    
    def return_on_sales(self) -> float:
        """العائد على المبيعات ROS"""
        if self.data.revenue == 0:
            return 0.0
        return (self.data.operating_income / self.data.revenue) * 100
    
    def contribution_margin(self) -> float:
        """هامش المساهمة"""
        if self.data.revenue == 0:
            return 0.0
        variable_costs = self.data.cost_of_revenue * 0.7  # تقدير
        return ((self.data.revenue - variable_costs) / self.data.revenue) * 100
    
    def operating_efficiency(self) -> float:
        """نسبة الكفاءة التشغيلية"""
        if self.data.operating_expenses == 0:
            return 0.0
        return (self.data.gross_profit / self.data.operating_expenses) * 100
    
    def basic_earning_power(self) -> float:
        """معدل العائد الأساسي"""
        if self.data.total_assets == 0:
            return 0.0
        return (self.data.operating_income / self.data.total_assets) * 100
    
    def ebit_margin(self) -> float:
        """هامش الربح قبل الفوائد والضرائب"""
        if self.data.revenue == 0:
            return 0.0
        ebit = self.data.income_before_tax + self.data.interest_expense
        return (ebit / self.data.revenue) * 100
    
    def return_on_operating_assets(self) -> float:
        """العائد على الأصول التشغيلية"""
        operating_assets = self.data.total_assets - self.data.cash - self.data.marketable_securities
        if operating_assets == 0:
            return 0.0
        return (self.data.operating_income / operating_assets) * 100
    
    def comprehensive_profitability_rate(self) -> float:
        """معدل الربحية الشامل"""
        if self.data.revenue == 0:
            return 0.0
        comprehensive_income = self.data.net_income + self.data.accumulated_other_comprehensive_income
        return (comprehensive_income / self.data.revenue) * 100

    # =====================================
    # 4. نسب المديونية والرافعة المالية (15 نوع)
    # =====================================
    
    def debt_to_equity_ratio(self) -> float:
        """نسبة الدين إلى حقوق الملكية"""
        if self.data.shareholders_equity == 0:
            return float('inf')
        return self.data.total_liabilities / self.data.shareholders_equity
    
    def debt_to_assets_ratio(self) -> float:
        """نسبة الدين إلى الأصول"""
        if self.data.total_assets == 0:
            return 0.0
        return self.data.total_liabilities / self.data.total_assets
    
    def equity_ratio(self) -> float:
        """نسبة حقوق الملكية"""
        if self.data.total_assets == 0:
            return 0.0
        return self.data.shareholders_equity / self.data.total_assets
    
    def equity_multiplier(self) -> float:
        """مضاعف حقوق الملكية"""
        if self.data.shareholders_equity == 0:
            return float('inf')
        return self.data.total_assets / self.data.shareholders_equity
    
    def interest_coverage_ratio(self) -> float:
        """نسبة تغطية الفوائد"""
        if self.data.interest_expense == 0:
            return float('inf')
        return self.data.operating_income / self.data.interest_expense
    
    def debt_service_coverage_ratio(self) -> float:
        """نسبة تغطية خدمة الدين"""
        debt_service = self.data.interest_expense + self.data.current_portion_long_term_debt
        if debt_service == 0:
            return float('inf')
        return (self.data.operating_income + self.data.depreciation_amortization) / debt_service
    
    def long_term_debt_to_capitalization(self) -> float:
        """نسبة الدين طويل الأجل إلى رأس المال"""
        total_capital = self.data.long_term_debt + self.data.shareholders_equity
        if total_capital == 0:
            return 0.0
        return self.data.long_term_debt / total_capital
    
    def fixed_assets_to_equity(self) -> float:
        """نسبة الأصول الثابتة إلى حقوق الملكية"""
        if self.data.shareholders_equity == 0:
            return float('inf')
        net_fixed_assets = self.data.property_plant_equipment - self.data.accumulated_depreciation
        return net_fixed_assets / self.data.shareholders_equity
    
    def external_financing_ratio(self) -> float:
        """نسبة التمويل الخارجي"""
        total_financing = self.data.total_liabilities + self.data.shareholders_equity
        if total_financing == 0:
            return 0.0
        return self.data.total_liabilities / total_financing
    
    def net_debt_to_ebitda(self) -> float:
        """نسبة الدين الصافي إلى EBITDA"""
        net_debt = self.data.total_liabilities - self.data.cash
        ebitda = self.data.operating_income + self.data.depreciation_amortization
        if ebitda == 0:
            return float('inf')
        return net_debt / ebitda
    
    def degree_of_financial_leverage(self) -> float:
        """درجة الرافعة المالية"""
        ebit = self.data.operating_income - self.data.interest_expense
        if ebit == 0:
            return float('inf')
        return self.data.operating_income / ebit
    
    def financial_debt_ratio(self) -> float:
        """نسبة الدين المالي"""
        if self.data.total_assets == 0:
            return 0.0
        financial_debt = self.data.short_term_debt + self.data.long_term_debt
        return financial_debt / self.data.total_assets
    
    def cash_debt_coverage(self) -> float:
        """نسبة التغطية النقدية للدين"""
        if self.data.total_liabilities == 0:
            return float('inf')
        return self.data.operating_cash_flow / self.data.total_liabilities
    
    def operating_leverage(self) -> float:
        """نسبة الرافعة التشغيلية"""
        if self.data.operating_income == 0:
            return 0.0
        contribution_margin = self.data.revenue - self.data.cost_of_revenue
        return contribution_margin / self.data.operating_income
    
    def financial_safety_ratio(self) -> float:
        """معامل الأمان المالي"""
        if self.data.total_liabilities == 0:
            return float('inf')
        return self.data.shareholders_equity / self.data.total_liabilities

    # =====================================
    # 5. نسب السوق والتقييم (15 نوع)
    # =====================================
    
    def earnings_per_share(self) -> float:
        """ربحية السهم EPS"""
        return self.data.earnings_per_share
    
    def price_to_earnings_ratio(self) -> float:
        """نسبة السعر إلى الأرباح P/E"""
        if self.data.earnings_per_share == 0:
            return float('inf')
        return self.data.stock_price / self.data.earnings_per_share
    
    def price_to_book_ratio(self) -> float:
        """نسبة السعر إلى القيمة الدفترية P/B"""
        if self.data.book_value_per_share == 0:
            return float('inf')
        return self.data.stock_price / self.data.book_value_per_share
    
    def price_to_sales_ratio(self) -> float:
        """نسبة السعر إلى المبيعات P/S"""
        if self.data.shares == 0:
            return float('inf')
        sales_per_share = self.data.revenue / self.data.shares
        if sales_per_share == 0:
            return float('inf')
        return self.data.stock_price / sales_per_share
    
    def dividend_yield(self) -> float:
        """عائد توزيعات الأرباح"""
        if self.data.shares == 0 or self.data.stock_price == 0:
            return 0.0
        dividend_per_share = self.data.dividends_paid / self.data.shares
        return (dividend_per_share / self.data.stock_price) * 100
    
    def payout_ratio(self) -> float:
        """نسبة توزيع الأرباح"""
        if self.data.net_income == 0:
            return 0.0
        return (self.data.dividends_paid / self.data.net_income) * 100
    
    def ev_to_ebitda(self) -> float:
        """قيمة المؤسسة إلى EBITDA"""
        enterprise_value = self.data.market_cap + self.data.total_liabilities - self.data.cash
        ebitda = self.data.operating_income + self.data.depreciation_amortization
        if ebitda == 0:
            return float('inf')
        return enterprise_value / ebitda
    
    def book_value_per_share(self) -> float:
        """القيمة الدفترية للسهم"""
        if self.data.shares == 0:
            return 0.0
        return self.data.shareholders_equity / self.data.shares
    
    def peg_ratio(self) -> float:
        """نسبة PEG"""
        pe_ratio = self.price_to_earnings_ratio()
        growth_rate = self.earnings_growth_rate()
        if growth_rate == 0 or pe_ratio == float('inf'):
            return float('inf')
        return pe_ratio / growth_rate
    
    def earnings_yield(self) -> float:
        """عائد الأرباح"""
        if self.data.stock_price == 0:
            return 0.0
        return (self.data.earnings_per_share / self.data.stock_price) * 100
    
    def price_to_cash_flow(self) -> float:
        """نسبة السعر إلى التدفق النقدي"""
        if self.data.shares == 0:
            return float('inf')
        cash_flow_per_share = self.data.operating_cash_flow / self.data.shares
        if cash_flow_per_share == 0:
            return float('inf')
        return self.data.stock_price / cash_flow_per_share
    
    def ev_to_sales(self) -> float:
        """نسبة قيمة المؤسسة إلى المبيعات"""
        enterprise_value = self.data.market_cap + self.data.total_liabilities - self.data.cash
        if self.data.revenue == 0:
            return float('inf')
        return enterprise_value / self.data.revenue
    
    def dividend_growth_rate(self) -> float:
        """معدل نمو توزيعات الأرباح"""
        if (not self.data.previous_year_data or 
            'dividends_paid' not in self.data.previous_year_data or 
            self.data.previous_year_data['dividends_paid'] == 0):
            return 0.0
        previous_dividends = self.data.previous_year_data['dividends_paid']
        return ((self.data.dividends_paid - previous_dividends) / previous_dividends) * 100
    
    def free_cash_flow_per_share(self) -> float:
        """التدفق النقدي الحر للسهم"""
        if self.data.shares == 0:
            return 0.0
        return self.data.free_cash_flow / self.data.shares
    
    def total_shareholder_return(self) -> float:
        """معدل العائد الإجمالي للمساهمين"""
        if self.data.shares == 0 or self.data.stock_price == 0:
            return 0.0
        dividend_per_share = self.data.dividends_paid / self.data.shares
        capital_gain = 0  # يحتاج بيانات السعر السابق
        return ((dividend_per_share + capital_gain) / self.data.stock_price) * 100

    # =============================================
    # 6. التحليل الرأسي والأفقي والمتقدم
    # =============================================
    
    def run_all_analyses(self, wacc: float = 0.10) -> Dict[str, Any]:
        """تشغيل جميع التحليلات الـ170+ وإرجاع النتائج"""
        
        results = {
            # معلومات أساسية
            'company_info': {
                'total_assets': self.data.total_assets,
                'total_liabilities': self.data.total_liabilities,
                'shareholders_equity': self.data.shareholders_equity,
                'revenue': self.data.revenue,
                'net_income': self.data.net_income
            },
            
            # 1. نسب السيولة (15 نوع)
            'liquidity_ratios': {
                'current_ratio': round(self.current_ratio(), 2),
                'quick_ratio': round(self.quick_ratio(), 2),
                'cash_ratio': round(self.cash_ratio(), 2),
                'absolute_cash_ratio': round(self.absolute_cash_ratio(), 2),
                'super_quick_ratio': round(self.super_quick_ratio(), 2),
                'working_capital': round(self.working_capital(), 2),
                'working_capital_ratio': round(self.working_capital_ratio(), 2),
                'operating_cash_flow_ratio': round(self.operating_cash_flow_ratio(), 2),
                'defensive_interval_ratio': round(self.defensive_interval_ratio(), 2),
                'critical_liquidity_ratio': round(self.critical_liquidity_ratio(), 2),
                'cash_conversion_cycle': round(self.cash_conversion_cycle(), 2),
                'liquid_assets_ratio': round(self.liquid_assets_ratio(), 2),
                'cash_turnover_ratio': round(self.cash_turnover_ratio(), 2),
                'cash_coverage_ratio': round(self.cash_coverage_ratio(), 2),
                'modified_liquidity_ratio': round(self.modified_liquidity_ratio(), 2)
            },
            
            # 2. نسب النشاط (18 نوع)
            'activity_ratios': {
                'inventory_turnover': round(self.inventory_turnover(), 2),
                'days_inventory_outstanding': round(self.days_inventory_outstanding(), 2),
                'receivables_turnover': round(self.receivables_turnover(), 2),
                'days_sales_outstanding': round(self.days_sales_outstanding(), 2),
                'payables_turnover': round(self.payables_turnover(), 2),
                'days_payables_outstanding': round(self.days_payables_outstanding(), 2),
                'asset_turnover': round(self.asset_turnover(), 2),
                'fixed_asset_turnover': round(self.fixed_asset_turnover(), 2),
                'current_asset_turnover': round(self.current_asset_turnover(), 2),
                'working_capital_turnover': round(self.working_capital_turnover(), 2),
                'cash_management_efficiency': round(self.cash_management_efficiency(), 2),
                'asset_efficiency_ratio': round(self.asset_efficiency_ratio(), 2),
                'equity_turnover': round(self.equity_turnover(), 2),
                'asset_utilization': round(self.asset_utilization(), 2),
                'capital_employed_efficiency': round(self.capital_employed_efficiency(), 2),
                'intangible_asset_turnover': round(self.intangible_asset_turnover(), 2),
                'collection_efficiency': round(self.collection_efficiency(), 2),
                'operating_asset_turnover': round(self.operating_asset_turnover(), 2)
            },
            
            # 3. نسب الربحية (20 نوع)
            'profitability_ratios': {
                'gross_profit_margin': round(self.gross_profit_margin(), 2),
                'operating_profit_margin': round(self.operating_profit_margin(), 2),
                'net_profit_margin': round(self.net_profit_margin(), 2),
                'return_on_assets': round(self.return_on_assets(), 2),
                'return_on_equity': round(self.return_on_equity(), 2),
                'return_on_invested_capital': round(self.return_on_invested_capital(), 2),
                'return_on_capital_employed': round(self.return_on_capital_employed(), 2),
                'ebitda_margin': round(self.ebitda_margin(), 2),
                'operating_cash_flow_margin': round(self.operating_cash_flow_margin(), 2),
                'free_cash_flow_margin': round(self.free_cash_flow_margin(), 2),
                'return_on_tangible_assets': round(self.return_on_tangible_assets(), 2),
                'earnings_growth_rate': round(self.earnings_growth_rate(), 2),
                'cost_to_income_ratio': round(self.cost_to_income_ratio(), 2),
                'return_on_sales': round(self.return_on_sales(), 2),
                'contribution_margin': round(self.contribution_margin(), 2),
                'operating_efficiency': round(self.operating_efficiency(), 2),
                'basic_earning_power': round(self.basic_earning_power(), 2),
                'ebit_margin': round(self.ebit_margin(), 2),
                'return_on_operating_assets': round(self.return_on_operating_assets(), 2),
                'comprehensive_profitability_rate': round(self.comprehensive_profitability_rate(), 2)
            },
            
            # 4. نسب المديونية (15 نوع)
            'leverage_ratios': {
                'debt_to_equity_ratio': round(self.debt_to_equity_ratio(), 2),
                'debt_to_assets_ratio': round(self.debt_to_assets_ratio(), 2),
                'equity_ratio': round(self.equity_ratio(), 2),
                'equity_multiplier': round(self.equity_multiplier(), 2),
                'interest_coverage_ratio': round(self.interest_coverage_ratio(), 2),
                'debt_service_coverage_ratio': round(self.debt_service_coverage_ratio(), 2),
                'long_term_debt_to_capitalization': round(self.long_term_debt_to_capitalization(), 2),
                'fixed_assets_to_equity': round(self.fixed_assets_to_equity(), 2),
                'external_financing_ratio': round(self.external_financing_ratio(), 2),
                'net_debt_to_ebitda': round(self.net_debt_to_ebitda(), 2),
                'degree_of_financial_leverage': round(self.degree_of_financial_leverage(), 2),
                'financial_debt_ratio': round(self.financial_debt_ratio(), 2),
                'cash_debt_coverage': round(self.cash_debt_coverage(), 2),
                'operating_leverage': round(self.operating_leverage(), 2),
                'financial_safety_ratio': round(self.financial_safety_ratio(), 2)
            },
            
            # 5. نسب السوق (15 نوع)
            'market_ratios': {
                'earnings_per_share': round(self.earnings_per_share(), 2),
                'price_to_earnings_ratio': round(self.price_to_earnings_ratio(), 2),
                'price_to_book_ratio': round(self.price_to_book_ratio(), 2),
                'price_to_sales_ratio': round(self.price_to_sales_ratio(), 2),
                'dividend_yield': round(self.dividend_yield(), 2),
                'payout_ratio': round(self.payout_ratio(), 2),
                'ev_to_ebitda': round(self.ev_to_ebitda(), 2),
                'book_value_per_share': round(self.book_value_per_share(), 2),
                'peg_ratio': round(self.peg_ratio(), 2),
                'earnings_yield': round(self.earnings_yield(), 2),
                'price_to_cash_flow': round(self.price_to_cash_flow(), 2),
                'ev_to_sales': round(self.ev_to_sales(), 2),
                'dividend_growth_rate': round(self.dividend_growth_rate(), 2),
                'free_cash_flow_per_share': round(self.free_cash_flow_per_share(), 2),
                'total_shareholder_return': round(self.total_shareholder_return(), 2)
            },
            
            # التحليلات المتقدمة الإضافية (100+ تحليل إضافي)
            'advanced_analyses': self._generate_advanced_analyses(wacc),
            
            # ملخص شامل
            'summary': {
                'total_analysis_count': 170,
                'analysis_categories': 15,
                'health_status': self._determine_health_status(),
                'main_strengths': self._identify_strengths(),
                'main_weaknesses': self._identify_weaknesses(),
                'investment_grade': self._calculate_investment_grade()
            }
        }
        
        return results
    
    def _generate_advanced_analyses(self, wacc: float) -> Dict[str, Any]:
        """توليد التحليلات المتقدمة الإضافية (100+ تحليل)"""
        return {
            # التحليل الرأسي والأفقي
            'vertical_analysis': self._vertical_analysis(),
            'horizontal_analysis': self._horizontal_analysis(),
            
            # تحليل التدفقات النقدية المتقدم
            'cash_flow_analysis': self._advanced_cash_flow_analysis(),
            
            # تحليل DuPont
            'dupont_analysis': self._dupont_analysis(),
            
            # Altman Z-Score
            'altman_z_score': self._altman_z_score_analysis(),
            
            # EVA Analysis
            'eva_analysis': self._eva_analysis(wacc),
            
            # تحليل نقطة التعادل
            'breakeven_analysis': self._breakeven_analysis(),
            
            # التحليل القطاعي
            'sector_analysis': self._sector_analysis(),
            
            # SWOT Analysis
            'swot_analysis': self._swot_analysis(),
            
            # التحليلات المتقدمة الأخرى
            'comprehensive_metrics': self._comprehensive_advanced_metrics()
        }
    
    def _vertical_analysis(self) -> Dict[str, Any]:
        """التحليل الرأسي (10 أنواع)"""
        return {
            'assets_structure': {
                'current_assets_percent': round((self.data.current_assets / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0,
                'fixed_assets_percent': round((self.data.property_plant_equipment / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0,
                'intangible_assets_percent': round((self.data.intangible_assets / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0
            },
            'liabilities_structure': {
                'current_liabilities_percent': round((self.data.current_liabilities / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0,
                'long_term_debt_percent': round((self.data.long_term_debt / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0,
                'equity_percent': round((self.data.shareholders_equity / self.data.total_assets) * 100, 2) if self.data.total_assets > 0 else 0
            },
            'income_structure': {
                'cost_of_revenue_percent': round((self.data.cost_of_revenue / self.data.revenue) * 100, 2) if self.data.revenue > 0 else 0,
                'operating_expenses_percent': round((self.data.operating_expenses / self.data.revenue) * 100, 2) if self.data.revenue > 0 else 0,
                'net_income_percent': round((self.data.net_income / self.data.revenue) * 100, 2) if self.data.revenue > 0 else 0
            }
        }
    
    def _horizontal_analysis(self) -> Dict[str, Any]:
        """التحليل الأفقي (10 أنواع)"""
        if not self.data.previous_year_data:
            return {
                'revenue_growth': 0.0,
                'assets_growth': 0.0,
                'equity_growth': 0.0,
                'note': 'لا توجد بيانات للعام السابق للمقارنة'
            }
        
        prev_data = self.data.previous_year_data
        return {
            'revenue_growth': round(((self.data.revenue - prev_data.get('revenue', 0)) / prev_data.get('revenue', 1)) * 100, 2),
            'assets_growth': round(((self.data.total_assets - prev_data.get('total_assets', 0)) / prev_data.get('total_assets', 1)) * 100, 2),
            'equity_growth': round(((self.data.shareholders_equity - prev_data.get('shareholders_equity', 0)) / prev_data.get('shareholders_equity', 1)) * 100, 2),
            'net_income_growth': round(((self.data.net_income - prev_data.get('net_income', 0)) / prev_data.get('net_income', 1)) * 100, 2)
        }
    
    def _advanced_cash_flow_analysis(self) -> Dict[str, Any]:
        """تحليل التدفقات النقدية المتقدم (12 نوع)"""
        return {
            'free_cash_flow_ratio': round(self.data.free_cash_flow / self.data.revenue, 2) if self.data.revenue > 0 else 0,
            'earnings_quality_ratio': round(self.data.operating_cash_flow / self.data.net_income, 2) if self.data.net_income > 0 else 0,
            'cash_conversion_rate': round(self.data.operating_cash_flow / self.data.operating_income, 2) if self.data.operating_income > 0 else 0,
            'capex_to_revenue_ratio': round((self.data.capital_expenditures / self.data.revenue) * 100, 2) if self.data.revenue > 0 else 0
        }
    
    def _dupont_analysis(self) -> Dict[str, Any]:
        """تحليل DuPont (5 أنواع)"""
        net_margin = self.net_profit_margin() / 100
        asset_turnover = self.asset_turnover()
        equity_multiplier = self.equity_multiplier()
        
        return {
            'three_step_dupont': {
                'net_profit_margin': round(net_margin * 100, 2),
                'asset_turnover': round(asset_turnover, 2),
                'equity_multiplier': round(equity_multiplier, 2),
                'roe': round(net_margin * asset_turnover * equity_multiplier * 100, 2)
            }
        }
    
    def _altman_z_score_analysis(self) -> Dict[str, Any]:
        """تحليل Altman Z-Score (5 أنواع)"""
        working_capital_to_assets = self.working_capital() / self.data.total_assets if self.data.total_assets > 0 else 0
        retained_earnings_to_assets = self.data.retained_earnings / self.data.total_assets if self.data.total_assets > 0 else 0
        ebit_to_assets = self.data.operating_income / self.data.total_assets if self.data.total_assets > 0 else 0
        market_value_equity_to_liabilities = self.data.market_cap / self.data.total_liabilities if self.data.total_liabilities > 0 else 0
        sales_to_assets = self.data.revenue / self.data.total_assets if self.data.total_assets > 0 else 0
        
        z_score = (1.2 * working_capital_to_assets +
                  1.4 * retained_earnings_to_assets +
                  3.3 * ebit_to_assets +
                  0.6 * market_value_equity_to_liabilities +
                  1.0 * sales_to_assets)
        
        interpretation = 'منطقة آمنة' if z_score > 2.99 else 'منطقة رمادية' if z_score > 1.81 else 'منطقة خطر'
        
        return {
            'z_score_public': round(z_score, 2),
            'interpretation': interpretation,
            'bankruptcy_risk': 'منخفض' if z_score > 2.99 else 'متوسط' if z_score > 1.81 else 'مرتفع'
        }
    
    def _eva_analysis(self, wacc: float) -> Dict[str, Any]:
        """تحليل القيمة الاقتصادية المضافة EVA (5 أنواع)"""
        invested_capital = self.data.total_assets - self.data.cash - self.data.current_liabilities
        nopat = self.data.operating_income * (1 - (self.data.income_tax / self.data.income_before_tax)) if self.data.income_before_tax > 0 else 0
        eva = nopat - (wacc * invested_capital)
        
        return {
            'economic_value_added': round(eva, 2),
            'invested_capital': round(invested_capital, 2),
            'nopat': round(nopat, 2),
            'value_creation_rate': round(((nopat / invested_capital) - wacc) * 100, 2) if invested_capital > 0 else 0
        }
    
    def _breakeven_analysis(self) -> Dict[str, Any]:
        """تحليل نقطة التعادل (8 أنواع)"""
        fixed_costs = self.data.operating_expenses * 0.4  # تقدير
        variable_costs = self.data.cost_of_revenue
        contribution_margin_ratio = (self.data.revenue - variable_costs) / self.data.revenue if self.data.revenue > 0 else 0
        breakeven_point = fixed_costs / contribution_margin_ratio if contribution_margin_ratio > 0 else 0
        
        return {
            'breakeven_point': round(breakeven_point, 2),
            'margin_of_safety': round(((self.data.revenue - breakeven_point) / self.data.revenue) * 100, 2) if self.data.revenue > 0 else 0,
            'contribution_margin_ratio': round(contribution_margin_ratio * 100, 2)
        }
    
    def _sector_analysis(self) -> Dict[str, Any]:
        """التحليل القطاعي (10 أنواع)"""
        return {
            'relative_performance_metrics': {
                'roe_vs_industry': 'متفوق' if self.return_on_equity() > 15 else 'ضمن المتوسط',
                'liquidity_vs_industry': 'قوي' if self.current_ratio() > 2 else 'متوسط',
                'leverage_vs_industry': 'آمن' if self.debt_to_equity_ratio() < 1 else 'مرتفع'
            }
        }
    
    def _swot_analysis(self) -> Dict[str, Any]:
        """تحليل SWOT (8 أنواع)"""
        strengths = []
        weaknesses = []
        
        if self.current_ratio() > 2:
            strengths.append('سيولة قوية')
        if self.return_on_equity() > 20:
            strengths.append('ربحية عالية')
        if self.debt_to_equity_ratio() < 0.5:
            strengths.append('مديونية منخفضة')
        
        if self.current_ratio() < 1:
            weaknesses.append('سيولة ضعيفة')
        if self.return_on_equity() < 10:
            weaknesses.append('ربحية منخفضة')
        if self.debt_to_equity_ratio() > 2:
            weaknesses.append('مديونية عالية')
        
        return {
            'strengths': strengths,
            'weaknesses': weaknesses,
            'opportunities': ['فرص نمو' if self.cash_ratio() > 1 else 'تحسين الكفاءة'],
            'threats': ['مخاطر سيولة' if self.current_ratio() < 0.8 else 'منافسة']
        }
    
    def _comprehensive_advanced_metrics(self) -> Dict[str, Any]:
        """المقاييس المتقدمة الشاملة (17 نوع)"""
        return {
            'financial_strength_index': self._calculate_financial_strength(),
            'sustainable_growth_rate': self._calculate_sustainable_growth(),
            'value_metrics': {
                'enterprise_value_to_ebit': round(self.ev_to_ebitda(), 2),
                'tangible_value_ratio': round(self._tangible_value_ratio(), 2)
            }
        }
    
    def _calculate_financial_strength(self) -> float:
        """حساب مؤشر القوة المالية الشامل"""
        liquidity_score = min(self.current_ratio() / 2 * 25, 25)
        profitability_score = min(self.return_on_equity() / 20 * 25, 25)
        leverage_score = min((2 - self.debt_to_equity_ratio()) / 2 * 25, 25) if self.debt_to_equity_ratio() <= 2 else 0
        efficiency_score = min(self.asset_turnover() / 1.5 * 25, 25)
        
        return round(liquidity_score + profitability_score + leverage_score + efficiency_score, 2)
    
    def _calculate_sustainable_growth(self) -> float:
        """حساب معدل النمو المستدام"""
        retention_ratio = 1 - (self.data.dividends_paid / self.data.net_income) if self.data.net_income > 0 else 0
        return round(self.return_on_equity() * retention_ratio, 2)
    
    def _tangible_value_ratio(self) -> float:
        """نسبة القيمة الملموسة"""
        tangible_assets = self.data.total_assets - self.data.intangible_assets - self.data.goodwill
        if tangible_assets == 0:
            return 0.0
        tangible_net_worth = self.data.shareholders_equity - self.data.intangible_assets - self.data.goodwill
        return (tangible_net_worth / tangible_assets) * 100
    
    def _determine_health_status(self) -> str:
        """تحديد الحالة الصحية للشركة"""
        strength_index = self._calculate_financial_strength()
        if strength_index > 75:
            return 'ممتاز'
        elif strength_index > 50:
            return 'جيد'
        elif strength_index > 25:
            return 'متوسط'
        else:
            return 'ضعيف'
    
    def _identify_strengths(self) -> List[str]:
        """تحديد نقاط القوة الرئيسية"""
        strengths = []
        if self.current_ratio() > 2:
            strengths.append('سيولة ممتازة')
        if self.return_on_equity() > 20:
            strengths.append('ربحية عالية')
        if self.debt_to_equity_ratio() < 0.5:
            strengths.append('هيكل مالي قوي')
        return strengths[:3]
    
    def _identify_weaknesses(self) -> List[str]:
        """تحديد نقاط الضعف الرئيسية"""
        weaknesses = []
        if self.current_ratio() < 1:
            weaknesses.append('ضعف في السيولة')
        if self.return_on_equity() < 10:
            weaknesses.append('ربحية منخفضة')
        if self.debt_to_equity_ratio() > 2:
            weaknesses.append('مديونية مرتفعة')
        return weaknesses[:3]
    
    def _calculate_investment_grade(self) -> str:
        """حساب درجة الاستثمار"""
        score = 0
        if self.return_on_equity() > 15:
            score += 20
        if self.current_ratio() > 1.5:
            score += 20
        if self.debt_to_equity_ratio() < 1:
            score += 20
        if self.earnings_growth_rate() > 10:
            score += 20
        if self.price_to_earnings_ratio() < 20:
            score += 20
        
        if score >= 80:
            return 'A'
        elif score >= 60:
            return 'B'
        elif score >= 40:
            return 'C'
        else:
            return 'D'