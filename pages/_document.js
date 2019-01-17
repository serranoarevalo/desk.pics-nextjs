import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#f8f5f2" />
          <link rel="stylesheet" href="/static/reset.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="og:title"
            content="Deskpics | Share where you work from"
          />
          <meta name="og:image" content="/static/ogimage.png" />
          <meta
            name="og:description"
            content="Share where you work from and see other people's desks!"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
