export type RegistrationBodyType = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type RegistrationResponseType = {
  data: RegistrationOutputSuccessType;
  status: number;
  statusText: string;
};

export type RegistrationOutputSuccessType = {
  jwt: string;
  user: UserRegistrationInfoType;
};

export type UserRegistrationInfoType = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type RegistrationErrorType = {
  data: null;
  error: ResponseErrorType;
};

type ResponseErrorType = {
  status: number;
  name: string;
  message: string;
  details: object;
};

export type AuthorizationBodyType = {
  identifier: string;
  password: string;
};
export type AuthorizationResponseType = RegistrationResponseType;

export type ForgotPasswordBodyType = {
  email: string;
};

export type ForgotPasswordResponseType = {
  data: ForgotPasswordOutputSucessType;
  status: number;
  statusText: string;
};

export type ForgotPasswordOutputSucessType = {
  ok: boolean;
};

export type ResetPasswordBodyType = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

export type ResetPasswordFromFormType = {
  password: string;
  passwordConfirmation: string;
};

export type ResetPasswordResponseType = RegistrationResponseType;

export type BooksInfoOutputSuccessType = BooksInfoType[];

export type BooksInfoType = {
  issueYear: string | undefined;
  rating: number | null | 0;
  title: string;
  authors: string[] | undefined;
  image: BookImageType | null;
  categories: string[] | undefined;
  id: number;
  booking: BookBookingType | null;
  delivery: BookDeliveryType | null;
  histories: BookHistoriesType | null;
};

export interface IBookCard extends BooksInfoType {
  view: string;
  category: string;
}

export type EachBookInfoOutputSuccessType = {
  id: number;
  title: string;
  rating: number | null;
  issueYear: string | undefined;
  description: string | undefined;
  publish: string | undefined;
  pages: string | undefined;
  cover: string | undefined;
  weight: string | undefined;
  format: string | undefined;
  ISBN: string | undefined;
  producer: string | undefined;
  authors: string[] | undefined;
  images: BookImageType[];
  categories: string[] | undefined;
  comments: EachBookCommentsType[];
  booking: BookBookingType | null;
  delivery: BookDeliveryType | null;
  histories: BookHistoriesType[] | undefined;
};

export type BookImageType = {
  url: string | undefined;
};

export type BookBookingType = {
  id: number;
  order: boolean;
  dateOrder: string | undefined;
  customerId: number | undefined;
  customerFirstName: string | undefined;
  customerLastName: string | undefined;
};

export type BookDeliveryType = {
  id: number;
  handed: boolean;
  dateHandedFrom: string | undefined;
  dateHandedTo: string | undefined;
  recipientId: number | undefined;
  recipientFirstName: string | undefined;
  recipientLastName: string | undefined;
};

export type BookHistoriesType = {
  id: number | undefined;
  userId: number | undefined;
};

export type EachBookCommentsType = {
  date: string | number | Date;
  id: number | undefined;
  rating: number;
  text: string | undefined;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string | undefined;
  };
};

export type IBooksGenresOutput = BooksGenresType[];

export type BooksGenresType = {
  name: string;
  path: string;
  id: number;
  dataTestID?: string;
};

export type ForDetailedInfoType = {
  key: string;
  value: string | undefined;
};

export type ForGeneralDescriptionType = {
  id: number;
  title: string;
  authors: string[] | undefined;
  booking: BookBookingType | null;
  delivery: BookDeliveryType | null;
  description: string | undefined;
  images: BookImageType[] | undefined;
};

export type ValidationErrorType = {
  type: string;
  message: string;
};

export type FormValuesType = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  identifier: string;
  passwordConfirmation: string;
};

export type FormValuesPersonalDataType = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  identifier: string;
  passwordConfirmation: string;
};

export type DateItemType = {
  day: number;
  month: number;
  year: number;
  weekDay: number;
};

export type BookingBodyType = {
  data: IBookingBodyData;
};

export interface IBookingBodyData {
  order: boolean;
  dateOrder: string;
  book: string;
  customer: string;
}

export type BookingOutputSuccessType = {
  data: BookingDataType;
  meta: object;
};

type BookingAttributesType = {
  order: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  dateOrder: string;
};

type BookingDataType = {
  id: number;
  attributes: BookingAttributesType;
};

export type BookingResponseType = {
  data: BookingOutputSuccessType;
  status: number;
  statusText: string;
};

export type ChangeBookingInfoInputType = {
  body: BookingBodyType;
  bookingID: number;
};

export type ChosenDataType = {
  day: number;
  month: number;
  year: number;
};

export type CommentBodyType = {
  data: CommentBodyDataType;
};
export type CommentBodyDataType = {
  rating: number;
  text: string | null;
  book: string;
  user: string;
};

export type CommentOutputSuccessType = {
  data: CommentDataType;
  meta: object;
};

type CommentDataType = {
  id: number;
  attributes: CommentAttributesType;
};

type CommentAttributesType = {
  rating: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CommentResponseType = {
  data: CommentOutputSuccessType;
  status: number;
  statusText: string;
};

export type AuthorizedUserInfoOutputSuccessType = {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: AuthUserRoleType;
  comments: AuthUserCommentsType[];
  avatar: string;
  booking: AuthUserBookingType;
  delivery: AuthUserDeliveryType;
  history: AuthUserHistoryType;
};

export type AuthUserRoleType = {
  id: number;
  name: string;
  description: string;
  type: string;
};

export type AuthUserCommentsType = {
  id: number;
  rating: number;
  text: null;
  bookId: number;
};

export type AuthUserBookingType = {
  id: number;
  order: boolean;
  dateOrder: string;
  book: AuthUserBookType;
};

export type AuthUserBookType = {
  id: number;
  title: string;
  rating: number;
  issueYear: string | null;
  authors: string[];
  image: null;
};

export type AuthUserDeliveryType = {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  book: AuthUserBookType;
};

export type AuthUserHistoryType = {
  id: number;
  books: AuthUserBookType[];
};

export type SendNewPictureBodyType = {
  data: {
    files: string;
  };
};

export type SendNewPictureResponseType = {
  data: SendNewPictureOutputSuccessType[];
  status: number;
  statusText: string;
};

export type SendNewPictureOutputSuccessType = {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PicFormatsType;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export type PicFormatsType = {
  thumbnail: PictureFormatType;
  large: PictureFormatType;
  medium: PictureFormatType;
  small: PictureFormatType;
};

export type PictureFormatType = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type ChangePictureInputType = {
  body: ChangePictureBodyType;
  userId: number;
};
export type ChangePictureBodyType = {
  avatar: number;
};

export type ChangePictureResponseType = {
  data: ChangePictureOutputSuccessType;
  status: number;
  statusText: string;
};

export type ChangePictureOutputSuccessType = AuthorizedUserInfoOutputSuccessType;

export type FetchNewAvatarType = {
  files: FormData;
  userId: number;
};

export type EditPersonalDataBodyType = {
  username: string;
  email: string;
  password: string;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
};

export type EditPersonalDataInputType = {
  body: EditPersonalDataBodyType;
  userId: number;
};

export type EditPersonalDataResponseType = {
  data: EditPersonalDataOutputSuccessType;
  status: number;
  statusText: string;
};

export type EditPersonalDataOutputSuccessType = AuthorizedUserInfoOutputSuccessType;

export type EditPersonalDataBodyFormType = {
  login: string;
  email: string;
  password: string;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
};

export type EditCommentDataInputType = {
  body: CommentBodyType;
  commentId: string;
};
