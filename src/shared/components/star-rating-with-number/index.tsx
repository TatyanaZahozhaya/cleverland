import { FC, memo } from 'react';

import { BookPageSectionHeader } from '../book-page-section-header';
import { StarRating } from '../star-rating';
import { RatingText } from '../text';

import './index.scss';

type StarRatingWithNumberType = {
  rating: number | null;
};
export const StarRatingWithNumber: FC<StarRatingWithNumberType> = memo(({ rating }) => (
  <div className='star-rating-with-number_box'>
    <BookPageSectionHeader name='Рейтинг' />
    <div className='star-rating-with-number'>
      <StarRating rating={rating} page='book-page-star' />
      <RatingText rating={rating} />
    </div>
  </div>
));
