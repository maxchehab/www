import App from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cardo&display=swap"
            rel="stylesheet"
          ></link>
          <style>{`
            body {
              background: #000;
              font-family: "Cardo", serif;
              color: #fff;
              margin: 0px;
            }
          `}</style>
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}
