export const articleFragment = /* GraphQL */ `
  fragment article on Article {
    _meta {
      ...meta
    }
    title
    description
    published
    image

    seo_title
    seo_description
    seo_image
  }
`;
