import Head from 'next/head';

import { ExcludesFalse } from 'utils/excludesFalse';

const DEFAULT_TITLE = 'Default title';
const DEFAULT_SITENAME = 'Default site';
const DEFAULT_DESCRIPTION = '';
const DEFAULT_TWITTER_SITE: string | undefined = undefined;
const DEFAULT_TWITTER_CARD: TwitterCard = 'summary_large_image';
const DEFAULT_THEME_COLOR = '#fff';

export type SeoType = 'article' | 'website';

// Relevant data cherry-picked from https://ogp.me/
export type OpenGraphImage = {
  url?: string;
  alt?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
};

export type OpenGraphArticle = {
  publishedTime?: string;
  author?: string;
  tags?: Array<string>;
};

export type TwitterCard = 'summary' | 'summary_large_image';

export type TwitterMeta = {
  card?: TwitterCard;

  // @username of website
  site?: string;

  // @username of content creator
  creator?: string;
};

export type OpenGraph = {
  title?: string;
  description?: string;
  image?: OpenGraphImage;
  url?: string;
  type?: SeoType;
  locale?: string;
  alternateLocales?: Array<string>;

  // "If your object is part of a larger web site, the name which should be displayed for the overall site."
  siteName?: string;
  article?: OpenGraphArticle;

  // Sneak the twitter specific metadata in here...
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
  twitter?: TwitterMeta;
};

type Props = {
  title?: string;
  description?: string;
  openGraph?: OpenGraph;
  themeColor?: string;
  canonical?: string;
  children?: React.ReactNode;
};

function openGraphImageMeta(image?: OpenGraphImage | null) {
  if (!image) {
    return null;
  }

  const meta = [
    image.url ? <meta property="og:image" content={image.url} key="og:image" /> : null,
    image.url ? (
      <meta
        property="og:image:secure_url"
        content={image.url}
        key="og:image:secure_url"
      />
    ) : null,
    image.type ? (
      <meta property="og:image:type" content={image.type} key="og:image:type" />
    ) : null,
    image.width ? (
      <meta
        property="og:image:width"
        content={image.width.toString()}
        key="og:image:width"
      />
    ) : null,
    image.height ? (
      <meta
        property="og:image:height"
        content={image.height.toString()}
        key="og:image:height"
      />
    ) : null,
    image.url ? (
      <meta property="og:image:alt" content={image.alt ?? ''} key="og:image:alt" />
    ) : null,
  ].filter(Boolean as unknown as ExcludesFalse);

  if (meta.length === 0) {
    return null;
  }

  return meta;
}

function openGraphArticleMeta(article?: OpenGraphArticle | null) {
  if (!article) {
    return null;
  }

  const meta = [
    article.publishedTime ? (
      <meta
        property="og:article:published_time"
        content={article.publishedTime}
        key="og:article:published_time"
      />
    ) : null,
    article.author ? (
      <meta
        property="og:article:author"
        content={article.author}
        key="og:article:author"
      />
    ) : null,
  ].filter(Boolean as unknown as ExcludesFalse);

  const tags = (article.tags ?? []).map((tag, i) => (
    <meta property="og:article:tag" content={tag} key={`og:article:tag:${i}`} />
  ));

  const result = meta.concat(tags);

  if (result.length === 0) {
    return null;
  }

  return result;
}

function openGraphMeta(og?: OpenGraph | null): Array<JSX.Element> | null {
  if (!og) {
    return null;
  }

  const imageMeta = openGraphImageMeta(og.image) ?? [];
  const articleMeta = openGraphArticleMeta(og.article) ?? [];
  const alternateLocalesMeta = (og.alternateLocales ?? []).map((lang, i) => (
    <meta
      property="og:locale:alternate"
      content={lang}
      key={`og:locale:alternate:${i}`}
    />
  ));

  // Always either website or article
  const type = og.type ? og.type : og.article ? 'article' : 'website';

  const meta = [
    og.title ? <meta property="og:title" content={og.title} key="og:title" /> : null,
    og.description ? (
      <meta property="og:description" content={og.description} key="og:desc" />
    ) : null,
    og.url ? <meta property="og:url" content={og.url} key="og:url" /> : null,
    <meta property="og:type" content={type} key="og:type" />,
    og.locale ? <meta property="og:locale" content={og.locale} key="og:locale" /> : null,
    <meta
      property="og:site_name"
      content={og.siteName ?? DEFAULT_SITENAME}
      key="og:site_name"
    />,
  ].filter(Boolean as unknown as ExcludesFalse);

  return meta.concat(imageMeta).concat(articleMeta).concat(alternateLocalesMeta);
}

function twitterMeta(og?: OpenGraph | null): Array<JSX.Element> | null {
  if (!og) {
    return null;
  }

  const meta = [
    <meta
      name="twitter:card"
      content={og.twitter?.card ?? DEFAULT_TWITTER_CARD}
      key="twitter:card"
    />,
    og.twitter?.site || DEFAULT_TWITTER_SITE ? (
      <meta
        name="twitter:site"
        content={og.twitter?.site ?? DEFAULT_TWITTER_SITE}
        key="twitter:site"
      />
    ) : null,
    og.twitter?.creator ? (
      <meta name="twitter:creator" content={og.twitter.creator} key="twitter:creator" />
    ) : null,
    og.description ? (
      <meta
        name="twitter:description"
        content={og.description}
        key="twitter:description"
      />
    ) : null,
    og.title ? (
      <meta name="twitter:title" content={og.title} key="twitter:title" />
    ) : null,
    og.image?.url ? (
      <meta name="twitter:image" content={og.image.url} key="twitter:image" />
    ) : null,
    og.image?.url ? (
      <meta
        name="twitter:image:alt"
        content={og.image.alt ?? ''}
        key="twitter:image:alt"
      />
    ) : null,
  ].filter(Boolean as unknown as ExcludesFalse);

  return meta;
}

function iconMeta(themeColor: string): JSX.Element | null {
  return (
    <>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={themeColor}
        key="mask-icon"
      />
      {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" key="apple-touch-icon" />*/}
      {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" key="apple-touch-icon" />*/}
      {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="favicon-32" />*/}
      {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="favicon-16" />*/}
    </>
  );
}

export const Meta = ({
  title,
  description,
  openGraph,
  themeColor = DEFAULT_THEME_COLOR,
  canonical,
  children,
}: Props) => {
  return (
    <Head>
      <title>{title ?? DEFAULT_TITLE}</title>
      <link rel="icon" href="/favicon.ico" key="favicon" />
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} key="desc" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      {/* <link rel="manifest" href="/site.webmanifest" key="manifest" /> */}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta
        name="msapplication-TileColor"
        content={themeColor}
        key="msapplication-TileColor"
      />
      <meta name="theme-color" content={themeColor} key="theme-color" />
      {openGraphMeta(openGraph)}
      {twitterMeta(openGraph)}
      {iconMeta(themeColor)}
      {children}
    </Head>
  );
};
