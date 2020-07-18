import roomsReducer from '../../src/comp/reducers/roomsReducer';
import {
  ROOM_CODE,
  ROOM_GAME,
  USER_DATA,
  LOGIN,
  SET_ROOM_DATA,
  SET_POINTS,
  GAME_DATA,
  CLEAN_STATE,
  LOADING_ROOMS
} from '../../src/comp/actions/actionsType';

const roomData = {
  game: 'Osasuna vs Barcelona',
  userData: [
    {
      _id: '5f108532aac2660017f961e3',
      home: 2,
      away: 2,
      points: 0,
      fullName: 'Itay g'
    }
  ]
};

const match = {
  home: 'Alaves',
  homeLogo: 'https://media.api-sports.io/football/teams/543.png',
  away: 'Real Betis',
  awayLogo: 'https://media.api-sports.io/football/teams/542.png',
  minute: 0,
  goalsHome: null,
  goalsAway: null,
  gameTime: null
};
describe('roomReducer tests', () => {
  test('ROOM_CODE ', () => {
    const state = roomsReducer(undefined, { type: ROOM_CODE, roomCode: 'GPrK1Ywt' });
    expect(state).toHaveProperty('roomCode', 'GPrK1Ywt');
  });
  test('ROOM_GAME ', () => {
    const state = roomsReducer(undefined, { type: ROOM_GAME, game: 'Alaves vs Real Betis' });
    expect(state).toHaveProperty('game', 'Alaves vs Real Betis');
  });
  test('USER_DATA ', () => {
    const state = roomsReducer(undefined, { type: USER_DATA, isSetResult: true });
    expect(state).toHaveProperty('isSetResult', true);
  });
  test('LOGIN ', () => {
    const state = roomsReducer(undefined, {
      type: LOGIN,
      isSetResult: true,
      isLoggedIn: true,
      fullName: 'Itay'
    });
    expect(state).toHaveProperty('fullName', 'Itay');
    expect(state).toHaveProperty('isSetResult', true);
    expect(state).toHaveProperty('isLoggedIn', true);
  });
  test('SET_ROOM_DATA ', () => {
    const state = roomsReducer(undefined, { type: SET_ROOM_DATA, roomData });
    expect(state).toHaveProperty('roomData', roomData);
    expect(state).toHaveProperty('roomDataUsers', roomData.userData);
    expect(state.roomDataUsers).not.toBe([]);
  });
  test('SET_POINTS ', () => {
    const state = roomsReducer(undefined, { type: SET_POINTS, points: true });
    expect(state).toHaveProperty('setPoints', true);
    expect(state.isLoading).toBe(false);
  });
  test('GAME_DATA ', () => {
    const state = roomsReducer(undefined, { type: GAME_DATA, gameData: match });
    expect(state).toHaveProperty('gameData', match);
  });
  test('CLEAN_STATE ', () => {
    const state = roomsReducer(
      {
        game: '',
        userData: {},
        roomCode: '',
        isLoggedIn: true,
        isSetResult: true,
        roomData: {},
        roomDataUsers: [],
        setPoints: false,
        gameData: {
          home: 'Alaves',
          homeLogo: 'https://media.api-sports.io/football/teams/543.png',
          away: 'Real Betis',
          awayLogo: 'https://media.api-sports.io/football/teams/542.png',
          minute: 0,
          goalsHome: null,
          goalsAway: null,
          gameTime: null
        },
        fullName: '',
        isLoading: true
      },
      { type: CLEAN_STATE }
    );
    expect(state.roomDataUsers).toEqual([]);
    expect(state.isLoggedIn).toBe(false);
    expect(state.isSetResult).toBe(false);
  });
  test('LOADING_ROOMS ', () => {
    const state = roomsReducer(
      {
        game: '',
        userData: {},
        roomCode: '',
        isLoggedIn: true,
        isSetResult: true,
        roomData: {},
        roomDataUsers: [],
        setPoints: false,
        gameData: {
          home: 'Alaves',
          homeLogo: 'https://media.api-sports.io/football/teams/543.png',
          away: 'Real Betis',
          awayLogo: 'https://media.api-sports.io/football/teams/542.png',
          minute: 0,
          goalsHome: null,
          goalsAway: null,
          gameTime: null
        },
        fullName: '',
        isLoading: false
      },
      { type: LOADING_ROOMS, isLoading: true }
    );
    expect(state.isLoading).toBe(true);
  });
});
