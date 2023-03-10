import Slider, { Settings } from 'react-slick';
import classNames from 'classnames';

import { H2 } from 'components/heading/Heading';
import SliderItem from 'components/slider/SliderItem';

import { ISlider } from 'types/home';

import s from './Slider.module.scss';

const c = classNames.bind(s);

interface ISliderBlock {
  settings: Settings;
  slides: Array<ISlider>;
  title?: string;
  classname?: string;
}
export const SliderBlock = ({ settings, slides, title, classname }: ISliderBlock) => {
  return (
    <div className={c(s.slider, 'dark-section', classname)}>
      <div className="small-container">
        <H2 className={s.slider__title}>{title}</H2>
      </div>
      <Slider {...settings} swipeToSlide>
        {slides.map((slide) => {
          return <SliderItem slide={slide} key={slide.id} />;
        })}
      </Slider>
    </div>
  );
};
