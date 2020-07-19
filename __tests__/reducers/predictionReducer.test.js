import predictionReducer from '../../src/comp/reducers/predictionReducer';
import {
  ODDS,
  PREDICTION_LIVE_GAMES,
  PREDICTION_LEAGUES,
  LOADING_PREDICTION
} from '../../src/comp/actions/actionsType';

const action = {
  match: {
    home: 'Arsenal',
    homeLogo: 'https://media.api-sports.io/footbal/teams/42.png',
    away: 'Liverpool',
    awayLogo: 'https://media.api-sports.io/footbal/teams/40.png'
  },
  advice: 'Double change: draws or Liverpool',
  predictedScore: {
    home: 3,
    away: 3
  },
  winningPercent: {
    home: '10%',
    draw: '45%',
    away: '45%'
  },
  h2hGames: {
    games: [
      {
        home: 'Liverpool',
        away: 'Arsenal',
        score: '5-5'
      },
      {
        home: 'Liverpool',
        away: 'Arsenal',
        score: '3-1'
      },
      {
        home: 'Liverpool',
        away: 'Arsenal',
        score: '5-1'
      },
      {
        home: 'Arsenal',
        away: 'Liverpool',
        score: '1-1'
      },
      {
        home: 'Arsenal',
        away: 'Liverpool',
        score: '3-3'
      }
    ]
  }
};

const gamesData = [
  {
    home: 'Torino',
    away: 'Genoa',
    leagueID: 891,
    minute: '90',
    date: '20:30:00',
    goalsAway: 3,
    goalsHome: 0,
    fulltime: '3-0',
    fixtureID: '232845'
  },
  {
    home: 'Arsenal',
    away: 'Liverpool',
    leagueID: 524,
    minute: '90',
    date: '22:15:00',
    goalsAway: 1,
    goalsHome: 2,
    fulltime: '2-1',
    fixtureID: '157365'
  },
  {
    home: 'Burnley',
    away: 'Wolves',
    leagueID: 524,
    minute: '90',
    date: '20:00:00',
    goalsAway: 1,
    goalsHome: 1,
    fulltime: '1-1',
    fixtureID: '157366'
  },
  {
    home: 'Barcelona',
    away: 'Osasuna',
    leagueID: 775,
    minute: '0',
    date: '22:00:00',
    goalsAway: null,
    goalsHome: null,
    fulltime: 'null6',
    fixtureID: '214383'
  }
];

const uniqueLeagues = ['Italy', 'England'];

describe('predictionReducer tests', () => {
  test('LOADING_PREDICTION', () => {
    const state = predictionReducer(undefined, { type: LOADING_PREDICTION });
    expect(state).toHaveProperty('isLoading', true);
  });
  test('ODDS', () => {
    const state = predictionReducer(undefined, {
      type: ODDS,
      match: action.match,
      predictedScore: action.predictedScore,
      winningPercent: action.winningPercent,
      h2hGames: action.h2hGames
    });
    expect(state).toHaveProperty('match', action.match);
    expect(state).toHaveProperty('predictedScore', action.predictedScore);
    expect(state).toHaveProperty('winningPercent', action.winningPercent);
    expect(state).toHaveProperty('h2hGames', action.h2hGames);
    expect(state).toHaveProperty('isLoading', false);
  });
  test('PREDICTION_LIVE_GAMES', () => {
    const state = predictionReducer(undefined, { type: PREDICTION_LIVE_GAMES, league: 524 });
    state.gamesData = gamesData;
    const result = state.gamesData.filter((game) => game.leagueID === 524);
    expect(result.length).toBe(2);
    const matches = [];
    for (let i = 0; i < result.length; ++i) {
      const match = {
        value: `${result[i].home} vs ${result[i].away}`
      };
      matches.push(match);
    }
    expect(matches.length).toBe(2);
    expect(matches).toEqual([{ value: 'Arsenal vs Liverpool' }, { value: 'Burnley vs Wolves' }]);
    expect(state).toHaveProperty('isLoading', false);
  });
  test('PREDICTION_LEAGUES', () => {
    const state = predictionReducer(undefined, {
      type: PREDICTION_LEAGUES,
      leagues: uniqueLeagues,
      gamesData
    });
    expect(state).toBeDefined();
    expect(state.leagues).toBeDefined();
    expect(state.gamesData).toBeDefined();
    expect(state.isLoading).toBe(false);
  });
});
