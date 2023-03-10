import { CSSProperties, FC } from 'react';
import { headerList } from 'mocks/lists';

import { Link } from 'components/link/Link';

type NavProps = {
  navClass?: string;
  listClass?: string;
  linkClass?: string;
  list?: Array<string>;
  linkStyle?: Record<string, string>;
};

export const Nav: FC<NavProps> = ({
  navClass,
  listClass,
  linkClass,
  list,
  linkStyle,
}) => {
  const newList = list || headerList;
  return (
    <nav className={navClass}>
      <ul className={listClass}>
        {newList.map((item) => (
          <li key={item}>
            <Link to="#" className={linkClass} style={{ ...linkStyle } as CSSProperties}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
