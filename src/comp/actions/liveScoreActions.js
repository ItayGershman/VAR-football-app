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

  // fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', { //All live games
  // fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/633/current', { //All league games by date

  fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/754/Regular_Season_-_28?timezone=Asia/Jerusalem', { //All league games by round
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
      const leagues = []
      for (let i = 0; i < data.api.fixtures.length; ++i) {
        let match = {}
        match.matchLeague = data.api.fixtures[i].league.name
        match.leagueFlag = data.api.fixtures[i].league.flag
        match.matchHome = data.api.fixtures[i].homeTeam
        match.matchAway = data.api.fixtures[i].awayTeam
        match.minute = data.api.fixtures[i].elapsed
        match.goalsAwayTeam = data.api.fixtures[i].goalsAwayTeam
        match.goalsHomeTeam = data.api.fixtures[i].goalsHomeTeam
        match.gameTime= data.api.fixtures[i].event_date.substring(11,16)
        match.id = data.api.fixtures[i].fixture_id

        const gamesByLeague = {
          league: data.api.fixtures[i].league.name,
          games: [match]
        }
        //Search if a specific league is inside leagues array - if yes push game into this league
        let obj = leagues.find((obj, i) => {
          if (obj.league === data.api.fixtures[i].league.name) {
            leagues[i].games.push(match)
            return true; // Stop searching
          }
        });
        //Push another league (with game) into leagues array
        if (obj === undefined) leagues.push(gamesByLeague)
      }

      dispatch({
        type: LIVE_GAMES,
        leagues: leagues
      });
    })
    .catch((error) => {
      console.error(error)
    })
}

export default getLiveGames