import { Settings } from 'react-slick';

export const homeBottomSettings: Settings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4.5,
  rows: 1,
  arrows: false,
  autoplay: true,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
