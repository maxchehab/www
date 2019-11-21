export default async function getArticles() {
  const markdownFiles = require
    .context("../content/articles", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/articles/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
}
