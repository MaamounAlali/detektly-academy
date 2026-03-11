# البناء والنشر (Eleventy + GitHub Pages)

## البناء محلياً

```bash
npm install
npm run build
```

المخرجات في مجلد `_site/`. يمكنك معاينة الموقع محلياً:

```bash
npm run serve
```

ثم افتح <http://localhost:8080>.

## إضافة يوم جديد (المسار التأسيسي 28 يومًا)

1. أنشئ ملفاً في `_content/seo-geo-foundation-28-day/` باسم `day-XX.md` (مثلاً `day-03.md`).
2. استخدم نفس الـ front matter كما في `day-01.md` أو `day-02.md`:
   - `layout`, `title`, `titleShort`, `day`, `week`, `weekTitle`, `pathSlug`, `curriculumUrl`, `goal`, `tags`, `permalink`.
3. اكتب المحتوى داخل الـ `<section class="content-card">` كما في الملفات الموجودة.
4. شغّل `npm run build` ثم ارفع التغييرات.

## إضافة مسار تعليمي جديد (مستقبلاً)

- أنشئ مجلداً تحت `_content/` للمسار الجديد (مثلاً `_content/another-path/`).
- أضف قالباً (layout) للمسار إن احتجت، أو أعد استخدام `day.njk` مع تغيير `pathSlug` و `curriculumUrl`.
- أضف مجموعة (collection) جديدة في `.eleventy.js` إن أردت تنقلاً (سابق/التالي) بين أيام هذا المسار.
- انسخ الصفحات الثابتة للمسار (صفحة المنهج) إلى الجذر وأضفها إلى `addPassthroughCopy` في `.eleventy.js` إن لزم.

## النشر على GitHub Pages

1. في المستودع: **Settings → Pages → Build and deployment**: اختر **Source = GitHub Actions**.
2. عند الدفع إلى الفرع `main` (أو تشغيل الـ workflow يدوياً)، يتم بناء الموقع ونشره تلقائياً.
3. الـ workflow معرّف في `.github/workflows/deploy.yml`.

الموقع المنشور يكون متوافقاً مع GitHub Pages (ملفات ثابتة فقط).

---

## Custom subdomain: academy.detektly.com (Namecheap + GitHub Pages)

The repo includes a `CNAME` file so the built site is served at **academy.detektly.com**. Do the following once.

### 1. GitHub (repository)

1. Push this repo to GitHub (e.g. `https://github.com/MaamounAlali/detektly-academy`).
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
3. After the first deploy, under **Pages** set **Custom domain** to: `academy.detektly.com`.
4. Save, then enable **Enforce HTTPS** when it becomes available.

### 2. Namecheap (DNS)

1. Log in to Namecheap → **Domain List** → **Manage** for **detektly.com**.
2. Go to **Advanced DNS**.
3. Add a **CNAME Record**:
   - **Type**: CNAME
   - **Host**: `academy`
   - **Value**: `MaamounAlali.github.io` (replace with your GitHub username; for org repos use `YOUR_ORG.github.io`)
   - **TTL**: Automatic (or 300)
4. Remove any other A or CNAME record that uses the host `academy` if it conflicts.
5. Save. DNS can take a few minutes up to 48 hours to propagate.

### 3. Verify

- Visit **https://academy.detektly.com**. If you see a certificate warning at first, wait for GitHub to provision the certificate and try again later.
- In the repo **Settings → Pages**, the custom domain should show as verified when DNS is correct.
