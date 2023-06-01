import { FC } from 'react';

import { status } from '../../constants';
import { useAppSelector } from '../../store';

import { ModalInputType } from '.';

import './index.scss';

export const ModalInputLineContainer: FC<ModalInputType> = ({ placeholder, upClass, children, renderInstructions }) => {
  const { authorisationInfoLoadingStatus, authorisationInfoError } = useAppSelector((state) => state.authorizationInfo);
  const errStatus400 =
    authorisationInfoLoadingStatus === status.error && authorisationInfoError === '400' ? true : false;

  return (
    <div className='modal-input-line_container'>
      <div className='modal-input-line'>
        <label className={upClass ? 'modal-input-line_label modal-input-line_label-up' : 'modal-input-line_label'}>
          {placeholder}
          {children}
        </label>
      </div>
      <div
        className={
          errStatus400
            ? 'modal-input-line_instructions modal-input-line_instructions_warning'
            : 'modal-input-line_instructions'
        }
      >
        {renderInstructions}
      </div>
    </div>
  );
};
