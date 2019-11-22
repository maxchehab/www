import { Fragment, AnchorHTMLAttributes, HTMLAttributes } from "react";

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Fragment>
      <h1 {...props} />
      <style jsx>{`
        h1 {
          color: #ffffff;
          font-size: 144px;
          line-height: 144px;
          margin: 0;
        }
      `}</style>
    </Fragment>
  );
}

export function A(props: AnchorHTMLAttributes<never>) {
  return (
    <Fragment>
      <a {...props} />
      <style jsx>{`
        a {
          font-family: Cardo;
          font-style: italic;
          font-size: 18px;
          transition: border-bottom 0.2s;

          color: #686868;
          border-bottom: solid 1px #1a1a1a;
          text-decoration: none;
        }

        a:hover,
        a:focus {
          border-bottom: solid 1px transparent;
        }
      `}</style>
    </Fragment>
  );
}
