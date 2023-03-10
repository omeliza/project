import { query } from 'api/prismic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { frontpageQuery } from 'prismic/queries/frontpageQuery';
import { layoutDataQuery } from 'prismic/queries/layoutQuery';
import { Frontpage, Layout } from 'prismic-types';

import { H1 } from 'components/heading/Heading';
import { asText } from 'components/rich-text/RichText';
import { PrismicMeta } from 'containers/meta/PrismicMeta';

import { localeToPrismicLocale } from 'utils/i18n';

export type FrontpageProps = {
  preview?: boolean;
  frontpage: Frontpage;
  layout: Layout | null;
};

export default function FrontpageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const frontpage = data.frontpage;

  return (
    <>
      <PrismicMeta data={frontpage} layout={data.layout} />

      <H1>{asText(frontpage.title)}</H1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<FrontpageProps> = async ({
  preview = false,
  previewData,
  locale,
}) => {
  const lang = localeToPrismicLocale(locale);

  const [layoutData, pageData] = await Promise.all([
    layoutDataQuery(lang),
    query(frontpageQuery, {
      previewData,
      variables: { lang },
      cacheKey: `frontpage-${lang}`,
    }),
  ]);

  const layout = layoutData?.layout ?? null;
  const frontpage = pageData?.frontpage ?? null;

  if (!frontpage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      layout,
      frontpage,
    },
  };
};
