import { Fragment } from "react";
import Link from "next/link";

import Article from "../../common/interfaces/article.interface";
import moment from "moment";

interface ArticleComponentProps {
  article: Article;
}

export function ArticleComponent({ article }: ArticleComponentProps) {
  const { title, description, date } = article.attributes;

  return (
    <Fragment>
      <Link href={`/${article.slug}`}>
        <a className={"title"}>{title}</a>
      </Link>
      <div className={"description"}>
        {description}
        <span className={"date"}>{` ${moment(date).format("MMMM Do")}`}</span>
      </div>
      <style jsx>{`
        .title {
          font-family: Cardo;
          font-style: bold;
          font-size: 32px;
          transition: border-bottom 0.2s;

          color: #ffffff;
          border-bottom: solid 1px #1a1a1a;
          text-decoration: none;
        }

        .title:hover,
        .title:focus {
          border-bottom: solid 1px transparent;
        }

        .description {
          width: 320px;
          margin-top: 15px;
          font-size: 19px;
          color: #a8a8a8;
          margin-bottom: 15px;
        }

        .date {
          font-style: italic;
          font-size: 16px;
          color: #686868;
        }
      `}</style>
    </Fragment>
  );
}
