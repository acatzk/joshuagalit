import '~/styles/tailwind.css'
import NProgress from '~/lib/nprogress'
import { ThemeProvider } from 'next-themes'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}