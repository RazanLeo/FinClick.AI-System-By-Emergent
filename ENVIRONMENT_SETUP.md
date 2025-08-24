# 🔧 إعداد متغيرات البيئة - FinClick.AI

## ⚠️ **مهم جداً قبل تشغيل النظام:**

### 1️⃣ **إعداد Backend (.env):**
انسخ ملف `.env.example` إلى `.env` في مجلد `backend/`:
```bash
cp backend/.env.example backend/.env
```

ثم اطلب من المطور الأصلي المفاتيح التالية وأضفها في `backend/.env`:
```
OPENAI_API_KEY="مفتاح_OpenAI_هنا"
FMP_API_KEY="مفتاح_FMP_هنا" 
JWT_SECRET="مفتاح_JWT_قوي_هنا"
SUPABASE_URL="رابط_Supabase_هنا"
SUPABASE_ANON_KEY="مفتاح_Supabase_هنا"
```

### 2️⃣ **إعداد Frontend (.env):**
انسخ ملف `.env.example` إلى `.env` في مجلد `frontend/`:
```bash
cp frontend/.env.example frontend/.env
```

### 3️⃣ **تشغيل النظام:**
```bash
# تثبيت المتطلبات
pip install -r backend/requirements.txt
cd frontend && yarn install

# تشغيل الخدمات
sudo supervisorctl restart all
```

---

## 🔑 **المفاتيح المطلوبة:**

### **للحصول على مفاتيح API:**
- **OpenAI API Key**: https://platform.openai.com/api-keys
- **FMP API Key**: https://financialmodelingprep.com/developer/docs
- **Supabase**: https://supabase.com/dashboard

### **حسابات تسجيل الدخول المجهزة:**
- **المدير**: `Razan@FinClick.AI` / `RazanFinClickAI@056300`
- **الضيف**: `Guest@FinClick.AI` / `GuestFinClickAI@123321`

---

## 🚨 **ملاحظة أمنية:**
لا تشارك أبداً ملفات `.env` أو تضعها في Git! استخدم دائماً `.env.example` للمشاركة.