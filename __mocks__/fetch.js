export default {
  get: jest.fn(() => Promise.resolve({ home: 'he' }))
};
