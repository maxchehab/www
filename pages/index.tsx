import React, { Component, Fragment } from "react";

import { ArticleComponent } from "../components/article";
import { Footer } from "../components/footer";
import Article from "../common/interfaces/article.interface";
import getArticles from "../common/utils/getArticles.util";

interface HomeProps {
  articles: Article[];
}

const ARTICLE = {
  attributes: {
    title: "Adipiscing enim eu turpis",
    date: new Date(),
    description: "Adipiscing enim eu turpis egestas pretium aenean pharetra."
  }
} as Article;

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
        <div className={"container"}>
          <Footer />

          <div className={"articles"}>
            <div className={"gradient-top"} />
            {articles}
            <div className={"bottom-space"} />
            <div className={"gradient-bottom"} />
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
            height: 100vh;
            justify-content: end;
            width: 100vw;
            flex-direction: row-reverse;
            justify-content: space-between;
          }

          .articles {
            max-height: 100vh;
            overflow-y: scroll;
            direction: rtl;
            margin: 100px 0px;
            padding: 0 64px;
            display: flex;
            flex-direction: column;
            align-items: end;
          }

          @media only screen and (max-width: 806px) {
            .container {
              justify-content: start;
              flex-direction: column;
            }

            .articles {
              align-self: center;
              overflow-y: visible;
              margin: 0;
              padding: 0;
              margin-left: 100px;
            }

            .gradient-top,
            .gradient-bottom {
              display: none;
            }
          }

          .flex {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .bottom-space {
            width: 444px;
            padding-top: 50px;
          }

          .gradient-top {
            width: 444px;
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            padding-top: 50px;
            position: sticky;
            top: 0;
          }

          .gradient-bottom {
            width: 444px;
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1)
            );
            padding-top: 50px;
            position: sticky;
            bottom: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}
