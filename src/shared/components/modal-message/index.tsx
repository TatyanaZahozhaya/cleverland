import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalMessageBodyText, ModalMessageNameText } from '../text';

import './index.scss';

type ModalMessageType = {
  title: string;
  message: string;
  path?: string;
  buttonName?: string;
  clearErr?(): void;
};

export const ModalMessage: FC<ModalMessageType> = ({ title, message, path, buttonName, clearErr }) => {
  const navigate = useNavigate();

  const openPage = () => {
    if (clearErr) clearErr();
    navigate(`${path}`);
  };

  return (
    <div data-test-id='status-block' className='modal-message-container'>
      <div className='modal-message-box'>
        <ModalMessageNameText text={title} />
        <ModalMessageBodyText text={message} />
        {path && buttonName ? (
          <button type='button' className='modal-button modal-button_link' onClick={openPage}>
            {buttonName}
          </button>
        ) : null}
      </div>
    </div>
  );
};
