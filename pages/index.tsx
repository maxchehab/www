import React, { Component, Fragment } from "react";

import { ArticleComponent } from "../components/article";
import { Footer } from "../components/footer";
import Article from "../common/interfaces/article.interface";
import getArticles from "../common/utils/getArticles.util";

interface HomeProps {
  articles: Article[];
}

export default class Home extends Component<HomeProps> {
  static async getInitialProps() {
    const articles = (await getArticles()).sort(
      (a: Article, b: Article) =>
        new Date(b.attributes.date).getTime() -
        new Date(a.attributes.date).getTime()
    );

    return { articles };
  }

  render() {
    const articles = this.props.articles.map(article => (
      <ArticleComponent article={article} key={article.slug} />
    ));

    return (
      <Fragment>
        <div className={"flex"}>
          <div className={"articles-container"}>
            <div className={"articles"}>
              <div className={"gradient-top"} />
              {articles}
              <div className={"gradient-bottom"} />
            </div>
          </div>
        </div>

        <Footer />

        <style jsx>{`
          .flex {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .articles-container {
            margin: 100px 0px;

            height: 80%;
            overflow-y: scroll;
            width: max-content;
          }

          .articles {
            margin: 0 64px;
          }

          .gradient-top {
            height: 50px;
            width: 100%;
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            position: sticky;
            top: 0;
          }

          .gradient-bottom {
            height: 50px;
            width: 100%;
            background-image: linear-gradient(
              to top,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            position: sticky;
            bottom: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}
