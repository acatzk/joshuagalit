import Head from 'next/head'
import '~/styles/tailwind.css'
import NProgress from '~/lib/nprogress'
import { ThemeProvider } from 'next-themes'
import 'react-mde/lib/styles/css/react-mde-all.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { ToastProvider } from 'react-toast-notifications'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale-1" />
      </Head>
      <ThemeProvider attribute="class">
        <NProgress />
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}