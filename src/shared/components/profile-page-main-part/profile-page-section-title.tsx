import { FC } from 'react';

import './index.scss';

type ProfilePageSectionTitleType = {
  text: string;
};

export const ProfilePageSectionTitle: FC<ProfilePageSectionTitleType> = ({ text }) => (
  <div className='profile-page-section-title'>{text}</div>
);

export const ProfilePageSectionSubTitle: FC<ProfilePageSectionTitleType> = ({ text }) => (
  <div className='profile-page-section-sub-title'>{text}</div>
);
