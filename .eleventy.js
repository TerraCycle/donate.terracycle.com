const del = require("del");
const path = require("path");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");

const config = {
    dir: {
        // ⚠️ This value is relative to your input directory.
        data: "../_data",
        input: "src",
        output: "public",
    },
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/images");

    if (process.env.ELEVENTY_ENV === "dev") {
        eleventyConfig.addPassthroughCopy("./src/css");
        eleventyConfig.addPassthroughCopy("./src/js");
        eleventyConfig.addWatchTarget("./src/css/");
        eleventyConfig.addWatchTarget("./src/js/");
    }

    if (process.env.ELEVENTY_ENV === "prod") {
        const dirToClean = path.join(config.dir.output, "*");
        del.sync(dirToClean, { dot: true });

        eleventyConfig.addFilter("cssmin", function (code) {
            return new CleanCSS({}).minify(code).styles;
        });

        eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
            try {
                const minified = await minify(code);
                callback(null, minified.code);
            } catch (err) {
                console.error("Terser error: ", err);
                // Fail gracefully.
                callback(null, code);
            }
        });
    }

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });
    return config;
};
