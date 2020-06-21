import { ROOM_DATA, ROOM_GAME, USER_DATA, LOGIN } from '../actions/actionsType'

const initialState = {
    match: '',
    userData: {},
    roomCode: '',
    isLoggedIn: false,
    isSetResult: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ROOM_DATA: {
            console.log('ROOM_DATA')
            return {
                ...state,
                roomCode: action.roomCode
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
        case LOGIN: {
            console.log('isLoggedIn')
            return {
                ...state,
                isSetResult: action.isSetResult,
                isLoggedIn: action.isLoggedIn
            }
        }
        default:
            return state;
    }
};