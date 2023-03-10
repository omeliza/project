import classNames from 'classnames';
import { IArticle } from 'mocks/articles';

import { H3 } from 'components/heading/Heading';

import s from './Article.module.scss';

const c = classNames.bind(s);

const ArticleMiddlePart = ({ article }: { article: IArticle }) => {
  const { subtitle, paragraph1, caption1, paragraph2 } = article;

  return (
    <article className={c(s.article, 'section')}>
      <div className={s.article__inner}>
        <H3 className={s.article__subtitle}>{subtitle}</H3>
        <p className={s.article__text}>{paragraph1}</p>
        <p className={s.article__caption}>{caption1}</p>
        <p className={s.article__text}>{paragraph2}</p>
      </div>
    </article>
  );
};

export default ArticleMiddlePart;
