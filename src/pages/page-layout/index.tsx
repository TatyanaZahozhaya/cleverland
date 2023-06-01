import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppFooter, AppHeader } from '../../shared/components';

import './index.scss';

export const PageLayout = () => (
  <React.Fragment>
    <AppHeader />
    <div className='central-part'>
      <Outlet />
    </div>
    <AppFooter />
  </React.Fragment>
);
