import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument<{}> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
