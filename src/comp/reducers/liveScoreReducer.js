import { LIVE_GAMES } from '../actions/actionsType'

const initialState = {
    leagues: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LIVE_GAMES: {
            if (action.leagues[0] === undefined) {
                return {
                    ...state,
                }
            }
            return {
                ...state,
                leagues: [...state.leagues, action.leagues[0]],
            }
        }
        default:
            return state;
    }
};