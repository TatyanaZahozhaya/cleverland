import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthorizationPage } from '../../pages/authorization-page';
import { BookPage } from '../../pages/book-page';
import { ContractPage } from '../../pages/contract-page';
import { ForgotPasswordPage } from '../../pages/forgot-password-page';
import { MainPage } from '../../pages/main-page';
import { PageLayout } from '../../pages/page-layout';
import { ProfilePage } from '../../pages/profile-page';
import { RegistrationPage } from '../../pages/registration-page';
import { TermsPage } from '../../pages/terms-page';
import { routesPath } from '../constants';
import { useAppSelector } from '../store';

export const ApplicationRoutes = () => {
  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);
  const token = localStorage.getItem('token');
  const authorizedUser = authorizationInfo.jwt || token ? true : false;

  const {
    authorizationPagePath,
    registrationPagePath,
    resetPasswordPagePath,
    contractPagePath,
    termsPagePath,
    profilePagePath,
    mainPagePath,
    mainPageDynamicPath,
    bookPageDynamicPath,
  } = routesPath;

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to={authorizationPagePath} />} />
        <Route path={authorizationPagePath} element={<AuthorizationPage />} />
        <Route
          path={registrationPagePath}
          element={authorizedUser ? <Navigate to={mainPagePath} /> : <RegistrationPage />}
        />
        <Route
          path={resetPasswordPagePath}
          element={authorizedUser ? <Navigate to={mainPagePath} /> : <ForgotPasswordPage />}
        />
        <Route element={<PageLayout />}>
          <Route
            path={mainPageDynamicPath}
            element={authorizedUser ? <MainPage /> : <Navigate to={authorizationPagePath} />}
          />
          <Route
            path={bookPageDynamicPath}
            element={authorizedUser ? <BookPage /> : <Navigate to={authorizationPagePath} />}
          />
          <Route
            path={contractPagePath}
            element={authorizedUser ? <ContractPage /> : <Navigate to={authorizationPagePath} />}
          />
          <Route
            path={termsPagePath}
            element={authorizedUser ? <TermsPage /> : <Navigate to={authorizationPagePath} />}
          />
          <Route
            path={profilePagePath}
            element={authorizedUser ? <ProfilePage /> : <Navigate to={authorizationPagePath} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
