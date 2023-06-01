import { FC, memo } from 'react';

import { ListIcon, WindowIcon } from '../svg-icons';

import './index.scss';

type ViewButtonType = {
  id: string;
  value: string;
  checked?: boolean;
  onViewChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const ViewButton: FC<ViewButtonType> = memo(({ id, value, checked, onViewChange }) => (
  <div data-test-id={`button-menu-view-${value}`}>
    <input
      className='view-button_radio'
      name='view'
      type='radio'
      readOnly={true}
      value={value}
      id={id}
      defaultChecked={checked}
      onChange={onViewChange}
    />
    <label className='view-button_container' htmlFor={id}>
      <svg className='view-button_icon' width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        {id === 'button-menu-view-window' ? <WindowIcon /> : <ListIcon />}
      </svg>
    </label>
  </div>
));
