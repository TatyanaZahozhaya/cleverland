import { FC, memo } from 'react';

import './index.scss';

type OListType = {
  children: React.ReactNode;
   level: number;
}

export const OList:FC<OListType > = memo(({ children, level }) => (
  <ol className={level > 1 ? 'olist olist-inner' : 'olist'} >
    {children}
  </ol>
));
