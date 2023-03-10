import classNames from 'classnames';
import { StaticImageData } from 'next/image';

import { H2 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './BottomArticle.module.scss';

interface IBottomArticle {
  bottomArticle: { image: StaticImageData; title: string; description: string };
  classname?: string;
}

const c = classNames.bind(s);

const BottomArticle = ({ bottomArticle, classname }: IBottomArticle) => {
  const { image, title, description } = bottomArticle;
  return (
    <div className="limit-container">
      <article className={c(classname, s.nextArticle)}>
        <div className={s.nextArticle__img}>
          <Picture src={image} alt="concert" />
        </div>
        <div className={s.nextArticle__descrip}>
          <H2 className={s.nextArticle__title}>{title}</H2>
          <p className={s.nextArticle__text}>{description}</p>
        </div>
      </article>
    </div>
  );
};

export default BottomArticle;
