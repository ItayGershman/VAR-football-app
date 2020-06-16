import { ODDS, PREDICTION_LIVE_GAMES } from '../actions/actionsType'
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
    leagues: [],//[{league:'league name',games:{}},{}]
    games: []
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
            
            return {
                ...state,
                // leagues: action.leagues,
                // games: action.games
            }
        }
        case PREDICTION_LEAGUES: {
            console.log(PREDICTION_LEAGUES)
            console.log(action.leagues)//array of string of leagues country names
            return {
                ...state,
                leagues: action.leagues
            }
        }
        default:
            return state;
    }
};