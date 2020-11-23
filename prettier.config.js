/**
 * @type {import("prettier").Options}
 */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ["*.html"],
            options: {
                parser: "go-template",
            },
        },
    ],
};
