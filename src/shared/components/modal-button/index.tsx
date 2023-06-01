import { FC} from 'react';

import './index.scss';

type ModalButtonType = {
  text: string;
  onClick?(e: React.MouseEvent): void;
  typeButton: boolean;
  disabled: boolean;
}

export const ModalButton: FC<ModalButtonType> = ({ text, typeButton, onClick, disabled }) => (
  <button className='modal-button' type={typeButton ? 'button' : 'submit'} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);
