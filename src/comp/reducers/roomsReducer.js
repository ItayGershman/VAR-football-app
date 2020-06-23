import { ROOM_CODE, ROOM_GAME, USER_DATA, LOGIN, SET_ROOM_DATA } from '../actions/actionsType'

const initialState = {
    game: '',
    userData: {},
    roomCode: '',
    isLoggedIn: false,
    isSetResult: false,
    roomData: {},
    roomDataUsers: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ROOM_CODE: {
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
                game: action.game
            }
        }
        case USER_DATA: {
            console.log('USER_DATA')
            return {
                ...state,
                isSetResult: action.isSetResult
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
        case SET_ROOM_DATA: {
            console.log('SET_ROOM_DATA')
            return {
                ...state,
                roomData: action.roomData,
                roomDataUsers: action.roomData.userData
            }
        }
        default:
            return state;
    }
};