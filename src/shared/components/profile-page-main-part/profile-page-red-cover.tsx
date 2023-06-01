import { FC } from 'react';

import './index.scss';

type ProfilePageRedCoverType ={
  title: string;
  subtitle: string;
}

export const ProfilePageRedCover: FC<ProfilePageRedCoverType> = ({ title, subtitle }) => (
  <div data-test-id='expired' className='profile-page-red-cover'>
    <p className='profile-page-color-card-text profile-page-color-card-title'>{title}</p>
    <p className='profile-page-color-card-text profile-page-color-card-subtitle'>{subtitle}</p>
  </div>
);
