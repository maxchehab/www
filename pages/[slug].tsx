import { NextPageContext } from "next";
import React, { Component } from "react";

interface ArticleProps {
  article: Article;
}

export default class Article extends Component<ArticleProps> {
  static async getInitialProps({ query }: NextPageContext) {
    const { slug } = query;

    try {
      const article = await import(`../content/articles/${slug}.md`);

      return { article };
    } catch (error) {
      return { article: "not found" };
    }
  }

  render() {
    return <div>{JSON.stringify(this.props.article)}</div>;
  }
}
