import { useRef } from 'react';
import simpleLogo from 'assets/simple-logo.svg';
import classNames from 'classnames';

import { Link } from 'components/link/Link';
import { Nav } from 'components/nav/Nav';
import { Picture } from 'components/picture/Picture';

import { useHeaderColor } from 'hooks/useHeaderColor';

import s from './Header.module.scss';

interface IHeader {
  theme: 'dark' | 'light';
  classname?: string;
}
const c = classNames.bind(s);

export function Header({ theme, classname }: IHeader) {
  const isLight = theme === 'light';
  const color = isLight ? s.dark : s.white;
  const darkColor = s.dark;
  const lightColor = s.white;
  const headerRef = useRef<HTMLHeadElement>(null);

  const { isScrolled, textColor } = useHeaderColor({
    headerRef,
    color,
    darkColor,
    lightColor,
  });

  const linkStyles = {
    '--link-color': textColor,
    '--link-underline-color': textColor,
  };

  return (
    <header
      className={c(classname, s.header, isScrolled ? s.scrolled : '')}
      ref={headerRef}
    >
      <div className={c('container', s.header__content)}>
        <div className={s.header__logo}>
          <Link to="/">
            <div className={s.header__logoInner}>
              <Picture src={simpleLogo} />
              <p style={{ color: textColor }}>Íslensku tónlistarverðlaunin</p>
            </div>
          </Link>
        </div>
        <Nav
          navClass={s.header__nav}
          listClass={s.header__list}
          linkClass={c(s.header__link, 'link--effect')}
          linkStyle={linkStyles}
        />
        <input type="checkbox" name="burger-menu" id="burger-menu" hidden />
        <label htmlFor="burger-menu">
          <div className={s.header__burger}>
            <span style={{ background: textColor }} />
            <span style={{ background: textColor }} />
            <span style={{ background: textColor }} />
          </div>
        </label>
        <Nav navClass={s.mobileMenu} listClass={s.mobileMenu__list} />
      </div>
    </header>
  );
}
