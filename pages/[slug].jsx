import React, { Component } from "react";

export default class extends Component {
  static async getInitialProps({ query }) {
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
