import { sitemap } from 'api/sitemap';
import { GetServerSideProps } from 'next';

import { localeToPrismicLocale } from 'utils/i18n';
import { logger } from 'utils/logger';

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  try {
    const sitemapXml = await sitemap(localeToPrismicLocale(locale));

    if (!sitemapXml) {
      throw new Error('sitemap is not a string');
    }
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXml);
    res.end();

    return {
      props: {},
    };
  } catch (e) {
    logger.error('unable to generate sitemap', {
      exception: e as Error,
      category: 'sitemap',
    });
  }

  return {
    notFound: true,
  };
};
