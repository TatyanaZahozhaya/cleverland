import { FC, memo, useState } from 'react';

import { EachBookCommentsType } from '../../types';
import { BookPageSectionHeader } from '../book-page-section-header';
import { CommentsList } from '../comments-list';
import { HideIcon } from '../svg-icons';
import { VoteButton } from '../vote-button';

import './index.scss';

type CommentsType = {
  comments: EachBookCommentsType[] | undefined;
}

export const Comments: FC<CommentsType> = memo(({ comments }) => {
  const [commentsClosed, setCommentsClosed] = useState(false);

  return (
    <div className='comments_section'>
      <BookPageSectionHeader name='Отзывы' count={comments ? comments.length.toString() : '0'} />
      <button
        data-test-id='button-hide-reviews'
        type='button'
        className={commentsClosed ? 'hide-button' : 'hide-button hide-button__opened'}
        onClick={() => setCommentsClosed(!commentsClosed)}
      >
        <HideIcon />
      </button>
      <div data-test-id='reviews' className='comments-reviews_box'>
        {comments && comments.length && <CommentsList closed={commentsClosed} comments={comments} />}
        <div className='vote-button-box'>
          <VoteButton />
        </div>
      </div>
    </div>
  );
});
