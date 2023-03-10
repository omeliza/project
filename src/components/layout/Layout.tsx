import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout as PrismicLayout } from 'prismic-types';

import { ExitPreview } from 'components/exit-preview/ExitPreview';
import { Footer } from 'components/footer/Footer';
import { PageTransition } from 'components/page-transition/PageTransition';

import { useScrollbarWidth } from 'hooks/useScrollbarWidth';
import { useUiState } from 'hooks/useUiState';

import s from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  layout: PrismicLayout | null;
  preview?: boolean;
};

export const Layout = ({ children, preview }: LayoutProps) => {
  const { setUIState } = useUiState();

  const router = useRouter();

  useEffect(() => {
    setUIState({ isNavOpen: false });
  }, [router, setUIState]);

  useScrollbarWidth();

  return (
    <div className={s.layout}>
      <PageTransition route={router.asPath}>
        <main id="main">{children}</main>
      </PageTransition>
      <div id="modal-container" />
      <Footer />
      {preview && <ExitPreview />}
    </div>
  );
};
