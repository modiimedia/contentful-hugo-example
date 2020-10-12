// go to https://github.com/ModiiMedia/contentful-hugo for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
	singleTypes: [
		{
			id: "post",
			directory: "content",
			fileName: "_index",
		},
	],
	repeatableTypes: [
		{
			id: "post",
			directory: "content/posts",
		},
		{
			id: "gallery",
			directory: "content/galleries",
			isHeadless: true,
		},
	],
};
