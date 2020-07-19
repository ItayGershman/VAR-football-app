export default {
  get: jest.fn(() => Promise.resolve({ home: 'he' } /**Data i want to return */))
};
