import { query } from 'api/prismic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { linkResolver } from 'prismic/linkResolver';
import { articleQuery } from 'prismic/queries/articleQuery';
import { layoutDataQuery } from 'prismic/queries/layoutQuery';
import { Article, Layout } from 'prismic-types';

import { H1, H2, H3 } from 'components/heading/Heading';
import { Link } from 'components/link/Link';
import { asText, RichText } from 'components/rich-text/RichText';
import { Section } from 'components/section/Section';
import { PrismicMeta } from 'containers/meta/PrismicMeta';
import { ArticleSlices } from 'containers/slices/ArticleSlices';

import { ExcludesFalse } from 'utils/excludesFalse';
import { localeToPrismicLocale } from 'utils/i18n';

export type ArticleProps = {
  preview: boolean;
  article: Article | null;
  related: Array<Article>;
  layout: Layout | null;
};

export default function ArticleComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const article = data.article ?? null;

  if (!article) {
    return null;
  }

  // Make sure we don't get the current article
  const related = data.related
    .filter((i) => i._meta.uid !== article._meta.uid)
    .slice(0, 3);

  return (
    <>
      <PrismicMeta data={article} layout={data.layout} />
      <article>
        <Section>
          <H1>{asText(article.title)}</H1>
          <RichText>{article.description}</RichText>
        </Section>

        <ArticleSlices data={article.slices ?? []} />

        {related.length > 0 && (
          <Section>
            <H2>Fleiri fréttir</H2>
            <ul>
              {related.map((item, i) => (
                <li key={i}>
                  <H3>{asText(item.title)}</H3>
                  {item.description && <RichText>{item.description}</RichText>}
                  <Link to={linkResolver(item)}>Lesa meira</Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ArticleProps> = async ({
  preview = false,
  previewData,
  params,
  locale,
  resolvedUrl,
}) => {
  const lang = localeToPrismicLocale(locale);
  const uid = params?.article as string;

  const variables = { uid, lang };
  const cacheKey = `${lang}-uid-${uid}`;

  const [layoutData, pageData] = await Promise.all([
    layoutDataQuery(lang),
    query(articleQuery, {
      previewData,
      variables,
      cacheKey: `article-${cacheKey}`,
      breadcrumbs: [resolvedUrl],
    }),
  ]);

  const article = pageData?.article ?? null;

  if (!article) {
    return {
      notFound: true,
    };
  }

  const related: Array<Article> = (pageData?.allArticles.edges ?? [])
    .map((i) => i?.node ?? null)
    .filter(Boolean as unknown as ExcludesFalse);
  const layout = layoutData?.layout ?? null;

  return {
    props: {
      preview,
      article,
      related,
      layout,
    },
  };
};
