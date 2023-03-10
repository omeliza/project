import { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { ArrowLink } from 'components/arrow-link/ArrowLink';
import { Button } from 'components/button/Button';
import { H2 } from 'components/heading/Heading';

import { IImagesSet } from 'types/home';

import s from './ImagesBlock.module.scss';

interface IImagesBlock {
  title: string;
  images: Array<IImagesSet>;
  preview?: boolean;
  classname?: string;
}

const c = classNames.bind(s);

const ImagesBlock: FC<IImagesBlock> = ({ title, images, preview, classname }) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const picturesRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (id: number) => {
    setSelectedImageId(id === selectedImageId ? null : id);
  };

  const selectedImage = images.find((item) => item.id === selectedImageId);

  return (
    <div className={c('dark-section', classname)}>
      <div className="container">
        <div className={s.title}>
          <H2>{title}</H2>
          <Button>Sjá nánar</Button>
        </div>
      </div>
      <div className="limit-container">
        <div className={s.pictures} ref={picturesRef}>
          {images.map(({ id, image }) => {
            const isSelected = selectedImageId === id;
            return (
              <div
                key={id}
                className={c(s.pictures__img, isSelected ? s.selected : '')}
                onClick={() => handleImageClick(id)}
              >
                <Image src={image} alt={`image${id}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.empty} />
      <div className="small-container">
        {preview && (
          <div className={s.preview}>
            <div className={s.preview__title}>
              <H2>Verðlauna afhendingar 2022</H2>
              <ArrowLink to={`/article/${selectedImage?.id || images[8].id}`}>
                Sjá nánar
              </ArrowLink>
            </div>
            <Image
              src={selectedImage?.image || images[8].image}
              alt={`image${selectedImage?.id || images[8].id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesBlock;
