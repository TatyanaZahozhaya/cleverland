export const registrationInfoInitialState = {
  jwt: '',
  user: {
    id: 0,
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    createdAt: '',
    updatedAt: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
};

export const registrationErrorInitialState = {
  data: null,
  error: {
    status: 0,
    name: '',
    message: '',
    details: {},
  },
};
