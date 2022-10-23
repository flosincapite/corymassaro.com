const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  const metadata = await Image(
    src,
    {
      widths: [300, 600],
      formats: ["gif", "avif"]
    }
  );

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addPassthroughCopy("./_src/css/");
  eleventyConfig.addPassthroughCopy("./_src/images/");
  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
