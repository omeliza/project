import classNames from 'classnames';
import { StaticImageData } from 'next/image';

import { ArrowLink } from 'components/arrow-link/ArrowLink';
import { H2 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './NextHomeArticle.module.scss';

const c = classNames.bind(s);

export default function NextHomeArticle({
  title,
  image,
  classname,
}: {
  title: string;
  image: StaticImageData;
  classname?: string;
}) {
  return (
    <div className={c(s.wrapper, classname)}>
      <div className="limit-container">
        <article className={s.nextHomeArticle}>
          <div className={s.nextHomeArticle__title}>
            <H2>{title}</H2>
            <ArrowLink to="#">Sjá nánar</ArrowLink>
          </div>
          <Picture src={image} alt="girl singing" className={s.nextHomeArticle__img} />
        </article>
      </div>
    </div>
  );
}
