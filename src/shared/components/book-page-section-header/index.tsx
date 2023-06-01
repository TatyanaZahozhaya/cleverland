import { FC, memo } from 'react';

import { BookPageSectionHeaderText, GeneralAmountCounterText } from '../text';

import './index.scss';

type BookPageSectionHeaderType = {
  name: string;
  count?: string;
};

export const BookPageSectionHeader: FC<BookPageSectionHeaderType> = memo(({ name, count }) => (
  <div className='book-page-section-header'>
    <BookPageSectionHeaderText name={name} />
    {count ? <GeneralAmountCounterText count={count} /> : null}
  </div>
));
