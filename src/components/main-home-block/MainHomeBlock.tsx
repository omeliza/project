import mainHomePhoto from 'assets/main-home-photo.png';

import { ArrowLink } from 'components/arrow-link/ArrowLink';
import { H2 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './MainHomeBlock.module.scss';

export function MainHomeBlock() {
  return (
    <div className="container">
      <div className={s.mainHomeBlock}>
        <div className={s.mainHomeBlock__title}>
          <H2>Tilnefningar til Íslensku tónlistaverðlaunanna 2023</H2>
          <ArrowLink to="#">Sjá nánar</ArrowLink>
        </div>
        <div className={s.mainHomeBlock__img}>
          <Picture src={mainHomePhoto} alt="man" lazy={false} />
        </div>
      </div>
    </div>
  );
}
