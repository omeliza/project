import Marquee from 'react-fast-marquee';
import arrow from 'assets/arrow.svg';
import simpleLogo from 'assets/simple-logo.svg';
import classNames from 'classnames';
import { footerList } from 'mocks/lists';

import { H1 } from 'components/heading/Heading';
import { Link } from 'components/link/Link';
import { Nav } from 'components/nav/Nav';
import { Picture } from 'components/picture/Picture';

import s from './Footer.module.scss';

const c = classNames.bind(s);

export const Footer = () => (
  <footer className={c(s.footer, 'section')}>
    <div className="container">
      <Link to="/">
        <Picture src={simpleLogo} className={s.footer__logo} />
      </Link>
      <div className="small-container">
        <div className={s.footer__header}>
          <div className={s.footer__references}>
            <H1 className={s.footer__title}>Vertu í sambandi</H1>
            <div className={s.footer__contacts}>
              <Link to="mailto:iston2022@gmail.com">iston2022@gmail.com</Link>
              <p>Rauðagerði 27, 105 Reykjavík</p>
            </div>
          </div>
          <div className={s.footer__links}>
            <Nav
              navClass={s.footer__nav}
              listClass={s.footer__list}
              list={footerList}
              linkClass={c(s.footer__link, 'link--effect')}
            />
          </div>
        </div>
      </div>
      <div className={s.footer__socials}>
        <div className={c(s.footer__navSocialsWrapper, 'small-container')}>
          <nav className={s.footer__navSocials}>
            <ul>
              <li className={s.footer__item}>
                <Link to="https://www.instagram.com/">Instagram</Link>
              </li>
              <li className={s.footer__item}>
                <Link to="https://twitter.com/">Twitter</Link>
              </li>
              <li className={s.footer__item}>
                <Link to="https://www.facebook.com/">Facebook</Link>
              </li>
            </ul>
          </nav>
          <Link to="#">
            <p>Skráðu þig á póstlistann</p>
            <Picture src={arrow} />
          </Link>
        </div>
      </div>
    </div>
    <Marquee gradient={false} speed={30} className={s.footer__marquee}>
      <div className={s.footer__bottom}>
        <span>Íslensku</span>
        <span>tónlistarverðlaunin&nbsp;</span>
        <span>Íslensku</span>
        <span>tónlistarverðlaunin&nbsp;</span>
      </div>
    </Marquee>
  </footer>
);
