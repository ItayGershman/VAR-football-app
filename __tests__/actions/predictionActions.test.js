import { getFixtureID } from '../../src/comp/actions/predictionActions';

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

// const teamsLogo = {
//   home: 'https://media.api-sports.io/football/teams/529.png',
//   away: 'https://media.api-sports.io/football/teams/727.png'
// };

describe('predictionActions functions testing', () => {
  test('getFixtureID function ', () => {
    const fixture = getFixtureID('Barcelona vs Osasuna', gamesData);
    console.log(fixture);
    expect(fixture).toEqual('214383');
  });
});
