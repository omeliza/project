// an alternative to using @include grid, @inclide grid-item(foo) mixins
// used to align components within the defined default layout @grid;
import classNames from 'classnames/bind';

import { HTMLElementList } from 'types/html-types';
import { UIBreakpoints } from 'types/ui';

import s from './GridLayout.module.scss';

const c = classNames.bind(s);

type GridLayoutDefaults = {
  as?: HTMLElementList;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type GridLayoutProps = GridLayoutDefaults & {
  debug?: boolean;
};

export type GridLayoutItemProps = GridLayoutDefaults & {
  as?: HTMLElementList;
  columns?: UIBreakpoints;
  offset?: UIBreakpoints;
};

export const GridLayout = ({ children, as, className, debug }: GridLayoutProps) => {
  const Wrapper = as ?? 'div';

  if (!children) {
    return null;
  }

  return <Wrapper className={c(s.gridLayout, className, { debug })}>{children}</Wrapper>;
};

export const GridLayoutItem = ({
  columns,
  offset,
  as,
  className,
  children,
}: GridLayoutItemProps) => {
  const Wrapper = as ?? 'div';

  const classes: Array<string> = [];

  columns &&
    Object.entries(columns).forEach(([k, v]) => {
      const entry = s[`${k}${v}`];
      classes.push(entry);
    });

  offset &&
    Object.entries(offset).forEach(([k, v]) => {
      const entry = s[`${k}Offset${v}`];
      classes.push(entry);
    });

  return (
    <Wrapper className={c(s.gridLayout__item, className, classes)}>{children}</Wrapper>
  );
};
