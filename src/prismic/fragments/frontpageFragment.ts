export const frontpageFragment = /* GraphQL */ `
  fragment frontpage on Frontpage {
    _meta {
      ...meta
    }
    title
    description

    seo_title
    seo_description
    seo_image
  }
`;
