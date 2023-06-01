import React, { FC, memo } from 'react';

import { BookCardAuthorContainer } from '../containers';
import { BookPageAuthorText, BoookCardAuthorText } from '../text';

type BookCardAuthorType = {
  arr: string[] | undefined;
}

export const BookCardAuthor: FC<BookCardAuthorType> = memo(({ arr }) => {
  if (!arr || arr.length < 1) {
    return null;
  }

  return <BookCardAuthorContainer>{arr.map(renderCardAuthor)}</BookCardAuthorContainer>;
});

function renderCardAuthor(item: string) {
  return <BoookCardAuthorText author={item} key={item} />;
}

export const BookPageAuthor: FC<BookCardAuthorType> = memo(({ arr }) => {
  if (!arr || arr.length < 1) {
    return null;
  }

  return <React.Fragment>{arr.map(renderPageAuthor)}</React.Fragment>;
});

function renderPageAuthor(item: string) {
  return <BookPageAuthorText author={item} key={item} />;
}
