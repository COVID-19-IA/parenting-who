const dayjs = require("dayjs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.(png|jpg|svg|webp)");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addWatchTarget("./src/");

  // filter
  eleventyConfig.addNunjucksFilter("dateFormat", (v) => {
    return dayjs(v).format("YYYY年MM月DD日 HH:mm");
  });

  // filter
  eleventyConfig.addNunjucksFilter("dateISOFormat", (v) => {
    return dayjs(v).format("YYYY-MM-DDTHH:mmZ");
  });

  // Nunjucks Shortcode
  eleventyConfig.addNunjucksShortcode("baseTag", (v) => {
    return process.env.NODE_ENV === "production" ? `<base href="${v}">` : "";
  });
  return {
    dir: { input: "src", output: "docs" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "yml"],
    htmlTemplateEngine: "njk",
  };
};
