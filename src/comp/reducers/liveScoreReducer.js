import { LIVE_GAMES, LOADING } from '../actions/actionsType'
import { bool } from 'prop-types';
const initialState = {
    leagues: [],
    isLoading: bool
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LIVE_GAMES: {
            if (action.leagues[0] === undefined) {
                return {
                    ...state,
                    isLoading: false
                }
            }
            return {
                ...state,
                leagues: [...state.leagues, action.leagues[0]],
                isLoading: false
            }
        }
        default:
            return state;
    }
};