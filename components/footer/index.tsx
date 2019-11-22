import { Fragment } from "react";

import { A, H1 } from "../typography";

export function Footer() {
  return (
    <Fragment>
      <div className={"container"}>
        <H1>max</H1>
        <div className={"bottom"}>
          <A href={"https://twitter.com/maxchehab"}>twitter</A>
          <A href="https://github.com/maxchehab">github</A>
          <A href="https://linkedin.com/in/maxchehab">linkedin</A>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: max-content;
          align-self: flex-end;
          padding: 15px;
        }

        @media only screen and (max-width: 806px) {
          .container {
            align-self: center;
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
        }
      `}</style>
    </Fragment>
  );
}
