---
layout: day.njk
title: اليوم 2 — ما هو الرابط URL (عنوان الصفحة الكامل على الويب)؟
titleShort: ما هو الرابط URL؟
day: 2
week: 1
weekTitle: الأسبوع 1 — الويب من الصفر
pathSlug: seo-geo-foundation-28-day
curriculumUrl: seo_geo_foundation_28_day_curriculum.html
goal: "<strong>هدف اليوم:</strong> في نهاية هذا اليوم يجب أن تكون قادرًا على: فهم أن URL (عنوان الصفحة الكامل على الويب) ليس مجرد نص؛ تمييز الأجزاء الأساسية داخل URL؛ التفريق من الرابط فقط بين <strong>homepage (الصفحة الرئيسية)</strong> و<strong>internal page (صفحة داخلية)</strong>. الفكرة المركزية: <strong>الرابط ليس اسمًا عشوائيًا، بل عنوان منظم يخبرك أين أنت وماذا تفتح.</strong>"
tags: foundation28
permalink: paths/seo-geo-foundation-28-day/day-02.html
---

<section class="content-card">
<h2>1) شرح الدرس</h2>
<h3>ما هو URL (عنوان الصفحة الكامل على الويب)؟</h3>
<p>هو العنوان الذي يحدد مكان صفحة أو مورد على الويب بشكل دقيق.</p>
<p class="url-example">https://example.com/blog/seo-guide?lang=ar</p>
<p>هذا ليس "رابطًا" فقط بالمعنى العام. هذا عنوان كامل فيه طبقات ومعلومات. عندما تنظر إليه بعين محترف، فأنت لا ترى سطرًا واحدًا — أنت ترى أجزاءً، وكل جزء له وظيفة.</p>
</section>

<section class="content-card">
<h2>2) الأجزاء الأساسية في URL (عنوان الصفحة الكامل على الويب)</h2>
<p>سنأخذ المثال:</p>
<p class="url-example">https://example.com/blog/seo-guide?lang=ar</p>
<h3>أ) protocol (بروتوكول الاتصال: طريقة التواصل بين المتصفح والموقع)</h3>
<p>هو الجزء الأول: <code>https://</code>. الأشهر: <strong>http</strong> و<strong>https</strong>. وجود HTTPS (اتصال آمن مشفر) يعني أن الاتصال أكثر أمانًا من HTTP (اتصال عادي غير مشفر). في هذه المرحلة لا نحتاج عمقًا تقنيًا — يكفي أن تعرف أن هذا الجزء يحدد طريقة الوصول.</p>
<h3>ب) domain (اسم النطاق: الاسم الرئيسي للموقع)</h3>
<p>هو: <strong>example.com</strong>. هذا هو اسم الموقع الذي تذهب إليه.</p>
<h3>ج) path (المسار: الجزء الذي يحدد الصفحة أو القسم داخل الموقع)</h3>
<p>هو: <strong>/blog/seo-guide</strong>. هذا الجزء يخبرك أنك لست في الصفحة الرئيسية، بل داخل قسم أو صفحة معينة.</p>
<h3>د) parameters (المعلمات: معلومات إضافية داخل الرابط)</h3>
<p>هي: <strong>?lang=ar</strong>. هذه تضيف تفاصيل إضافية، مثل: اللغة، الترتيب، الفلترة، التتبع. ليست موجودة في كل الروابط، لكنها شائعة جدًا.</p>
</section>

<section class="content-card">
<h2>3) كيف أميز من الرابط بين الصفحة الرئيسية والصفحة الداخلية؟</h2>
<p><strong>الصفحة الرئيسية</strong> غالبًا تكون هكذا:</p>
<p class="url-example">https://example.com/</p>
<p>أو أحيانًا: <code>https://example.com</code>. هنا لا يوجد path (مسار) واضح. هذا يدل غالبًا على أنك في <strong>homepage (الصفحة الرئيسية)</strong>.</p>
<p><strong>الصفحة الداخلية</strong> غالبًا تكون هكذا:</p>
<p class="url-example">https://example.com/about</p>
<p class="url-example">https://example.com/blog</p>
<p class="url-example">https://example.com/products/shoes</p>
<p>هنا يوجد path (مسار)، وهذا يعني غالبًا أنك في <strong>صفحة داخلية</strong>.</p>
</section>

<section class="content-card">
<h2>4) تشبيه واقعي</h2>
<p>تخيل أن <strong>website (موقع الويب)</strong> مثل مبنى كبير:</p>
<ul>
<li><strong>domain (اسم النطاق)</strong> = عنوان المبنى</li>
<li><strong>path (المسار)</strong> = رقم الغرفة أو القسم داخل المبنى</li>
<li><strong>parameters (المعلمات)</strong> = تعليمات إضافية، مثل: "اذهب للغرفة نفسها لكن باللغة العربية" أو "اعرض المنتجات الأرخص أولًا"</li>
</ul>
<p>هذا التشبيه كافٍ جدًا للمستوى التأسيسي.</p>
</section>

<section class="content-card">
<h2>5) أمثلة محللة</h2>
<table>
<thead><tr><th>المثال</th><th>البروتوكول</th><th>اسم النطاق</th><th>المسار</th><th>المعلمات</th><th>النتيجة</th></tr></thead>
<tbody>
<tr><td><code>https://nike.com</code></td><td>https</td><td>nike.com</td><td>لا يوجد</td><td>—</td><td>غالبًا <strong>homepage (الصفحة الرئيسية)</strong></td></tr>
<tr><td><code>https://nike.com/men/shoes</code></td><td>https</td><td>nike.com</td><td>/men/shoes</td><td>—</td><td><strong>internal page (صفحة داخلية)</strong></td></tr>
<tr><td><code>https://example.com/search?q=seo</code></td><td>https</td><td>example.com</td><td>/search</td><td>q=seo</td><td>صفحة داخلية فيها بحث بكلمة معينة</td></tr>
</tbody>
</table>
</section>

