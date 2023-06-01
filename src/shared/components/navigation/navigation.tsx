import { FC, memo } from 'react';

import { userNavLinks } from '../../../app-data';
import { useAppSelector } from '../../store';
import { makeNewNavLinks } from '../../utils';

import { ExitButton } from './exit-button';
import { MainNavLink } from './main-nav-link';

import './index.scss';

export const renderMainNavLinks = (navigationType: string, toggleMenu?: any) => (item: any) =>
  (
    <MainNavLink
      key={item.name}
      mainNavavLink={item.name}
      navigationType={navigationType}
      toggleMenu={toggleMenu}
      dataTestID={item.dataTestID}
      {...item}
    />
  );

type NavigationType = {
  navigationClass: string;
  navigationType: string;
  toggleMenu?: any;
}

export const Navigation: FC<NavigationType> = memo(({ navigationClass, navigationType, toggleMenu }) => {
  const { booksCategories } = useAppSelector((state) => state.booksCategories);
  const navLinksWithCategories = makeNewNavLinks(booksCategories);

  return (
    <nav>
      <ul className={navigationClass}>
        {navLinksWithCategories.map(renderMainNavLinks(navigationType, toggleMenu))}
        <div className='user-nav-links'>
          {userNavLinks.map(renderMainNavLinks(navigationType, toggleMenu))}
          {navigationType === 'burger' ? <ExitButton /> : null}
        </div>
      </ul>
    </nav>
  );
});
