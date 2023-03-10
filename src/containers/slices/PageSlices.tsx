import { prismicSliceToImageSlice } from 'prismic/slices/Image/ImageSlice';
import { prismicSliceToTextSlice } from 'prismic/slices/Text/TextSlice';
import { prismicSliceToVideoSlice } from 'prismic/slices/Video/VideoSlice';
import {
  PageSlices as PrismicPageSlices,
  PageSlicesImage,
  PageSlicesText,
  PageSlicesVideo,
} from 'prismic-types';

import { Section } from 'components/section/Section';

import { logger } from 'utils/logger';

type Props = {
  data?: Array<PrismicPageSlices>;
};

export function PageSlices({ data = [] }: Props) {
  return (
    <>
      {data.map((s: PrismicPageSlices, i: number) => {
        const key = `slice-${s.type}-${i}`;

        switch (s.type) {
          case 'text':
            return (
              <Section key={key}>{prismicSliceToTextSlice(s as PageSlicesText)}</Section>
            );

          case 'video':
            return (
              <Section key={key}>
                {prismicSliceToVideoSlice(s as PageSlicesVideo)}
              </Section>
            );

          case 'image':
            return (
              <Section key={key}>
                {prismicSliceToImageSlice(s as PageSlicesImage)}
              </Section>
            );

          default:
            logger.info(`unknown slice type ${s.type}`, { metadata: { slice: s } });
            return null;
        }
      })}
    </>
  );
}