<section class="content-card">
<h2>6) الأخطاء الشائعة</h2>
<ul>
<li><strong>خطأ 1:</strong> اعتبار كل ما بعد اسم الموقع غير مهم. هذا خطأ — أحيانًا أهم معلومة في الرابط هي path (المسار).</li>
<li><strong>خطأ 2:</strong> الظن أن الرابط مجرد وسيلة ضغط. هذا فهم سطحي — الرابط أيضًا معلومة.</li>
<li><strong>خطأ 3:</strong> الخلط بين domain (اسم النطاق) و URL (عنوان الصفحة الكامل على الويب). domain جزء من URL، وليس الشيء نفسه.</li>
</ul>
</section>

<section class="content-card">
<h2>7) لماذا هذا مهم قبل SEO و GEO؟</h2>
<p>لأنك لاحقًا ستحتاج أن تقرأ الروابط بسرعة وتفهم: هل هذه صفحة رئيسية أم داخلية؟ هل الصفحة داخل قسم مقالات أم منتجات؟ هل الرابط منظم وواضح أم فوضوي؟ هل توجد parameters (معلمات) قد تؤثر على الفهم أو التتبع؟</p>
<p>المحترف لا يرى الرابط كزينة. المحترف يقرأ الرابط كإشارة بنيوية (إشارة تتعلق ببنية الموقع).</p>
</section>

<section class="content-card">
<h2>8) التمرين العملي</h2>
<h3>المهمة 1</h3>
<p>خذ 10 روابط من مواقع حقيقية، ثم قسّم كل واحد إلى: protocol (بروتوكول الاتصال)، domain (اسم النطاق)، path (المسار)، parameters (المعلمات) إن وُجدت.</p>
<h3>المهمة 2</h3>
<p>لكل رابط، حدّد: هل هو homepage (الصفحة الرئيسية)؟ أم internal page (صفحة داخلية)؟</p>
<h3>المهمة 3</h3>
<p>اكتب سطرًا بلسانك يشرح الرابط. مثال: "هذا الرابط يفتح صفحة داخلية داخل قسم المقالات، وفيه معلمة تحدد اللغة."</p>
</section>

<section class="content-card">
<h2>9) نموذج جاهز لورقة اليوم</h2>
<p><strong>عنوان الورقة:</strong> فهم URL (عنوان الصفحة الكامل على الويب)</p>
<table>
<thead><tr><th>الرابط</th><th>البروتوكول</th><th>اسم النطاق</th><th>المسار</th><th>المعلمات</th><th>رئيسية أم داخلية؟</th><th>شرحي أنا</th></tr></thead>
<tbody><tr><td colspan="7" style="text-align:center;color:var(--muted)">املأ 10 صفوف.</td></tr></tbody>
</table>
</section>

<section class="content-card">
<h2>10) اختبار فهم سريع</h2>
<p>أجب من نفسك:</p>
<ol>
<li>هل domain (اسم النطاق) هو نفسه URL (عنوان الصفحة الكامل على الويب)؟</li>
<li>ما الجزء الذي يخبرك غالبًا أنك داخل صفحة داخلية؟</li>
<li>هل وجود ? في الرابط يعني أحيانًا وجود parameters (معلمات)؟</li>
<li>هل https://example.com غالبًا صفحة رئيسية أم داخلية؟</li>
<li>هل https://example.com/blog/post-1 صفحة رئيسية أم داخلية؟</li>
</ol>
</section>

<section class="content-card">
<h2>11) ملخص قصير لليوم</h2>
<p>تعلمت اليوم أن URL (عنوان الصفحة الكامل على الويب) عنوان منظم، وليس مجرد شيء نضغط عليه. وتعلمت أن أهم أجزائه في المستوى التأسيسي هي: <strong>protocol (بروتوكول الاتصال)</strong>، <strong>domain (اسم النطاق)</strong>، <strong>path (المسار)</strong>، <strong>parameters (المعلمات)</strong>. وتعلمت أن وجود path (مسار) يعني غالبًا أنك داخل صفحة داخلية، لا الصفحة الرئيسية.</p>
</section>

<section class="content-card">
<h2>12) ما قد يبقى غامضًا</h2>
<p>أكثر شيء يربك المبتدئ هنا عادة هو: الفرق بين domain (اسم النطاق) و URL (عنوان الصفحة الكامل على الويب)؛ متى تكون parameters (المعلمات) مهمة ومتى تكون ثانوية؛ هل كل الصفحات الداخلية يجب أن يكون مسارها واضحًا دائمًا.</p>
<p>هذا طبيعي. وسيزول جزء كبير منه عندما نصل إلى <strong>اليوم 3: ما هو domain (اسم النطاق) وما هو hosting (الاستضافة: الخدمة التي تشغل ملفات الموقع على خادم)</strong>.</p>
</section>

<section class="content-card">
<h2>13) تطبيق صغير الآن</h2>
<p>لن أثقل عليك. خذ هذين الرابطين، وحاول أنت تقسيمهما:</p>
<p class="url-example">https://www.apple.com/</p>
<p class="url-example">https://www.apple.com/iphone/?afid=p238</p>
</section>
