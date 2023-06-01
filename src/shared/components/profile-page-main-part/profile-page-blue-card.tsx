import { FC } from 'react';

import './index.scss';

type ProfilePageBlueCardType= {
  text: string;
}

export const ProfilePageBlueCard: FC<ProfilePageBlueCardType> = ({ text }) => (
  <div data-test-id='empty-blue-card' className='profile-page-blue-card'>
    <p className='profile-page-color-card-text profile-page-color-card-title'>{text}</p>
  </div>
);
