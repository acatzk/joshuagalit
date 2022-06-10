import '~/styles/global.css'
import type { AppProps } from 'next/app'
import { nhost } from '~/lib/nhost-client'
import { ThemeProvider } from 'next-themes'
import NextProgress from '~/lib/next-progress'
import { NhostNextProvider } from '@nhost/nextjs'
import { ToastProvider } from 'react-toast-notifications'
import { NhostApolloProvider } from '@nhost/react-apollo'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <ThemeProvider attribute="class">
          <NextProgress />
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </ThemeProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp
