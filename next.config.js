const withBlog = require("with-blog");

module.exports = withBlog(
  { contentPath: "content/", pagePath: "/" },
  { poweredByHeader: false }
);
