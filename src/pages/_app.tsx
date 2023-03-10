// import { gsap } from 'gsap';
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
// import { InertiaPlugin } from 'gsap/dist/InertiaPlugin'; // <- premium plugin
// import { SplitText } from 'gsap/dist/SplitText'; // <- premium plugin
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { UIProvider } from 'context/ui';
import { AppProps as NextAppProps } from 'next/app';
import { Layout as PrismicLayout } from 'prismic-types';

import { Devtools } from 'components/devtools/Devtools';
import { Layout } from 'components/layout/Layout';
import { Loading } from 'components/loading/Loading';
import { Meta } from 'containers/meta/Meta';

import 'styles/global.scss';

type InheritedPageProps = {
  layout?: PrismicLayout | null;
  preview?: boolean;
};

type AppProps<P> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

export default function App({ Component, pageProps }: AppProps<InheritedPageProps>) {
  const isDev = process.env.NODE_ENV === 'development';
  const layout = pageProps.layout as PrismicLayout | null;
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  return (
    <>
      <Meta />
      <UIProvider>
        <Layout layout={layout} preview={pageProps.preview ?? false}>
          <Component {...pageProps} />
        </Layout>
        <Loading />
      </UIProvider>
      {isDev && <Devtools />}
    </>
  );
}
