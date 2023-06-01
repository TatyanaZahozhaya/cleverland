import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import addCommentInfo, { type IAddCommentInfo } from '../slice/add-comment-slice';
import allBooks, { type IAllBooks } from '../slice/all-books-slice';
import authorizationInfo, { type IAuthorizationInfo } from '../slice/authorization-slice';
import authUserInfo, { type IAuthorizedUser } from '../slice/authorized-user-slice';
import bookingInfo, { type IBookingInfo } from '../slice/booking-slice';
import booksCategories, { type IBooksCategories } from '../slice/categories-slice';
import changedBookingInfo, { type IChangeBookingInfo } from '../slice/change-booking-slice';
import deletedBookingInfo, { type IDeleteBookingInfo } from '../slice/delete-booking-slice';
import editCommentInfo, {type IEditCommentInfo} from '../slice/edit-comment-slice'
import editPersonalDataInfo, { type IEditPersonalDataInfo } from '../slice/edit-personal-data-slice';
import filter, { type IFilterState } from '../slice/filter-slice';
import forgotPasswordInfo, { type IForgotPassword } from '../slice/forgot-password-slice';
import oneBookInfo, { type IOneBookInfo } from '../slice/one-book-slice';
import registarationInfo, { type IRegistarationInfo } from '../slice/registration-slice';
import resetPasswordInfo, { type IResetPasswordInfo } from '../slice/reset-password-slice';
import setNewAvatarInfo, { type ISetNewAvatarInfo } from '../slice/set-new-avatar-slice';
import view, { type IViewState } from '../slice/view-slice';

export interface IAppState {
  view: IViewState;
  filter: IFilterState;
  booksCategories: IBooksCategories;
  allBooks: IAllBooks;
  oneBookInfo: IOneBookInfo;
  authorizationInfo: IAuthorizationInfo;
  forgotPasswordInfo: IForgotPassword;
  registarationInfo: IRegistarationInfo;
  resetPasswordInfo: IResetPasswordInfo;
  bookingInfo: IBookingInfo;
  changedBookingInfo: IChangeBookingInfo;
  deletedBookingInfo: IDeleteBookingInfo;
  addCommentInfo: IAddCommentInfo;
  authUserInfo: IAuthorizedUser;
  setNewAvatarInfo: ISetNewAvatarInfo;
  editPersonalDataInfo: IEditPersonalDataInfo;
  editCommentInfo: IEditCommentInfo
}

const viewPersistConfig = {
  key: 'view',
  storage,
};

const booksCategoriesPersistConfig = {
  key: 'booksCategories',
  whitelist: ['booksCategories'],
  storage,
};

const allBooksPersistConfig = {
  key: 'allBooks',
  storage,
  whitelist: ['bookToOpen', 'bookIDToOpen'],
};

const authorizationInfoPersistConfig = {
  key: 'authorizationInfo',
  storage,
  whitelist: ['authorizationInfo'],
};

const rootReducer = combineReducers({
  booksCategories: persistReducer(booksCategoriesPersistConfig, booksCategories),
  allBooks: persistReducer(allBooksPersistConfig, allBooks),
  oneBookInfo,
  view: persistReducer(viewPersistConfig, view),
  filter,
  authorizationInfo: persistReducer(authorizationInfoPersistConfig, authorizationInfo),
  forgotPasswordInfo,
  registarationInfo,
  resetPasswordInfo,
  bookingInfo,
  changedBookingInfo,
  deletedBookingInfo,
  addCommentInfo,
  authUserInfo,
  setNewAvatarInfo,
  editPersonalDataInfo,
  editCommentInfo
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
