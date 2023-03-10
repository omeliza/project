import { query } from 'api/prismic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { linkResolver } from 'prismic/linkResolver';
import { isFirstCursor, pageNumberToCursor } from 'prismic/paging';
import { articlesQuery } from 'prismic/queries/articlesQuery';
import { layoutDataQuery } from 'prismic/queries/layoutQuery';
import { Article, Layout, PageInfo } from 'prismic-types';

import { H1 } from 'components/heading/Heading';
import { Link } from 'components/link/Link';
import { asText, RichText } from 'components/rich-text/RichText';
import { Section } from 'components/section/Section';
import { PrismicMeta } from 'containers/meta/PrismicMeta';

import { ExcludesFalse } from 'utils/excludesFalse';
import { localeToPrismicLocale } from 'utils/i18n';

export type NewsProps = {
  preview: boolean;
  news: Array<Article>;
  pageInfo: PageInfo | null;
  page: number;
  layout: Layout | null;
};

export const PER_PAGE = 9;

export default function NewsPage(
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { news, pageInfo, page = 1 } = data;

  const router = useRouter();

  if (news.length === 0) {
    return <>empty</>;
  }

  const hasPreviousPage =
    pageInfo?.hasPreviousPage && !isFirstCursor(pageInfo.startCursor) && page > 1;
  const previousPage = `${router.pathname}/?page=${page - 1}`;

  const hasNextPage = pageInfo?.hasNextPage;
  const nextPage = `${router.pathname}/?page=${page + 1}`;

  return (
    <>
      <PrismicMeta layout={data.layout} />

      <Section>
        <ul>
          {news.map((item, i) => (
            <li key={i}>
              <H1>{asText(item.title)}</H1>
              {item.description && <RichText>{item.description}</RichText>}
              <Link to={linkResolver(item)}>Link</Link>
            </li>
          ))}
        </ul>
      </Section>

      {(hasPreviousPage || hasNextPage) && (
        <ul>
          {hasPreviousPage && (
            <li>
              <Link to={previousPage}>Fyrri síða</Link>
            </li>
          )}
          {hasNextPage && (
            <li>
              <Link to={nextPage}>Fyrri síða</Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<NewsProps> = async ({
  preview = false,
  query: qs = {},
  locale,
}) => {
  const lang = localeToPrismicLocale(locale);
  const pageQs = qs.page as string;
  const page = pageQs ? parseInt(pageQs, 10) : 1;

  const variables = {
    lang,
    first: PER_PAGE,
    after: page > 1 ? pageNumberToCursor(page, PER_PAGE) : '',
  };

  const [layoutData, pageData] = await Promise.all([
    layoutDataQuery(lang),
    query(articlesQuery, {
      variables,
      cacheKey: `articles-${lang}-page-${page}`,
    }),
  ]);

  const pageInfo = pageData?.allArticles.pageInfo ?? null;

  const news: Array<Article> = (pageData?.allArticles.edges ?? [])
    .map((i) => i?.node ?? null)
    .filter(Boolean as unknown as ExcludesFalse);
  const layout = layoutData?.layout ?? null;

  return {
    props: {
      preview,
      news,
      pageInfo,
      page,
      lang,
      layout,
    },
  };
};
