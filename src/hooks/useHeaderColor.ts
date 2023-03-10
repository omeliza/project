import { RefObject, useLayoutEffect, useState } from 'react';
import tinycolor from 'tinycolor2';

import { getCurrentSectionBackground } from 'utils/getCurrentSectionBackground';

interface IHeaderColor {
  headerRef: RefObject<HTMLHeadElement>;
  color: string;
  darkColor: string;
  lightColor: string;
}

export const useHeaderColor = ({
  headerRef,
  color,
  darkColor,
  lightColor,
}: IHeaderColor) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [textColor, setTextColor] = useState(color);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;
      const sectionBackground = getCurrentSectionBackground();

      if (headerHeight && scrollPosition > headerHeight) {
        const light = tinycolor(sectionBackground).isLight();
        setIsScrolled(true);
        setTextColor(light ? darkColor : lightColor);
      } else {
        setIsScrolled(false);
        setTextColor(color);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isScrolled, textColor };
};
