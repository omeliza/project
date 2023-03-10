import { FilledImageFieldImage, ImageFieldImage } from '@prismicio/types';

import { MediaPosition } from 'types/ui';

export type PrismicImage = Partial<ImageFieldImage> & { focus_point?: PrismicImage };

export type MaybePrismicImage = PrismicImage | null;

export type CroppableImage = FilledImageFieldImage & {
  focus_point: FilledImageFieldImage;
};

// TODO what types are prismic specific VS general?
export type Sizes = {
  width: number;
  height: number;
};

export type PrismicImageDimensions = {
  width: number;
  height: number;
};

export type ImageAttributes = {
  width: number;
  height: number;
  media?: string;
};

export type ImageAttributesAsBreakpoint = {
  wide: ImageAttributes;
  desktop: ImageAttributes;
  tablet: ImageAttributes;
  mobile: ImageAttributes;
};

export type GenerateImageSizesType = {
  ratio: number;
  wide: number;
  desktop?: number;
  tablet?: number;
  mobile?: number;
};

// TODO bad name
export type PrismicPictureData = {
  src: string;
  width: number;
  height: number;
  mediaPosition?: MediaPosition;
};

export type FocusRect = [number, number, number, number];
