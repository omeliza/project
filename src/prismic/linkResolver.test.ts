import { describe, expect, it } from '@jest/globals';
import { LinkField } from '@prismicio/types';

import { linkResolver } from './linkResolver';

describe('linkResolver', () => {
  it('should link inline richtext links to page', () => {
    const data: LinkField = {
      id: 'xyz',
      type: 'page',
      tags: [],
      slug: 'test-page',
      lang: 'en-us',
      uid: 'test-page',
      link_type: 'Document',
      isBroken: false,
    };

    expect(linkResolver(data)).toBe('/en/test-page');
  });

  it('should link inline richtext link to media', () => {
    const data: LinkField = {
      link_type: 'Media',
      name: 'poster.jpg',
      kind: 'image',
      url: 'https://example.org/poster.jpg',
      size: '123',
      height: '100',
      width: '100',
    };

    expect(linkResolver(data)).toBe('https://example.org/poster.jpg');
  });
});
