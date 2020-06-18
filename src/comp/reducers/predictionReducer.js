import { ODDS, PREDICTION_LIVE_GAMES, PREDICTION_LEAGUES } from '../actions/actionsType'
import { number, string } from 'prop-types';

const initialState = {
    match: {
        home: string,
        away: string
    },
    advice: string,
    predictedScore: {
        goalsHome: number,
        goalsAway: number
    },
    winningPercent: {
        home: string,
        draws: string,
        away: string
    },
    h2hGames: {
        games:[]
    },
    leagues: [],
    gamesData: [],
    selectedGames: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ODDS: {
            console.log('ODDS')
            return {
                ...state,
                match: action.match,
                advice: action.advice,
                predictedScore: action.predictedScore,
                winningPercent: action.winningPercent,
                h2hGames: action.h2hGames
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