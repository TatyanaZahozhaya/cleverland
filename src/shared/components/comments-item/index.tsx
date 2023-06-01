import { FC, memo } from 'react';

import { EachBookCommentsType } from '../../types';
import { getCommentsInfoFromRequest } from '../../utils';
import { StarRating } from '../star-rating';

import './index.scss';

export const CommentsItem: FC<EachBookCommentsType> = memo((item) => {
  const [src, name, surname, date, rating, text] = getCommentsInfoFromRequest(item);

  return (
    <div data-test-id='comment-wrapper' className='comments-item_box'>
      <div className='comments-item_header'>
        <img className='comments-item_avatar' src={src} alt='commentator avatar' />
        <span
          data-test-id='comment-author'
          className='comments-item_name comments-item_name_name'
        >{`${name} ${surname}`}</span>
        <span data-test-id='comment-date' className='comments-item_name comments-item_name_name_date'>
          {date}
        </span>
      </div>
      <StarRating rating={rating} />
      <p data-test-id='comment-text' className='comments-item_content'>
        {text}
      </p>
    </div>
  );
});
