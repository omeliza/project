import classNames from 'classnames';

import s from './References.module.scss';

const c = classNames.bind(s);

const References = ({ classname }: { classname?: string }) => (
  <div className={c(classname, s.references)}>
    <div className={s.references__row}>
      <div className={s.references__item}>Flokkar og reglur</div>
      <div className={s.references__item}>Dómnefnd 2022</div>
    </div>
    <div className={s.references__row}>
      <div className={s.references__item}>Gott að hafa í huga við innsendingaringur</div>
      <div className={s.references__item}>Skoðið plötur ársins í sögulegau samhengi</div>
    </div>
  </div>
);

export default References;
