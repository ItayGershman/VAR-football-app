//Exmaple!!

import { LEAGUES, LIVE_GAMES, LIVE_GAMES_BY_DATE } from './actionsType';

const getLiveGames = (query) => async (dispatch) => {
  console.log('In getLiveGames')
  console.log(query)
  // dispatch({ type: LIVE_GAMES,matchLeague:'Cup' })
  // const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/live/754'// get live games from germen league
  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch({ type: LIVE_GAMES, /*tracks: data, query: queryTitle*/ });
  //   })

  fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      console.log(data.api.fixtures[0].league.name)
      console.log(data.api.fixtures[0].homeTeam.logo)
      
      dispatch({
        type: LIVE_GAMES,
        matchLeague: data.api.fixtures[0].league.name,
        leagueFlag: data.api.fixtures[0].league.flag,
        matchHome: data.api.fixtures[0].homeTeam,
        matchAway: data.api.fixtures[0].awayTeam
      });
    })
    .catch((error) => {
      console.error(error)
    })
}

export default getLiveGames