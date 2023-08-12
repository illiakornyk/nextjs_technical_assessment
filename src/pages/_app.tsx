import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const useStandardLayout = router.pathname !== '/thumbnail';

  return (
    <Layout useStandardLayout={useStandardLayout}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
