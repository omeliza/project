import { Link, LinkProps } from 'components/link/Link';

import s from './ArrowLink.module.scss';

type Defaults = {
  className?: string;
};

type Props = Defaults & LinkProps;

export const ArrowLink = ({ children, className, to }: Props) => (
  <Link to={to} className={`${s.arrowLink} ${className}`}>
    {children}
  </Link>
);
