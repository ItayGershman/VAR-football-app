import { ODDS, PREDICTION_LIVE_GAMES, PREDICTION_LEAGUES } from '../actions/actionsType'
import { number, string } from 'prop-types';

const initialState = {
    odds: {
        homeOdds: number,
        drawOdds: number,
        awayOdds: number
    },
    match: {
        home: string,
        away: string
    },
    advice: string,
    predictedScore: {
        goalsHome: number,
        goalsAway: number
    },
    matchId: '',
    leagues: [],
    gamesData: [],
    selectedGames: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ODDS: {
            console.log('ODDS')
            // const newOdds = action.odds
            return {
                ...state,
                odds: action.odds,
                match: action.match,
                advice: action.advice
            }
        }
        case PREDICTION_LIVE_GAMES: {
            console.log("PREDICTION_LIVE_GAMES")
            //filter games by action.league
            const result = state.gamesData.filter((game) => game.leagueID == action.league)
            let matches = []
            for (let i = 0; i < result.length; ++i) {
                let match = {
                    value: `${result[i].home} vs ${result[i].away}`
                }
                matches.push(match)
            }
            return {
                ...state,
                selectedGames: matches
            }
        }
        case PREDICTION_LEAGUES: {
            console.log(PREDICTION_LEAGUES)
            console.log(action.leagues)//array of string of leagues country names
            //filter by league
            return {
                ...state,
                leagues: action.leagues,
                gamesData: action.gamesData,
            }
        }
        default:
            return state;
    }
};