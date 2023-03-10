import { query } from 'api/prismic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { layoutDataQuery } from 'prismic/queries/layoutQuery';
import { pageQuery } from 'prismic/queries/pageQuery';
import { Layout, Page } from 'prismic-types';

import { H1 } from 'components/heading/Heading';
import { asText } from 'components/rich-text/RichText';
import { PrismicMeta } from 'containers/meta/PrismicMeta';
import { PageSlices } from 'containers/slices/PageSlices';

import { localeToPrismicLocale } from 'utils/i18n';

export type PageProps = {
  preview: boolean;
  page: Page | null;
  layout: Layout | null;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const page = data.page ?? null;

  if (!page) {
    return null;
  }

  return (
    <>
      <PrismicMeta data={page} layout={data.layout} />

      <H1>{asText(page.title)}</H1>

      <PageSlices data={page.slices ?? []} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  preview = false,
  previewData,
  params,
  resolvedUrl,
  locale,
}) => {
  const lang = localeToPrismicLocale(locale);
  const uid = params?.uid as string;
  const variables = { uid, lang };
  const cacheKey = `${lang}-uid-${uid}`;

  const [layoutData, pageData] = await Promise.all([
    layoutDataQuery(lang),
    query(pageQuery, {
      previewData,
      variables,
      cacheKey: `page-${cacheKey}`,
      breadcrumbs: [resolvedUrl],
    }),
  ]);

  const layout = layoutData?.layout ?? null;
  const page = pageData?.page ?? null;

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      page,
      layout,
    },
  };
};
