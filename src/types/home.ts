import { StaticImageData } from 'next/image';

export interface IImagesSet {
  id: number;
  image: StaticImageData;
}

export interface INews {
  id: number;
  image: StaticImageData;
  title: string;
  date: string;
}

export interface ISlider {
  id: number;
  image: StaticImageData;
  text: string;
}

export interface SectionConfig {
  [sectionId: string]: 'light' | 'dark';
}

export interface Sections {
  [sectionId: string]: HTMLElement;
}
