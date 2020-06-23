import { ODDS, PREDICTION_LIVE_GAMES, PREDICTION_LEAGUES, LOADING } from './actionsType';
import { API_KEY, API_HOST } from 'react-native-dotenv'
import getCurrentDate from '../../constants'

const getFixtureID = (match, gamesData) => {
    // let fixture_id = ''
    for (let i = 0; i < gamesData.length; ++i) {
        if (~match.indexOf(gamesData[i].home.toString())) { //Search for home team
            if (~match.indexOf(gamesData[i].away.toString())) { //Search for away tem
                return gamesData[i].fixtureID
            }
        }
    }
    return
}

export const getOdds = (match, gamesData) => async (dispatch) => {
    //find from match the fixture_id
    dispatch({ type: LOADING })
    let fixture_id = getFixtureID(match, gamesData)
    let logos = getTeamsLogo(fixture_id)
    fetch(`https://api-football-v1.p.rapidapi.com/v2/predictions/${fixture_id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    })

        .then((response) => response.json())
        .then((data) => {
            const prediction = organizeData(data, logos)
            dispatch({
                type: ODDS,
                match: prediction.matchTeams,
                advice: prediction.advice,
                predictedScore: prediction.score,
                winningPercent: prediction.winningPercent,
                h2hGames: prediction.h2hGames,
            });
        })
        .catch((error) => {
            console.error(`error:${error}`)
        })
}

const organizeData = (data, logos) => {
    let prediction = {
        matchTeams: {},
        advice: '',
        score: {},
        winningPercent: {},
        h2hGames: {}
    }
    const matchTeams = {
        home: data.api.predictions[0].teams.home.team_name,
        homeLogo: logos.homeLogo,
        away: data.api.predictions[0].teams.away.team_name,
        awayLogo: logos.awayLogo
    }
    const predictedScore = {
        home: Math.round(data.api.predictions[0].goals_home * -1),
        away: Math.round(data.api.predictions[0].goals_away * -1)
    }
    const winPercent = {
        home: data.api.predictions[0].winning_percent.home,
        draw: data.api.predictions[0].winning_percent.draws,
        away: data.api.predictions[0].winning_percent.away,
    }
    const advice = data.api.predictions[0].advice
    const h2h = {
        games: []
    }
    const lastGames = data.api.predictions[0].h2h.length
    if (lastGames > 5) {
        for (let i = lastGames - 5; i < lastGames; ++i) {
            let matchDetails = {
                home: data.api.predictions[0].h2h[i].homeTeam.team_name,
                away: data.api.predictions[0].h2h[i].awayTeam.team_name,
                score: data.api.predictions[0].h2h[i].score.fulltime
            }
            h2h.games.push(matchDetails)
        }
        h2h.games.reverse()
    }
    else {
        for (let i = 0; i < lastGames; ++i) {
            let matchDetails = {
                home: data.api.predictions[0].h2h[i].homeTeam.team_name,
                away: data.api.predictions[0].h2h[i].awayTeam.team_name,
                score: data.api.predictions[0].h2h[i].score.fulltime
            }
            h2h.games.push(matchDetails)

        }
        h2h.games.reverse()
    }

    prediction.matchTeams = matchTeams
    prediction.advice = advice
    prediction.score = predictedScore
    prediction.winningPercent = winPercent
    prediction.h2hGames = h2h
    return prediction
}

const getTeamsLogo = (fixture_id) => {
    let teamsLogo = {}
    fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${fixture_id}?timezone=Asia/Jerusalem`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            teamsLogo.homeLogo = data.api.fixtures[0].homeTeam.logo,
                teamsLogo.awayLogo = data.api.fixtures[0].awayTeam.logo
        })
        .catch((error) => {
            console.error(`error:${error}`)
            return 'No logos for this teams'
        })
    return teamsLogo
}


export const getLiveGames = (league) => async (dispatch) => {
    let leagueId = ''
    switch (league) {
        case 'Spain': leagueId = 775; break;
        case 'England': leagueId = 524; break;
        case 'Italy': leagueId = 891; break;
        case 'Israel': leagueId = 637; break;
        case 'French': leagueId = 525; break;
        case 'Germen': leagueId = 754; break;
        default: break;
    }
    dispatch({
        type: PREDICTION_LIVE_GAMES,
        league: leagueId,
    })

}


