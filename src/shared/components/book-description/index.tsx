import { FC, memo } from 'react';

import { BookPageSectionHeader } from '../book-page-section-header';
import { BookDescriptionText } from '../text';

import './index.scss';

type BookDescriptionType = {
  description: string | undefined;
};

export const BookDescription: FC<BookDescriptionType> = memo(({ description }) => (
  <div className='book-description'>
    <BookPageSectionHeader name='О книге' />
    {description ? <BookDescriptionText text={description} /> : null}
  </div>
));
