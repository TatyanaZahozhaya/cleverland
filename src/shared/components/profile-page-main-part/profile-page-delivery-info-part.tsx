import { useAppSelector } from '../../store';
import { getInfoForProfilePageDelivered } from '../../utils';

import { ProfilePageBookCard } from './profile-page-book-card';

export const ProfilePageDeliveryInfoPart = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const { allBooks } = useAppSelector((state) => state.allBooks);

  const { forBookCard, deliveryDateOverdue, deliveryDateToDisplay } = getInfoForProfilePageDelivered(
    allBooks,
    authUserInfo
  );

  return (
    <ProfilePageBookCard
      {...forBookCard}
      deliveryDateOverdue={deliveryDateOverdue}
      deliveryDateToDisplay={deliveryDateToDisplay}
    />
  );
};
