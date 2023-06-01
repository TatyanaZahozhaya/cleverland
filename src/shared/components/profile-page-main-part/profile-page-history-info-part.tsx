import { useAppSelector } from '../../store';
import { getInfoForProfilePageHistory } from '../../utils';

import { SliderPaginationForHistory } from './profile-page-slider';

export const ProfilePageHistoryInfoPart = () => {
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const { allBooks } = useAppSelector((state) => state.allBooks);
  const { newArr } = getInfoForProfilePageHistory(allBooks, authUserInfo);

  return (
    <div className='profile-page-history-slider-container'>
      {newArr && newArr.length && <SliderPaginationForHistory arr={newArr} />}
    </div>
  );
};
