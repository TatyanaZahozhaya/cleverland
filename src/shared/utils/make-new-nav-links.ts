import { navLinks } from '../../app-data';

export const makeNewNavLinks = (innerLinks: any) => {
  const newArr = JSON.parse(JSON.stringify(navLinks));

  const newInner = [...newArr[0].sections, ...innerLinks];

  newArr[0].sections = newInner;

  return newArr;
};
