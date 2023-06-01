export const navLinks = [
  {
    name: 'Витрина книг',
    path: 'books/all',
    dataTestID: 'showcase',
    sections: [{ name: 'Все книги', path: 'all', id: 0, dataTestID: 'books' }],
  },
  { name: 'Правила пользования', path: 'terms', dataTestID: 'terms' },
  { name: 'Договор оферты', path: 'contract', dataTestID: 'contract' },
];

export const userNavLinks = [
  { name: 'Профиль', path: 'profile', dataTestID: 'profile', sections: [] },
];


export const daysOfWeek = [
  { value: 'Пн', code: 1 },
  { value: 'Вт', code: 2 },
  { value: 'Ср', code: 3 },
  { value: 'Чт', code: 4 },
  { value: 'Пт', code: 5 },
  { value: 'Сб', code: 6 },
  { value: 'Вс', code: 0 },
];