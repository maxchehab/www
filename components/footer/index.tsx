import { Fragment } from "react";

import { A, H1 } from "../typography";

export function Footer() {
  return (
    <Fragment>
      <div className={"container"}>
        <H1 style={{ marginBottom: "-38px" }}>max</H1>
        <div className={"bottom"}>
          <A href={"https://twitter.com/maxchehab"}>twitter</A>
          <A href="https://github.com/maxchehab">github</A>
          <A href="https://linkedin.com/in/maxchehab">linkedin</A>
        </div>
      </div>
      <style jsx>{`
        .container {
          bottom: 0;
          right: 0;
          position: fixed;
          padding: 32px;
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
