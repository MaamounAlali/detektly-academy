# نشر Detektly Academy على GitHub Pages

## الحالة الحالية
- تم تهيئة Git والفرع `main`.
- جميع الملفات مُضافة (staged).
- يوجد workflow جاهز: `.github/workflows/deploy.yml` (يُبنى الموقع وينشره عند الدفع إلى `main`).

## خطوات النشر

### 1. تنفيذ أول commit (من طرفية عادية)
إذا فشل `git commit` داخل Cursor بسبب إصدار Git، نفّذ من **Windows Terminal** أو **PowerShell** خارج Cursor:

```powershell
cd "f:\local-projects\detektly-academy"
git commit -m "Initial commit Detektly Academy for GitHub Pages"
```

### 2. إنشاء المستودع على GitHub
1. اذهب إلى [github.com/new](https://github.com/new).
2. اسم المستودع مثلاً: `detektly-academy` (أو أي اسم تفضّله).
3. اختر **Public**.
4. **لا** تضف README أو .gitignore (المشروع يحتويها مسبقاً).
5. انقر **Create repository**.

### 3. ربط المشروع بالمستودع والدفع
استبدل `YOUR_USERNAME` و`REPO_NAME` باسم المستخدم واسم المستودع:

```powershell
cd "f:\local-projects\detektly-academy"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

مثال إذا كان المستودع `maamoun-dev/detektly-academy`:

```powershell
git remote add origin https://github.com/maamoun-dev/detektly-academy.git
git push -u origin main
```

### 4. تفعيل GitHub Pages
1. في المستودع: **Settings** → **Pages**.
2. تحت **Build and deployment**:
   - **Source**: اختر **GitHub Actions**.
3. بعد أول دفع ناجح، سيعمل الـ workflow ويُنشر الموقع.
4. الرابط سيكون: `https://YOUR_USERNAME.github.io/REPO_NAME/`  
   أو إذا أضفت `CNAME` (academy.detektly.com): اربط الدومين في إعدادات Pages.

## التحديثات لاحقاً
بعد أي تعديل:

```powershell
git add -A
git commit -m "وصف التعديل"
git push origin main
```

سيقوم GitHub Actions ببناء الموقع ونشره تلقائياً.
