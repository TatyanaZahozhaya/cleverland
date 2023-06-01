import { FC, memo } from 'react';

import { useHighlightWords } from '../../hooks';

import './index.scss';

type BoookCardNameType = {
  name: string;
};
export const BoookCardName: FC<BoookCardNameType> = memo(({ name }) => (
  <p className='book-card-name'>{useHighlightWords(name)}</p>
));
