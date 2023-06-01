import { IBooksGenresOutput } from '../types';

export const getRUCategoryFromEN = (category: string | undefined, arr: IBooksGenresOutput) => {
  let categoryRU;

  if (category === 'all') {
    categoryRU = 'Все книги';
  } else {
    categoryRU = arr.filter((item) => item.path === category)[0].name;
  }

  return categoryRU;
};
