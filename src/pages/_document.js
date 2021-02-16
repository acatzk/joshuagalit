import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from "next-google-fonts"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument