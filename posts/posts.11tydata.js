export default {
  tags: ["posts"],
  eleventyComputed: {
    slug: (data) => {
      return data.page.fileSlug;
    }
  }
};
