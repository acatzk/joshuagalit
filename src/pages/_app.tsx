import '~/styles/global.css'
import type { AppProps } from 'next/app'
import { nhost } from '~/lib/nhost-client'
import { ThemeProvider } from 'next-themes'
import NextProgress from '~/lib/next-progress'
import { NhostNextProvider } from '@nhost/nextjs'
import { Slide, ToastContainer } from 'react-toastify'
import { NhostApolloProvider } from '@nhost/react-apollo'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <ThemeProvider attribute="class">
          <NextProgress />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
          <Component {...pageProps} />
          {process.env.NODE_ENV === 'production' && (
            <MessengerCustomerChat
              pageId={process.env.MESSENGER_PAGE_ID}
              appId={process.env.MESSENGER_APP_ID}
            />
          )}
        </ThemeProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp
