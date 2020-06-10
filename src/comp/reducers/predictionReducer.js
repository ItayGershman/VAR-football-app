import { LIVE_GAMES, ODDS } from '../actions/actionsType'
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
    winningPercent: {
        home: string,
        draw: string,
        away: string
    }
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
                advice: action.advice.split("Winner :").pop()
            }
        }
        default:
            return state;
    }
};