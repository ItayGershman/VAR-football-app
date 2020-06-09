import { LIVE_GAMES,ODDS } from '../actions/actionsType'
import { number } from 'prop-types';

const initialState = {
    odds: {
        homeOdds: number,
        drawOdds: number,
        awayOdds: number
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ODDS: {
            console.log('ODDS')
            const newOdds = action.odds
            return {
                ...state,
                odds:newOdds
            }
        }
        default:
            return state;
    }
};