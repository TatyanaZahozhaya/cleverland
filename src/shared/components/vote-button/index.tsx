import { useParams } from 'react-router-dom';

import { useCheckIfUserLeftCommentBefore } from '../../hooks';
import { ProfilePageHistoryChangeButton } from '../profile-page-main-part/profile-page-history-change-button';
import { ProfilePageHistoryVoteButton } from '../profile-page-main-part/profile-page-history-vote-button';

import './index.scss';

export const VoteButton = () => {
  const { isAlreadyVoted, commentsFromCurrentUser } = useCheckIfUserLeftCommentBefore();
  const { bookID } = useParams();

  return (
    <div className='vote-button'>
      {isAlreadyVoted ? (
        <ProfilePageHistoryChangeButton
          dataTestId='button-rate-book'
          bookID={bookID ? bookID : ''}
          commentFromCurrentUser={commentsFromCurrentUser}
        />
      ) : (
        <ProfilePageHistoryVoteButton dataTestId='button-rate-book' bookID={bookID ? bookID : ''} />
      )}
    </div>
  );
};
