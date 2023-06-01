import { useAppDispatch } from '../../store';
import { removeAuthInfo } from '../../store/slice/authorization-slice';

import './index.scss';

export const ExitButton = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(removeAuthInfo());
    localStorage.removeItem('token');
  };

  return (
    <button type='button' data-test-id='exit-button' className='main-nav-link' onClick={() => logout()}>
      Выход
    </button>
  );
};
