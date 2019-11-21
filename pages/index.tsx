import React, { Component } from "react";

import getArticles from "../common/utils/getArticles.util";
import Article from "../common/interfaces/article.interface";

interface HomeProps {
  articles: Article[];
}

export default class Home extends Component<HomeProps> {
  static async getInitialProps() {
    const articles = await getArticles();

    return { articles };
  }

  render() {
    const { articles } = this.props;

    return <div>{JSON.stringify(articles, null, 2)}</div>;
  }
}
