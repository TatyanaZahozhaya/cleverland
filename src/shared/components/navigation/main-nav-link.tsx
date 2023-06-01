import React, { FC, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { HideIcon } from '../svg-icons';

import { InnerNavLink } from './inner-nav-link';

import './index.scss';

const renderNavLinks = (category: string | undefined, navigationType: string, toggleMenu?: any) => (item: any) =>
  (
    <InnerNavLink
      key={item.name}
      category={category}
      navigationType={navigationType}
      toggleMenu={toggleMenu}
      {...item}
    />
  );

type MainNavLinkType = {
  mainNavavLink: string;
  sections: string[];
  path: string;
  dataTestID: string;
  navigationType: string;
  toggleMenu?: any;
}

export const MainNavLink: FC<MainNavLinkType> = ({
  mainNavavLink,
  sections,
  path,
  dataTestID,
  navigationType,
  toggleMenu,
}) => {
  const { section, category } = useParams();
  const { pathname } = useLocation();
  const [innerMenuOpened, setInnerMenuOpened] = useState(true);
  let isLinkActive;

  function toggleInnerMenuOpen() {
    setInnerMenuOpened(!innerMenuOpened);
  }

  if (section) {
    isLinkActive = path.includes(section);
  } else {
    isLinkActive = pathname.slice(1) === path;
  }

  return (
    <li className='main-nav-link_container'>
      {section && isLinkActive ? (
        <React.Fragment>
          <button
            type='button'
            data-test-id={`${navigationType}-${dataTestID}`}
            className={isLinkActive ? 'main-nav-link main-nav-link_focus main-nav-link_btn__focus' : 'main-nav-link'}
            onClick={() => toggleInnerMenuOpen()}
          >
            {mainNavavLink}
          </button>
          <button
            className={innerMenuOpened ? 'main-nav-link_button ' : 'main-nav-link_button main-nav-link_button__closed'}
            onClick={() => toggleInnerMenuOpen()}
            type='button'
          >
            <HideIcon />
          </button>
        </React.Fragment>
      ) : (
        <Link
          data-test-id={`${navigationType}-${dataTestID}`}
          className={isLinkActive ? 'main-nav-link main-nav-link_focus' : 'main-nav-link'}
          to={`/${path}`}
        >
          {mainNavavLink}
        </Link>
      )}
      <ul
        className={
          innerMenuOpened && isLinkActive
            ? 'inner-nav-link_section'
            : 'inner-nav-link_section inner-nav-link_section__closed'
        }
      >
        {sections ? sections.map(renderNavLinks(category, navigationType, toggleMenu)) : null}
      </ul>
    </li>
  );
};
