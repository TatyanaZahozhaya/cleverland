import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAppDispatch } from '../../store';
import { removeAuthInfo } from '../../store/slice/authorization-slice';

import './index.scss';

export const UserAvatarMenu = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(removeAuthInfo());
    localStorage.removeItem('token');
  };

  return (
    <div className='user-avatar-menu-container'>
      <Link to={routesPath.profilePagePath} data-test-id='profile-button' type='button' className='main-nav-link main-nav-link_user'>
        Профиль
      </Link>
      <button type='button' className='main-nav-link main-nav-link_user' onClick={() => logout()}>
        Выход
      </button>
    </div>
  );
};
