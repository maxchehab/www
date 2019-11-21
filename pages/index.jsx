import React, { Component } from "react";
import content from "../content/articles/index.md";

export default class Home extends Component {
  render() {
    const {
      html,
      attributes: { title, cats }
    } = content;

    return <div>hello world</div>;
  }
}
