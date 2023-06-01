import { useLocation } from 'react-router-dom';

import { BurgerMenu } from '../burger-menu';
import { AppContainer, AppNameContainer } from '../containers';
import { LogInSection } from '../log-in-section';
import { Logo } from '../logo';
import { NameText } from '../text';

import './index.scss';

export const AppHeader = () => {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1) === 'profile' ? 'Личный кабинет' : 'Библиотека';

  return (
    <AppContainer>
      <header>
        <AppNameContainer>
          <Logo />
          <BurgerMenu />
          <NameText text={pageName} />
        </AppNameContainer>
        <LogInSection />
      </header>
    </AppContainer>
  );
};
