import { FC, memo, useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { setBookToOpenPage } from '../../store/slice/all-books-slice';
import { ForGeneralDescriptionType } from '../../types';
import { BookCardButton } from '../book-card-button';
import { BookPageAuthor } from '../book-card-page-author';
import { BookDescription } from '../book-description';
import { BookPageCover, BookPageDefaultCover } from '../book-page-cover';
import { Slider } from '../slider';
import { BookPageNameText } from '../text';

import './index.scss';

export const GeneralBookDescription: FC<ForGeneralDescriptionType> = memo(
  ({ id, title, authors, booking, delivery, description, images }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setBookToOpenPage(title));
    });

    return (
      <div className='general-book-description'>
        {images && images.length > 1 ? (
          <Slider images={images} imagesPreviews={images} />
        ) : images && images.length === 1 && images[0].url ? (
          <BookPageCover cover={images[0].url} />
        ) : (
          <BookPageDefaultCover />
        )}
        <div className='book-name-section'>
          <BookPageNameText name={title} />
          <BookPageAuthor arr={authors} />
          <BookCardButton booking={booking} delivery={delivery} page='book-page' bookID={id} />
        </div>
        <BookDescription description={description} />
      </div>
    );
  }
);
