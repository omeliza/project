import classNames from 'classnames';
import { IArticle } from 'mocks/articles';

import { H1 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './ArticleTopPart.module.scss';

const c = classNames.bind(s);

export default function ArticleTopPart({ article }: { article: IArticle }) {
  const { title, date, image } = article;
  return (
    <div className="content">
      <article className={c(s.article)}>
        <div className={s.article__inner}>
          <div className={s.article__description}>
            <H1 className={s.article__title}>{title}</H1>
            <div className={s.article__sideblock}>
              <p>{date}</p>
              <button>Deila</button>
            </div>
          </div>
          <div className={s.article__img}>
            <Picture src={image} />
          </div>
        </div>
      </article>
    </div>
  );
}
