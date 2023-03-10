import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'components/button/Button';
import { H2 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import { INews } from 'types/home';

import s from './News.module.scss';

type News = { news: INews; title: string };

const News: FC<News> = ({ news, title: mainTitle }) => {
  const { id, image, date, title } = news;
  const router = useRouter();
  const isNewsPage = router.pathname === '/news';
  return (
    <div className="container">
      {id === 1 && (
        <div className={s.title}>
          <H2>{mainTitle}</H2>
          {!isNewsPage && <Button to="/news">Sjá nánar</Button>}
        </div>
      )}
      <article className={s.news}>
        <Link href={{ pathname: `/article/${id}` }}>
          <div className={s.news__article}>
            <div className={s.news__img}>
              <Picture src={image} alt="image" />
            </div>
            <div className={s.news__description}>
              <h4 className={s.news__title}>{title}</h4>
              <p className={s.news__p}>{date}</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
export default News;
