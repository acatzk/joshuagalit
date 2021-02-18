import '~/styles/globals.css'
import Layout from '~/layouts/default'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}