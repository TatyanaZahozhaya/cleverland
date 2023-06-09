export const setNewAvatarInitialState = {
  id: 0,
  username: '',
  email: '',
  confirmed: false,
  blocked: false,
  createdAt: '',
  updatedAt: '',
  firstName: '',
  lastName: '',
  phone: '',
  role: {
    id: 0,
    name: '',
    description: '',
    type: '',
  },
  comments: [],
  avatar: '',
  booking: {
    id: 0,
    order: false,
    dateOrder: '',
    book: {
      id: 0,
      title: '',
      rating: 0,
      issueYear: '',
      authors: [],
      image: null,
    },
  },
  delivery: {
    id: 0,
    handed: false,
    dateHandedFrom: '',
    dateHandedTo: '',
    book: {
      id: 0,
      title: '',
      rating: 0,
      issueYear: '',
      authors: [],
      image: null,
    },
  },
  history: {
    id: 0,
    books: [],
  },
};
