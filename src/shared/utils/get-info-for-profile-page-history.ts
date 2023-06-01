import { AuthorizedUserInfoOutputSuccessType,BooksInfoOutputSuccessType } from '../types';

export const getInfoForProfilePageHistory = (
  allBooks: BooksInfoOutputSuccessType,
  authUserInfo: AuthorizedUserInfoOutputSuccessType
) => {
  const booksArr = authUserInfo.history.books;
  const userComments = authUserInfo.comments;

  const newArr = booksArr.map((item) => {
    const bookID = item.id;
    const bookFromAll = allBooks.find((book) => book.id === bookID);
    const image = bookFromAll ? bookFromAll.image : null;
    const issueYear = bookFromAll ? bookFromAll.issueYear : null;

    const commentFromCurrentUser = userComments.find((comment) => comment.bookId === bookID);

    const { id, rating, title, authors } = item;
    const forBookCard = { id, rating, title, authors, issueYear, image, commentFromCurrentUser };

    return forBookCard;
  });

  return { newArr };
};
