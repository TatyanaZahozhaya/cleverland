import { useAppSelector } from '../../store';

import { ProfilePageBlueCard } from './profile-page-blue-card';
import { ProfilePageBookedInfoPart } from './profile-page-booked-info-part';
import { ProfilePageSectionSubTitle, ProfilePageSectionTitle } from './profile-page-section-title';

export const ProfilePageBookedSection = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const booked = authUserInfo && authUserInfo.booking.order === true ? true : false;

  return (
    <div>
      <ProfilePageSectionTitle text='Забронированная книга' />
      <ProfilePageSectionSubTitle text='Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь' />
      {booked ? <ProfilePageBookedInfoPart /> : <ProfilePageBlueCard text='Забронируйте книгу и она отобразится' />}
    </div>
  );
};
