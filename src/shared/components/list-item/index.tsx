import { FC, memo } from 'react';

import './index.scss';

type ListItemType = {
  level: number;
  text: string;
  children?: React.ReactNode;
}

export const ListItem: FC<ListItemType> = memo(({ level, text, children }) => (
  <li className={level === 1 ? 'ordered-list-item first-level' : 'ordered-list-item'}>
    {text}
    {children}
  </li>
));
