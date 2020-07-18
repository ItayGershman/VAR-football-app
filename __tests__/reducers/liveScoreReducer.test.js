import liveScoreReducer from '../../src/comp/reducers/liveScoreReducer';
import { LOADING_LIVESCORE, LIVE_GAMES } from '../../src/comp/actions/actionsType';
const leagues = [
  {
    league: 'Premier League',
    games: [
      {
        matchLeague: 'England',
        leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
        matchHome: {
          team_id: 44,
          team_name: 'Burnley',
          logo: 'https://media.api-sports.io/football/teams/44.png'
        },
        matchAway: {
          team_id: 39,
          team_name: 'Wolves',
          logo: 'https://media.api-sports.io/football/teams/39.png'
        },
        minute: 0,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        gameTime: '20:00',
        id: 157366
      },
      {
        matchLeague: 'England',
        leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
        matchHome: {
          team_id: 50,
          team_name: 'Manchester City',
          logo: 'https://media.api-sports.io/football/teams/50.png'
        },
        matchAway: {
          team_id: 35,
          team_name: 'Bournemouth',
          logo: 'https://media.api-sports.io/football/teams/35.png'
        },
        minute: 0,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        gameTime: '20:00',
        id: 157371
      },
      {
        matchLeague: 'England',
        leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
        matchHome: {
          team_id: 34,
          team_name: 'Newcastle',
          logo: 'https://media.api-sports.io/football/teams/34.png'
        },
        matchAway: {
          team_id: 47,
          team_name: 'Tottenham',
          logo: 'https://media.api-sports.io/football/teams/47.png'
        },
        minute: 0,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        gameTime: '20:00',
        id: 157372
      },
      {
        matchLeague: 'England',
        leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
        matchHome: {
          team_id: 42,
          team_name: 'Arsenal',
          logo: 'https://media.api-sports.io/football/teams/42.png'
        },
        matchAway: {
          team_id: 40,
          team_name: 'Liverpool',
          logo: 'https://media.api-sports.io/football/teams/40.png'
        },
        minute: 0,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        gameTime: '22:15',
        id: 157365
      }
    ]
  }
];
describe('liveScoreReducer tests', () => {
  test('has initial state', () => {
    const state = liveScoreReducer(undefined, {});
    // expect(state).toBeDefined();
    expect(state).toHaveProperty('leagues');
    expect(state).toHaveProperty('isLoading', false);
  });
  test('Change loading ', () => {
    const state = liveScoreReducer(undefined, { type: LOADING_LIVESCORE });
    expect(state).toHaveProperty('isLoading', true);
  });
  test('LIVE_GAMES ', () => {
    const state = liveScoreReducer(undefined, {
      type: LIVE_GAMES,
      leagues
    });
    if (leagues[0] === undefined) {
      expect(state).toHaveProperty('isLoading', false);
    } else {
      expect(state).toHaveProperty('leagues', leagues);
      expect(state).toHaveProperty('isLoading', false);
    }
  });
});
