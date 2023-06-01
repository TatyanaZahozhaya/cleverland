import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAmountInCategory } from '../../hooks';
import { useAppDispatch , useAppSelector} from '../../store';
import { changeCategoryFilter } from '../../store/slice/filter-slice';
import { getRUCategoryFromEN } from '../../utils';

import './index.scss';

type InnerNavLinkType = {
  name: string;
  path: string;
  category: string;
  navigationType: string;
  toggleMenu?: any;
}

export const InnerNavLink: FC<InnerNavLinkType> = memo(({ name, path, category, navigationType, toggleMenu }) => {
  const dispatch = useAppDispatch();
  const amount = useAmountInCategory(name);
  const { booksCategories } = useAppSelector((state) => state.booksCategories);
  const pathRU = getRUCategoryFromEN(path, booksCategories);
  const focusClass = path === category;
  const {mainPageHalfPath} = routesPath;

  const setCategoryFilter = () => {
    if (navigationType === 'burger') {
      toggleMenu();
    }
    dispatch(changeCategoryFilter(pathRU));
  };

  return (
    <li>
      <Link
        data-test-id={path === 'all' ? `${navigationType}-books` : `${navigationType}-${path}`}
        className={focusClass ? 'inner-nav-link_text inner-nav-link_text__focus' : 'inner-nav-link_text'}
        to={`${mainPageHalfPath}/${path}`}
        onClick={setCategoryFilter}
      >
        {name}
      </Link>
      <span
        data-test-id={
          path === 'all' ? `${navigationType}-book-count-for--books` : `${navigationType}-book-count-for-${path}`
        }
        className={focusClass ? 'inner-nav-link_amount inner-nav-link_amount__focus' : 'inner-nav-link_amount'}
      >
        {amount}
      </span>
    </li>
  );
});
