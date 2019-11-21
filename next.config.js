const fs = require("fs");

const getPathsForArticles = () =>
  fs
    .readdirSync("./content/articles")
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/${trimmedName}`]: {
          page: "/[slug]",
          query: {
            slug: trimmedName
          }
        }
      };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

module.exports = {
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });

    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForArticles()
    };
  }
};
