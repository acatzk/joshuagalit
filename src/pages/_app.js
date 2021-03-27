import '~/styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}