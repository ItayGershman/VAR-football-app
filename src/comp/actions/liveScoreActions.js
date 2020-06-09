//Exmaple!!

import { LEAGUES, LIVE_GAMES, LIVE_GAMES_BY_DATE } from './actionsType';

const getLiveGames = (query) => async (dispatch) => {
  console.log('In getLiveGames')
  console.log(query)
  dispatch({ type: LIVE_GAMES })
  // const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/live/754'// get live games from germen league
  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch({ type: LIVE_GAMES, /*tracks: data, query: queryTitle*/ });
  //   })
}

export default getLiveGames