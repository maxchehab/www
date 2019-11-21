import React, { Component } from "react";

import getArticles from "../utils/getArticles";

export default class extends Component {
  static async getInitialProps() {
    const articles = await getArticles();

    return { articles };
  }

  render() {
    const { articles } = this.props;

    return <div>{JSON.stringify(articles, null, 2)}</div>;
  }
}
