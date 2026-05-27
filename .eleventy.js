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

function getRandomElement( items ) {
    const index = Math.floor( Math.random() * items.length );
    return items[ index] ;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/images/");
    eleventyConfig.addPassthroughCopy("./_src/fonts/");
    // TODO: Parameterize these links elsewhere so they can be used in
    // templates instead of having to declare them everywhere.
    // TODO: This is a horrible hack; there should just be a way to call a 
    // 0-ary function?
    eleventyConfig.addFilter("getRandomPage", function( _unused ) {
        const endpoints = [
            "/about/",
            "/publications/",
            "/workshops/",
            "/experimental-art/",
            "/contact/",
        ];
        return getRandomElement( endpoints );
    });
    return {
        dir: {
            input: '_src',
            output: '_site'
        }
    };
};
