import { FC } from 'react';

import { useSortCommentsByDate } from '../../hooks';
import { EachBookCommentsType } from '../../types';
import { CommentsItem } from '../comments-item';

import './index.scss';

type CommentsListType = {
  closed: boolean;
  comments: EachBookCommentsType[];
};

export const CommentsList: FC<CommentsListType> = ({ closed, comments }) => {
  const commentsSortedByDate = useSortCommentsByDate(comments);

  function renderComments(item: EachBookCommentsType) {
    return <CommentsItem key={item.id} {...item} />;
  }

  return (
    <div className={closed ? 'comments_box__closed' : 'comments_box'}>{commentsSortedByDate.map(renderComments)}</div>
  );
};
