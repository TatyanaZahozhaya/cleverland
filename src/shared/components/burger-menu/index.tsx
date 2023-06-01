/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import { BurgerMenuButton } from '../burger-menu-button';
import { Navigation } from '../navigation';

import './index.scss';

export const BurgerMenu = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <div className='burger-menu'>
      <BurgerMenuButton onClickMenuButton={toggleMenuMode} isOpen={isMenuOpen} />
      <div
        className={isMenuOpen ? 'burger-menu_wrapper ' : undefined}
        onClick={(e) => (e.target === e.currentTarget ? toggleMenuMode() : e.stopPropagation())}
      >
        <Navigation
          data-test-id='burger-navigation'
          navigationClass={
            isMenuOpen ? 'burger-menu_container burger-menu_container__visible' : 'burger-menu_container'
          }
          navigationType='burger'
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
};
