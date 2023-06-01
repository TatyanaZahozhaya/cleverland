/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

import { apiRoutes } from '../../constants';
import {
  AuthorizationBodyType,
  AuthorizationResponseType,
  AuthorizedUserInfoOutputSuccessType,
  BookingBodyType,
  BookingResponseType,
  BooksInfoOutputSuccessType,
  ChangeBookingInfoInputType,
  ChangePictureBodyType,
  ChangePictureInputType,
  ChangePictureResponseType,
  CommentBodyType,
  CommentResponseType,
  EachBookInfoOutputSuccessType,
  EditCommentDataInputType,
  EditPersonalDataBodyType,
  EditPersonalDataInputType,
  EditPersonalDataResponseType,
  FetchNewAvatarType,
  ForgotPasswordBodyType,
  ForgotPasswordResponseType,
  IBooksGenresOutput,
  RegistrationBodyType,
  RegistrationResponseType,
  ResetPasswordBodyType,
  ResetPasswordResponseType,
  SendNewPictureResponseType,
} from '../../types';

import { API } from './api';

export class ClassClient {
  onResponse = async (url: string) => API.get(url).then((response) => response.data);

  fetchCategories = (): Promise<IBooksGenresOutput> => this.onResponse(apiRoutes.bookCategoriesRoute);

  fetchAllBooks = (): Promise<BooksInfoOutputSuccessType> => this.onResponse(apiRoutes.allBooksRoute);

  fetchOneBook = (id: string): Promise<EachBookInfoOutputSuccessType> =>
    this.onResponse(`${apiRoutes.allBooksRoute}/${id}`);

  fetchAuthorizedUser = (): Promise<AuthorizedUserInfoOutputSuccessType> =>
    this.onResponse(apiRoutes.authorizedUserRoute);

  onRequest = async (
    url: string,
    body:
      | RegistrationBodyType
      | AuthorizationBodyType
      | ForgotPasswordBodyType
      | ResetPasswordBodyType
      | BookingBodyType
      | CommentBodyType
      | FormData
  ) => API.post(url, body);

  fetchRegistration = (body: RegistrationBodyType): Promise<RegistrationResponseType> =>
    this.onRequest(apiRoutes.registrationRoute, body);

  fetchAuthorization = (body: AuthorizationBodyType): Promise<AuthorizationResponseType> =>
    this.onRequest(apiRoutes.authorizationRoute, body);

  fetchForgotPassword = (body: ForgotPasswordBodyType): Promise<ForgotPasswordResponseType> =>
    this.onRequest(apiRoutes.forgotPasswordRoute, body);

  fetchResetPassword = (body: ResetPasswordBodyType): Promise<ResetPasswordResponseType> =>
    this.onRequest(apiRoutes.resetPasswordPagePath, body);

  fetchBooking = (body: BookingBodyType): Promise<BookingResponseType> => this.onRequest(apiRoutes.bookingPath, body);

  fetchAddComment = (body: CommentBodyType): Promise<CommentResponseType> =>
    this.onRequest(apiRoutes.commentsPath, body);

  fetchSendNewPicture = (body: FormData): Promise<SendNewPictureResponseType> =>
    this.onRequest(apiRoutes.uploadPicturePath, body);

  onPutChanges = async (
    url: string,
    body: BookingBodyType | ChangePictureBodyType | EditPersonalDataBodyType | CommentBodyType
  ) => API.put(url, body);

  fetchChangeBooking = ({ body, bookingID }: ChangeBookingInfoInputType): Promise<BookingResponseType> =>
    this.onPutChanges(`${apiRoutes.bookingPath}/${bookingID}`, body);

  fetchChangePicture = ({ body, userId }: ChangePictureInputType): Promise<ChangePictureResponseType> =>
    this.onPutChanges(`${apiRoutes.userInfoPath}/${userId}`, body);

  fetchEditPersonalData = ({ body, userId }: EditPersonalDataInputType): Promise<ChangePictureResponseType> =>
    this.onPutChanges(`${apiRoutes.userInfoPath}/${userId}`, body);

  fetchEditComment = ({ body, commentId }: EditCommentDataInputType): Promise<CommentResponseType> =>
    this.onPutChanges(`${apiRoutes.commentsPath}/${commentId}`, body);

  onDelete = async (url: string) => API.delete(url);

  fetchDeleteBooking = (bookingID: number): Promise<BookingResponseType> =>
    this.onDelete(`${apiRoutes.bookingPath}/${bookingID}`);

  fetchNewAvatar = async ({ files, userId }: FetchNewAvatarType): Promise<EditPersonalDataResponseType> => {
    const pictureInfo = await this.fetchSendNewPicture(files);

    if (!pictureInfo.data.length) {
      throw new Error('No city data(coord)');
    }
    const { id } = pictureInfo.data[0];

    const res = await this.fetchChangePicture({ body: { avatar: id }, userId });

    return res;
  };
}

export const Client = new ClassClient();
