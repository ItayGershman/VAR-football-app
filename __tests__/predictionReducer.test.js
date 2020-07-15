import predictionReducer from '../src/comp/reducers/predictionReducer';
import {
  ODDS,
  PREDICTION_LIVE_GAMES,
  PREDICTION_LEAGUES,
  LOADING_PREDICTION
} from '../src/comp/actions/actionsType';

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
  test('PREDICTION_LIVE_GAMES',()=>{

  })
});
