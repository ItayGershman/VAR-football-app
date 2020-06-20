import { ROOM_DATA } from '../actions/actionsType'

const initialState = {
    match: '',
    userData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ROOM_DATA: {
            console.log('ROOM_DATA')
            return {
                ...state,
            }
        }
        case ROOM_GAME: {
            console.log('ROOM_GAME')
            return {
                ...state,
                match: action.match
            }
        }
        case USER_DATA: {
            console.log('USER_DATA')
            return {
                ...state,
                userData: action.userData
            }
        }
        default:
            return state;
    }
};