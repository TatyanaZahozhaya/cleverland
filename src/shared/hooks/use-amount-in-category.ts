import { useAppSelector } from '../store';

export const useAmountInCategory = (name: string) => {
  const { allBooks } = useAppSelector((state) => state.allBooks);
  const arrForCategory = allBooks.filter((item) => item.categories?.includes(name));
  let amount;

  if (name.toLocaleLowerCase() === 'все книги') {
    amount = '';
  } else {
    amount = arrForCategory.length;
  }

  return amount;
};
