import { FC, memo } from 'react';

import { Star } from '../star';
import { NoRatingText } from '../text';

import './index.scss';

type StarsLineType = {
  starsSelected: number;
  totalStars: number;
  page?: string;
}

type StarRatingType = {
  rating?: number | null;
  page?: string;
}
export const StarsLine: FC<StarsLineType> = memo(({ starsSelected, totalStars = 5, page }) => (
  <div className='star-rating'>
    {[...Array(totalStars)].map((n, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Star key={i} selected={i < starsSelected} page={page} />
    ))}
  </div>
));

export const StarRating: FC<StarRatingType> = memo(({ rating, page }) => (
  <div data-test-id='rating' className='book-card-rating'>
    {rating ? <StarsLine starsSelected={Math.floor(rating)} totalStars={5} page={page} /> : <NoRatingText />}
  </div>
));
