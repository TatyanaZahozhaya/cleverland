import { FC, memo } from 'react';

import './index.scss';

type TextType = {
  text?: string;
  name?: string;
  userName?: string;
  author?: string;
  section?: string;
  subsection?: string;
  rating?: number | null;
  parameter?: string;
  value?: string | undefined;
  count?: string;
  message?: string;
  dataTestID?: string;
};

export const FooterText: FC<TextType> = memo(({ text }) => <p className='footer-text'>{text}</p>);

export const NameText: FC<TextType> = memo(({ text }) => <h1 className='name-text'>{text}</h1>);

export const LogInText: FC<TextType> = memo(({ userName }) => (
  <p className='log-in-section_text'>Привет, {userName}</p>
));

export const BoookCardAuthorText: FC<TextType> = memo(({ author }) => (
  <p className='book-card_author-text'>{author}</p>
));

export const NoRatingText = () => <p className='no-rating-text'>ещё нет оценок</p>;

export const PageNameText: FC<TextType> = memo(({ name }) => <h3 className='page-name-text'>{name}</h3>);

export const PathText: FC<TextType> = memo(({ text, dataTestID }) => (
  <span className='path-text' data-test-id={dataTestID}>
    {text}
  </span>
));

export const BookPageNameText: FC<TextType> = memo(({ name }) => (
  <p data-test-id='book-title' className='book-page-name-text'>
    {name}
  </p>
));

export const BookPageAuthorText: FC<TextType> = memo(({ author }) => <p className='book-page-author-text'>{author}</p>);

export const BookPageSectionHeaderText: FC<TextType> = memo(({ name }) => (
  <p className='book-page-section-header-text'>{name}</p>
));

export const BookDescriptionText: FC<TextType> = memo(({ text }) => <p className='book-description-text'>{text}</p>);

export const RatingText: FC<TextType> = memo(({ rating }) => <span className='rating-text'>{rating}</span>);

export const DetailesParameterText: FC<TextType> = memo(({ parameter }) => (
  <p className='detailes-text detailes-parameter-text'>{parameter}</p>
));

export const DetailesValueText: FC<TextType> = memo(({ value }) => (
  <p className='detailes-text detailes-value-text'>{value}</p>
));

export const GeneralAmountCounterText: FC<TextType> = memo(({ count }) => (
  <span className='general-amount-counter-text'>{count}</span>
));

export const ToastMessageText: FC<TextType> = memo(({ message }) => (
  <span className='toast-message-text'>{message}</span>
));

export const ModalNameText: FC<TextType> = memo(({ text }) => <p className='modal-name-text'>{text}</p>);
export const ModalStepText: FC<TextType> = memo(({ text }) => <p className='modal-step-text'>{text}</p>);
export const ModalSecondaryText: FC<TextType> = memo(({ text }) => <p className='modal-secondary-text'>{text}</p>);
export const ModalSecondaryTextDark: FC<TextType> = memo(({ text }) => (
  <p className='modal-secondary-text modal-secondary-text__dark'>{text}</p>
));
export const ModalMainText: FC<TextType> = memo(({ text }) => <p className='modal-main-text'>{text}</p>);
export const ModalMainTextGrey: FC<TextType> = memo(({ text }) => (
  <p className='modal-main-text modal-main-text__grey'>{text}</p>
));
export const ModalMessageNameText: FC<TextType> = memo(({ text }) => (
  <p className='modal-name-text modal-message-name-text'>{text}</p>
));
export const ModalMessageBodyText: FC<TextType> = memo(({ text }) => <p className='modal-message-body-text'>{text}</p>);
