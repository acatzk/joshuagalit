import '~/styles/global.css';
import '~/styles/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NProgress from '~/lib/react-nprogress';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider } from 'react-toast-notifications';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <NProgress />
      <ToastProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default MyApp;
