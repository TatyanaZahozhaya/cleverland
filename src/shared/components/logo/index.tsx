import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../store';
import { resetCategoryFilter } from '../../store/slice/filter-slice';
import { LogoIcon } from '../svg-icons';

import './index.scss';

export const Logo = () => {
  const dispatch = useAppDispatch();

  return (
    <Link
      className='header-logo'
      to='/'
      aria-label='логотип Cleverland как ссылка на главную страницу'
      onClick={() => dispatch(resetCategoryFilter())}
    >
      <LogoIcon />
    </Link>
  );
};
