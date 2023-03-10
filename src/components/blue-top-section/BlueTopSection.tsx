import classNames from 'classnames';

import { Button } from 'components/button/Button';
import { H1 } from 'components/heading/Heading';

import s from './BlueTopSection.module.scss';

const c = classNames.bind(s);

export function BlueTopSection({ classname }: { classname?: string }) {
  return (
    <section className={c('blue-section', 'content', classname)}>
      <div className="container">
        <div className={s.section}>
          <H1 className={s.section__title}>Íslensku tónlistar- verðlaunin</H1>
          <div className={s.section__textWrapper}>
            <p className={s.section__text}>
              Íslensku tónlistarverðlaunin eru uppskeruhátíð íslenska tónlistargeirans þar
              sem það sem vel er gert er hafið til vegs og virðingar. Íslensku
              tónlistarverðlaunin eru kjörið tækifæri til að kynna íslenska tónlist fyrir
              landi og þjóð
            </p>
            <Button className={s.section__button}>Sjá nánar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
