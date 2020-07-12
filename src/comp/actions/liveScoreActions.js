import { LIVE_GAMES, LOADING_LIVESCORE } from './actionsType';
import { API_KEY, API_HOST } from 'react-native-dotenv';
import getCurrentDate from '../../constants';

const getLiveGames = () => async (dispatch) => {
  dispatch({ type: LOADING_LIVESCORE });
  const leagues = [775, 524, 754, 891, 637, 525];
  for (let i = 0; i < 6; ++i) {
    getGamesByLeague(dispatch, leagues[i]);
  }
};
export default getLiveGames;

const getGamesByLeague = (dispatch, leaguedID) => {
  const date = getCurrentDate();
  fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leaguedID}/${date}?timezone=Asia/Jerusalem`,
    {
      //All league games by round
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const leagues = organizeMatchByLeague(data);
      dispatch({
        type: LIVE_GAMES,
        leagues
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const organizeMatchByLeague = (data) => {
  const leagues = [];
  for (let i = 0; i < data.api.fixtures.length; ++i) {
    const fixture = data.api.fixtures[i];
    const match = {
      matchLeague: fixture.league.country,
      leagueFlag: fixture.league.flag,
      matchHome: fixture.homeTeam,
      matchAway: fixture.awayTeam,
      minute: fixture.elapsed,
      goalsAwayTeam: fixture.goalsAwayTeam,
      goalsHomeTeam: fixture.goalsHomeTeam,
      gameTime: fixture.event_date.substring(11, 16),
      id: fixture.fixture_id
    };
    const gamesByLeague = {
      league: fixture.league.name,
      games: [match]
    };
    //Search if a specific league is inside leagues array - if yes push game into this league
    const obj = leagues.find((obj, i) => {
      if (obj.league === data.api.fixtures[i].league.name) {
        leagues[i].games.push(match);
        return true;
      }
      return false;
    });
    //Push another league (with game) into leagues array
    if (obj === undefined) leagues.push(gamesByLeague);
  }
  return leagues;
};
