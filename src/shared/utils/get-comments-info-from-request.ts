import avatarPreview from '../../pictures/user-avatar/avatarPreview.png';
import { EachBookCommentsType } from '../types';

import { getDateForComments } from './get-date-for-comments';

export const getCommentsInfoFromRequest = (item: EachBookCommentsType) => {
  const { user, createdAt, rating, text } = item;
  const src = user && user.avatarUrl ? `${user.avatarUrl}` : avatarPreview;
  const name = user.firstName;
  const surname = user.lastName;
  const date = getDateForComments(createdAt);

  return [src, name, surname, date, rating, text];
};
