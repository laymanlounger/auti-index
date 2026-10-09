
export default function(eleventyConfig) {

  // Include the stylesheet in the finished website
  eleventyConfig.addPassthroughCopy("style.css");

  // Format dates for display
  eleventyConfig.addFilter("dateDisplay", function(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(date);
  });

  // Collect all articles and sort by publication date
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md")
      .sort((a, b) => a.date - b.date);
  });

}
