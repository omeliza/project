import { Link } from 'components/link/Link';
import { Picture } from 'components/picture/Picture';

import { ISlider } from 'types/home';

import s from './SliderItem.module.scss';

interface ISliderItem {
  slide: ISlider;
}

export default function SliderItem({ slide }: ISliderItem) {
  const { image: img, text } = slide;
  return (
    <Link to="#">
      <div className={s.slide}>
        <div className={s.slide__img}>
          <Picture src={img} />
        </div>
        <div className={s.slide__text}>{text}</div>
      </div>
    </Link>
  );
}
