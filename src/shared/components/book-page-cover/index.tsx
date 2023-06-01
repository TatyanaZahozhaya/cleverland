import { FC, memo } from 'react';

import { BookCoverDefault } from '../svg-icons';

import './index.scss';

type BookPageCoverType = {
  cover: string;
};

export const BookPageCover: FC<BookPageCoverType> = memo(({ cover }) => (
  <div className='book-page-cover' data-test-id='slide-big'>
    <img className='book-page-cover-img' src={`${cover}`} alt='изображение обложки книги' />
  </div>
));

export const BookPageDefaultCover = () => (
  <div className='book-page-cover book-page-cover__default' data-test-id='slide-big'>
    <svg
      className='book-page-cover-img__default'
      width='445'
      height='594'
      viewBox='0 0 445 594'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <BookCoverDefault />
    </svg>
  </div>
);
