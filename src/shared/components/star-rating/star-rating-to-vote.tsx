import { FC, memo } from 'react';

import { StarToVote } from '../star';

import './index.scss';

type StarsToVoteLineType = {
  starsSelected: number;
  totalStars: number;
  page?: string;
  starSelected: string;
  onSelectStar(stars: string): void;
}

type StarToVoteRatingType = {
  rating?: number | null;
  page?: string;
  starSelected: string;
  onSelectStar(stars: string): void;
}

export const StarsLineToVote: FC<StarsToVoteLineType> = memo(({ totalStars = 5, page, onSelectStar, starSelected }) => (
  <div className='star-rating'>
    {[...Array(totalStars)].map((n, i) => (
      <StarToVote
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        selected={i < +starSelected}
        page={page}
        value={i + 1}
        id={i.toString()}
        onSelectStar={onSelectStar}
      />
    ))}
  </div>
));

export const StarRatingToVote: FC<StarToVoteRatingType> = memo(({ rating, onSelectStar, starSelected }) => (
  <div className='star-rating-to-vote'>
    <p className='star-rating-to-vote-title'>Ваша оценка</p>

    <div data-test-id='rating' className='star-rating-to-vote-box'>
      <StarsLineToVote
        starsSelected={rating ? Math.floor(rating) : 0}
        totalStars={5}
        onSelectStar={onSelectStar}
        starSelected={starSelected}
      />
    </div>
  </div>
));
