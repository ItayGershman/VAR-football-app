import getLiveGames from '../../src/comp/actions/liveScoreActions';

const data = {
  api: {
    results: 1,
    fixtures: [
      {
        fixture_id: 157374,
        league_id: 524,
        league: {
          name: 'Premier League',
          country: 'England',
          logo: 'https://media.api-sports.io/football/leagues/39.png',
          flag: 'https://media.api-sports.io/flags/gb.svg'
        },
        event_date: '2020-07-17T22:00:00+03:00',
        event_timestamp: 1595012400,
        firstHalfStart: null,
        secondHalfStart: null,
        round: 'Regular Season - 36',
        status: 'Not Started',
        statusShort: 'NS',
        elapsed: 0,
        venue: 'London Stadium',
        referee: 'M. Atkinson',
        homeTeam: {
          team_id: 48,
          team_name: 'West Ham',
          logo: 'https://media.api-sports.io/football/teams/48.png'
        },
        awayTeam: {
          team_id: 38,
          team_name: 'Watford',
          logo: 'https://media.api-sports.io/football/teams/38.png'
        },
        goalsHomeTeam: null,
        goalsAwayTeam: null,
        score: { halftime: null, fulltime: null, extratime: null, penalty: null }
      }
    ]
  }
};

const leaguesFromData = [
  {
    league: 'Premier League',
    games: [
      {
        matchLeague: 'England',
        leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
        matchHome: {
          team_id: 48,
          team_name: 'West Ham',
          logo: 'https://media.api-sports.io/football/teams/48.png'
        },
        matchAway: {
          team_id: 38,
          team_name: 'Watford',
          logo: 'https://media.api-sports.io/football/teams/38.png'
        },
        minute: 0,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        gameTime: '22:00',
        id: 157374
      }
    ]
  }
];

const date = '2020-07-17';

const gamesByLeagues = {
  league: 'Premier League',
  games: [
    {
      matchLeague: 'England',
      leagueFlag: 'https://media.api-sports.io/flags/gb.svg',
      matchHome: {
        team_id: 48,
        team_name: 'West Ham',
        logo: 'https://media.api-sports.io/football/teams/48.png'
      },
      matchAway: {
        team_id: 38,
        team_name: 'Watford',
        logo: 'https://media.api-sports.io/football/teams/38.png'
      },
      minute: 0,
      goalsAwayTeam: null,
      goalsHomeTeam: null,
      gameTime: '22:00',
      id: 157374
    }
  ]
};

describe('LiveScore actions testing', () => {
  //   test('getLiveGames function', () => {
  //     const x = getLiveGames();
  //     console.log(x);
  //   });
  test('should ', () => {});
});
