import Article from "../interfaces/article.interface";

export default async function getArticles(): Promise<Article[]> {
  const markdownFiles = require
    .context("../../content/articles", false, /\.md$/)
    .keys()
    .map((relativePath: string) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path: string) => {
      const markdown = await import(`../../content/articles/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
}