export const getLeagues = () => async (dispatch) => {
    const date = getCurrentDate()
    fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}?timezone=Asia/Jerusalem`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('SuccessDate:', data);
            let leaguesId = [775, 524, 891, 637, 525, 754]
            let leagues = []
            let gamesData = []
            for (let i = 0; i < data.api.fixtures.length; ++i) {
                if (leaguesId.includes(data.api.fixtures[i].league_id)) {
                    console.log(`league no.${JSON.stringify(data.api.fixtures[i].league_id)}`)
                    let leagueName = ''
                    switch (JSON.stringify(data.api.fixtures[i].league_id)) {
                        case '775': leagueName = 'Spain'; break;
                        case '524': leagueName = 'England'; break;
                        case '891': leagueName = 'Italy'; break;
                        case '637': leagueName = 'Israel'; break;
                        case '525': leagueName = 'French'; break;
                        case '754': leagueName = 'Germen'; break;
                        default:
                            break;
                    }
                    leagues.push(leagueName)
                    //finish get leagues name
                    let match = {}
                    match.home = data.api.fixtures[i].awayTeam.team_name
                    match.away = data.api.fixtures[i].homeTeam.team_name
                    match.leagueID = data.api.fixtures[i].league_id
                    match.minute = data.api.fixtures[i].elapsed
                    match.date = data.api.fixtures[i].event_date.substring(11, 16)
                    match.goalsAway = data.api.fixtures[i].goalsAwayTeam
                    match.goalsHome = data.api.fixtures[i].goalsHomeTeam
                    match.fulltime = data.api.fixtures[i].score.fulltime
                    match.fixtureID = data.api.fixtures[i].fixture_id
                    gamesData.push(match)
                }
            }

            let uniqueLeagues = [...new Set(leagues)];
            console.log(uniqueLeagues);
            console.log(`leagues:${uniqueLeagues}`);//contains only leagues from the leagues array
            for (let i = 0; i < uniqueLeagues.length; ++i) {
                let leagueObj = {
                    value: uniqueLeagues[i]
                }
                uniqueLeagues[i] = leagueObj
            }
            console.log(`leagues:${JSON.stringify(uniqueLeagues)}`);//contains only leagues from the leagues array
            console.log(`gamesData:${JSON.stringify(gamesData)}`)
            dispatch({
                type: PREDICTION_LEAGUES,
                leagues: uniqueLeagues,
                gamesData: gamesData,
            })
        })
}

// const getGamesByLeague = (dispatch, leaguedID) => {
//     const date = getCurrentDate();
//     fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leaguedID}/${date}?timezone=Asia/Jerusalem`, { //All league games by round
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": API_HOST,
//             "x-rapidapi-key": API_KEY
//         }
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Success:', data);
//             let leagues = organizeMatchByLeague(data)
//             const games = []

//             for (let i = 0; i < leagues[0].games.length; ++i) {
//                 let home = leagues[0].games[i].matchHome.team_name
//                 let away = leagues[0].games[i].matchAway.team_name
//                 let match = {
//                     value: `${home}-${away}`
//                 }

//                 games.push(match)
//             }
//             dispatch({
//                 type: PREDICTION_LIVE_GAMES,
//                 leagues: leagues,
//                 games: games
//             });
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }


const organizeMatchByLeague = (data) => {
    let leagues = []
    for (let i = 0; i < data.api.fixtures.length; ++i) {
        let match = {}
        const fixture = data.api.fixtures[i]
        match.matchLeague = fixture.league.country
        match.leagueFlag = fixture.league.flag
        match.matchHome = fixture.homeTeam
        match.matchAway = fixture.awayTeam
        match.minute = fixture.elapsed
        match.goalsAwayTeam = fixture.goalsAwayTeam
        match.goalsHomeTeam = fixture.goalsHomeTeam
        match.gameTime = fixture.event_date.substring(11, 16)
        match.id = fixture.fixture_id

        const gamesByLeague = {
            league: fixture.league.name,
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
    return leagues
}
