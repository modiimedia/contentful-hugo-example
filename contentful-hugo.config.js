// go to https://github.com/ModiiMedia/contentful-hugo for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    contentful: {
        space: "6fc4s4k6v9co",
        token: "fZ8wf7cWcWCn9f9IKv70JvWcGaPImDaimQYsSuyEVP0",
    },
    singleTypes: [
        {
            id: "settings",
            directory: "data",
            fileName: "settings",
            fileExtension: "yaml",
        },
    ],
    repeatableTypes: [
        {
            id: "post",
            directory: "content/posts",
            mainContent: "mainContent",
        },
        {
            id: "gallery",
            directory: "content/galleries",
            isHeadless: true,
        },
        {
            id: "categories",
            directory: "content/categories",
            isTaxonomy: true,
        },
        {
            id: "navigationLink",
            directory: "content/_navigationLinks",
            isHeadless: true,
        },
        {
            id: "navigationDropdown",
            directory: "content/_navigationDropdowns",
            isHeadless: true,
        },
    ],
};
