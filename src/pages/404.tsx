import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { layoutDataQuery } from 'prismic/queries/layoutQuery';

import { H1 } from 'components/heading/Heading';
import { Section } from 'components/section/Section';

import { localeToPrismicLocale } from 'utils/i18n';

type PageProps = {
  preview?: boolean;
};

const Custom404 = ({ preview }: PageProps) => {
  const { asPath } = useRouter();

  useEffect(() => {
    if (preview) {
      document.location = '/api/exit-preview?redirect=' + asPath;
    }
  });

  return (
    <Section>
      <H1>404</H1>
    </Section>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false, locale }) => {
  const lang = localeToPrismicLocale(locale);

  const layoutData = await layoutDataQuery(lang);
  const layout = layoutData?.layout ?? null;

  return {
    props: {
      preview,
      layout,
    },
  };
};

export default Custom404;
