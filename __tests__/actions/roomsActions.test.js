import { login } from '../../src/comp/actions/roomsActions';

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      Promise.resolve({
        res: true
      });
    }
  });
});

describe('Rooms Actions testins', () => {
  it('login', () => {
    const roomCode = 'YmmgNYP5';
    const fullName = 'Itay';
    const user = login(roomCode, fullName);
    expect(user).toHaveBeenCalledTimes(1);
  });
});
