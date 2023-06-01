import { useAppSelector } from '../../store';

import { ProfilePageBlueCard } from './profile-page-blue-card';
import { ProfilePageHistoryInfoPart } from './profile-page-history-info-part';
import { ProfilePageSectionSubTitle, ProfilePageSectionTitle } from './profile-page-section-title';

export const ProfilePageHistorySection = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const historyIN = authUserInfo && authUserInfo.history.books && authUserInfo.history.books.length;

  return (
    <div data-test-id='history'>
      <ProfilePageSectionTitle text='История' />
      <ProfilePageSectionSubTitle text='Список прочитанных книг' />

      {historyIN ? (
        <ProfilePageHistoryInfoPart />
      ) : (
        <ProfilePageBlueCard text='Вы не читали книг из нашей библиотеки' />
      )}
    </div>
  );
};
