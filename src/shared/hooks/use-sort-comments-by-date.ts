import { EachBookCommentsType } from '../types';

export const useSortCommentsByDate = (commentsArr: EachBookCommentsType[]) => {
  const commentsSortedByDate = commentsArr
    .filter((item: EachBookCommentsType) => item.createdAt)
    .sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return Date.parse(a.createdAt) > Date.parse(b.createdAt) ? -1 : 1;
      }

      return -1;
    });

  return commentsSortedByDate;
};
