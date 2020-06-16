import { ODDS, PREDICTION_LIVE_GAMES } from './actionsType';
import { API_KEY, API_HOST } from 'react-native-dotenv'
export const getOdds = (fixture_id) => async (dispatch) => {
    console.log(fixture_id)

    let odds = {
        odds: {},
        fixture_id: ''
    }
    let prediction = {
        matchTeams: {},
        advice: '',
        score: {},
    }
    // fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/league/754/2020-06-15?timezone=Asia/Jerusalem`, {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${fixture_id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            /*
                url:https://api-football-v1.p.rapidapi.com/v2/odds/date/{yyyy-mm-dd} - By date
                url: https://api-football-v1.p.rapidapi.com/v2/odds/league/{league_id}/label/{label_id} - by label_id
                get odds
            */
            // right now it doesnt get the right match...
            const oddsObj = {
                homeODDS: data.api.odds[0].bookmakers[0].bets[0].values[0].odd,
                drawODDS: data.api.odds[0].bookmakers[0].bets[0].values[1].odd,
                awayODDS: data.api.odds[0].bookmakers[0].bets[0].values[2].odd
            }
            const fixture_id = fixture_id

            // const oddsObj = {
            //     homeODDS: 2.20,
            //     drawODDS: 2.70,
            //     awayODDS: 3.20
            // }
            // const fixture_id = 123456

            odds.odds = oddsObj
            odds.fixture_id = fixture_id
            // fetch(`https://api-football-v1.p.rapidapi.com/v2/predictions/${odds.fixture_id}`, {
            fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/209189`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
                }
            })

                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    /*
                        !!!! 
                        Different call
                        url: https://api-football-v1.p.rapidapi.com/v2/predictions/{fixture_id}
                        prediction winner and result
                        data.api.predictions[i].advice = 'Parise Saint Germain'
                        data.api.predictions[i].teams.home.team_name = 'Parise Saint Germain'
                        data.api.predictions[i].teams.away.team_name = 'strasburg'
                        data.api.predictions[i].h2h[0...n].awayTeam.team_name = 'Paris Saint Germain'
                        data.api.predictions[i].goals_home = "-3.5"
                        data.api.predictions[i].goals_away = "-1.5"
                        Math.round(data.api.predictions[i].goals_away * -1) -> 2
                        Math.round(data.api.predictions[i].goals_home * -1) -> 4
                    */

                    const matchTeams = {
                        home: data.api.predictions[0].teams.home.team_name,
                        away: data.api.predictions[0].teams.away.team_name
                    }
                    const advice = data.api.predictions[0].advice
                    const predictedScore = {
                        home: Math.round(data.api.predictions[0].goals_home * -1),
                        away: Math.round(data.api.predictions[0].goals_away * -1)
                    }
                    prediction.matchTeams = matchTeams
                    prediction.advice = advice
                    prediction.score = predictedScore
                    console.log(`prediction:${JSON.stringify(prediction)}`)
                })
        })
        .catch((error) => {
            console.error(`error:${error}`)
        })
        
    dispatch({
        type: ODDS,
        odds: odds.odds,
        match: prediction.matchTeams,
        advice: prediction.advice,
        predictedScore: prediction.score,
    });
}

export const getMatchId = (query) => async (dispatch) => {
    console.log(query)

}

export const getLiveGames = (league) => async (dispatch) => {
    //league = 'English'/'Spain' etc.
    const date = getCurrentDate();
    let leagueId = '0'
    switch (league) {
        case 'Spain': leagueId = '775'; break;
        case 'Primera Division': leagueId = '524'; break;
        case 'Italy': leagueId = '891'; break;
        case 'Israel': leagueId = '637'; break;
        case 'French': leagueId = '525'; break;
        case 'Germen': leagueId = '754'; break;
        default: break;
    }
    //get all matches from specific league in specific date with israel timezone
    fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}/${date}?timezone=Asia/Jerusalem`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

            /**
             * dispatch(()=>{
             * type: PREDICTION_LIVE_GAMES,
             * data...
             * })
             */
        })
        .catch(e => alert(e))
}

const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = today.getFullYear();
    today = year + '-' + day + '-' + month
    return today
}