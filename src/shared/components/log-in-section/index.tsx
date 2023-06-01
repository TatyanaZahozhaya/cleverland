import avatarPreview from '../../../pictures/user-avatar/avatarPreview.png';
import { useAppSelector } from '../../store';
import { LogInText } from '../text';
import { UserAvatarMenu } from '../user-avatar-menu';

import './index.scss';

export const LogInSection = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);

  const userName = authUserInfo.firstName;
  const userAvatar = authUserInfo.avatar;

  return (
    <div className='log-in-section'>
      <LogInText userName={userName} />
      <button type='button' className='log-in-section-button'>
        <img
          className='log-in-section_avatar'
          src={userAvatar ? `${userAvatar}` : avatarPreview}
          alt='изображение аватара пользователя'
        />
      </button>
      <UserAvatarMenu />
    </div>
  );
};
