import { useAppSelector } from '../../store';

import { ProfilePageBlueCard } from './profile-page-blue-card';
import { ProfilePageDeliveryInfoPart } from './profile-page-delivery-info-part';
import { ProfilePageSectionSubTitle, ProfilePageSectionTitle } from './profile-page-section-title';

export const ProfilePageDeliverySection = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const delivered = authUserInfo && authUserInfo.delivery.handed;

  return (
    <div>
      <ProfilePageSectionTitle text='Книга которую взяли' />
      <ProfilePageSectionSubTitle text='Здесь можете просмотреть информацию о книге и узнать сроки возврата' />
      {delivered ? (
        <ProfilePageDeliveryInfoPart />
      ) : (
        <ProfilePageBlueCard text='Прочитав книгу, она отобразится в истории' />
      )}
    </div>
  );
};
