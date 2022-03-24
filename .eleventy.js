const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/font')
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./src/404.html')

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_SHORT);
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}