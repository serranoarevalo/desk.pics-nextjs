import React from "react";
import App, { Container } from "next/app";
import Header from "../components/header";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return pageProps;
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <>
            <Header />
            <Component {...pageProps} />
          </>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
