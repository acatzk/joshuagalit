import '~/styles/global.css'
import '~/styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import NProgress from '~/lib/react-nprogress'
import { ToastProvider } from 'react-toast-notifications'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NProgress />
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </ThemeProvider>
  )
}