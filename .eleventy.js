module.exports = function (eleventyConfig) {
  // مخرجات البناء (متوافقة مع GitHub Pages)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("brand");
  // للنشر على academy.detektly.com عبر GitHub Pages
  eleventyConfig.addPassthroughCopy("CNAME");
  // Copy HTMLPages/* to site root so GitHub Pages serves index.html at /
  const rootPages = [
    "index.html",
    "paths.html",
    "exercises.html",
    "progress.html",
    "resources.html",
    "faq.html",
    "about.html",
    "path-tools.html",
    "path-strategy.html",
    "dashboard.html",
    "cards.html",
    "seo_geo_foundation_28_day_curriculum.html",
    "seo_geo_42_day_curriculum.html",
  ];
  rootPages.forEach((f) => {
    eleventyConfig.addPassthroughCopy({ ["HTMLPages/" + f]: f });
  });

  // مجموعة أيام المسار التأسيسي (لتنقل السابق/التالي)
  eleventyConfig.addCollection("foundation28", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("foundation28")
      .sort((a, b) => a.data.day - b.data.day);
  });

  return {
    dir: {
      input: "_content",
      output: "_site",
      includes: "../_includes",
    },
    pathPrefix: "",
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
