import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/app/hooks';
import { setAppView } from '../../store/slice/view-slice';
import { ViewButton } from '../view-button';

import './index.scss';

type ViewTogglerType =  {
  mobileOpened: boolean;
}

export const ViewToggler: FC<ViewTogglerType> = memo(({ mobileOpened }) => {
  const { view } = useAppSelector((state) => state.view);
  const dispatch = useAppDispatch();

  const onToggleView = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'window') {
      dispatch(setAppView('window'));
    } else {
      dispatch(setAppView('list'));
    }
  };

  return (
    <div className={mobileOpened ? 'view-toggler__hidden' : 'view-toggler'}>
      <ViewButton
        id='button-menu-view-window'
        value='window'
        checked={view === 'window' ? true : false}
        onViewChange={onToggleView}
      />
      <ViewButton
        id='button-menu-view-list'
        value='list'
        checked={view === 'list' ? true : false}
        onViewChange={onToggleView}
      />
    </div>
  );
});
