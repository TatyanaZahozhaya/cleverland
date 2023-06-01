import { FC } from 'react';

import CatCover from '../../../pictures/default-cover/cat-desktop.svg';
import { BookImageType } from '../../types';

import './index.scss';

type BookCoverType = {
  image: BookImageType | null;
  view: string;
}

export const BookCardCover: FC<BookCoverType> = ({ image, view }) => (
  <div className={`book-card-cover book-card-cover-${view}`}>
    {image && image.url ? (
      <img
        className='book-card-cover_img'
        src={`${image.url}`}
        alt='изображение обложки книги'
      />
    ) : (
      <div className='book-card-default-cover_box'>
        <img className='book-card-default-cover_img' src={CatCover} alt='изображение обложки книги отсутствует' />
      </div>
    )}
  </div>
);
