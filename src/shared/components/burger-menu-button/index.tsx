import { FC,memo } from 'react';

import './index.scss';

type BurgerMenuButtonType= {
  isOpen: boolean ;
  onClickMenuButton(e: React.MouseEvent): void;

}

export const BurgerMenuButton: FC<BurgerMenuButtonType>= memo(({ isOpen, onClickMenuButton }) => (
  <button
    data-test-id='button-burger'
    className={isOpen ? 'burger-menu-button burger-menu-button_close' : 'burger-menu-button burger-menu-button_open'}
    type='button'
    onClick={onClickMenuButton}
  >
    <span />
  </button>
));
