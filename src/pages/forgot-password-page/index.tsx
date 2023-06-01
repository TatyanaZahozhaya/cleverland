import { useLocation } from 'react-router-dom';

import { ForgotPasswordForm, ModalBox, ModalContainer, ModalHeader, ResetPasswordForm } from '../../shared/components';

export const ForgotPasswordPage = () => {
  const location = useLocation();

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader />
        {location.search ? <ResetPasswordForm /> : <ForgotPasswordForm />}
      </ModalBox>
    </ModalContainer>
  );
};

