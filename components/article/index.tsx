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
      <div className={"article"}>
        <Link href={`/${article.slug}`}>
          <a className={"title"}>{title}</a>
        </Link>
        <div className={"bottom"}>
          <div className={"description"}>{description}</div>
          <span className={"date"}>{moment(date).format("MMMM Do")}</span>
        </div>
      </div>
      <style jsx>{`
        .bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top 15px;
        }

        .article {
          direction: ltr;
          display: flex;
          flex-direction: column;
          width: 444px;
          margin-bottom: 20px;
        }

        .title {
          font-family: Cardo;
          font-style: bold;
          font-size: 32px;
          transition: border-bottom 0.2s;

          color: #ffffff;
          border-bottom: solid 1px #1a1a1a;
          text-decoration: none;
          width: max-content;
        }

        .title:hover,
        .title:focus {
          border-bottom: solid 1px transparent;
        }

        .description {
          width: 60%;
          font-size: 19px;
          color: #a8a8a8;
        }

        .date {
          font-style: italic;
          font-size: 16px;
          color: #686868;
          align-self: end;
        }

        @media only screen and (max-width: 806px) {
          .description {
            width: 100%;
          }

          .bottom {
            flex-direction: column;
            justify-content: auto;
          }

          .date {
            margin-top: 10px;
            align-self: start;
          }
        }
      `}</style>
    </Fragment>
  );
}
