import classNames from 'classnames';
import { IArticle } from 'mocks/articles';

import { H3 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './Article.module.scss';

const c = classNames.bind(s);

const ArticleBottomPart = ({ article }: { article: IArticle }) => {
  const { caption2, caption3, paragraph3, paragraph4, highlighted, image2 } = article;

  return (
    <article className={c(s.article, 'section')}>
      <div className={s.article__inner}>
        <p className={s.article__caption}>{caption2}</p>
        <p className={s.article__text}>{paragraph3}</p>
        <H3 className={s.acticle__highlighted}>{highlighted}</H3>
        <p className={s.article__caption}>{caption3}</p>
        <p className={s.article__text}>{paragraph4}</p>
        <div className={s.article__img}>
          <Picture src={image2} />
        </div>
      </div>
    </article>
  );
};

export default ArticleBottomPart;
