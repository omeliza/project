import { query } from 'api/prismic';
import { layoutFragment } from 'prismic/fragments/layoutFragment';

import { PrismicLocale } from 'utils/i18n';
import { stringToNumber } from 'utils/stringToNumber';

const layoutCacheTtl = stringToNumber(process.env.CACHE_PRISMIC_LAYOUT_TTL ?? '') ?? 3600;

export const layoutQuery = /* GraphQL */ `
  query ($lang: String!) {
    layout(uid: "layout", lang: $lang) {
      ...layout
    }
  }
  ${layoutFragment}
`;

/**
 * Helper function to run a graphQL query against prismic to fetch layout data.
 *
 * @param lang Lang to fetch the layout data for
 * @returns Data for layout in `layout`
 */
export function layoutDataQuery(lang: PrismicLocale) {
  return query(layoutQuery, {
    variables: { lang },
    cacheKey: `layout-${lang}`,
    cacheTtl: layoutCacheTtl,
  });
}
