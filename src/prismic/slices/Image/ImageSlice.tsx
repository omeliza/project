import { PrismicImage } from 'prismic/types/image';
import { ArticleSlicesImage, PageSlicesImage } from 'prismic-types';

import { PrismicPicture } from 'components/picture/PrismicPicture';

type Props = {
  image: PrismicImage;
};

function ImageSlice({ image }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!image) {
    return null;
  }

  return <PrismicPicture image={image} />;
}

export function prismicSliceToImageSlice(s: PageSlicesImage | ArticleSlicesImage) {
  return <ImageSlice image={(s.variation?.primary?.image ?? null) as PrismicImage} />;
}
