import { useAppSelector } from '../store';

export const useCheckIfUserLeftCommentBefore = () => {
  const { oneBookInfo } = useAppSelector((state) => state.oneBookInfo);
  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);

  const currentUser = authorizationInfo.user.id;
  const allComments = oneBookInfo.comments;
  const bookid = oneBookInfo.id;

  let isUserInArray = [];
  let commentsFromCurrentUser;

  if (allComments && allComments.length > 0) {
    isUserInArray = allComments.filter((item) => item.user.commentUserId === currentUser);
  }

  if (authUserInfo && authUserInfo.comments) {
    commentsFromCurrentUser = authUserInfo.comments.find((item) => item.bookId === bookid);
  }

  const isAlreadyVoted = isUserInArray.length === 0 ? false : true;

  return { isAlreadyVoted, commentsFromCurrentUser };
};
