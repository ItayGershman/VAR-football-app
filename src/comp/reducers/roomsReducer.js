import { ROOM_CODE, ROOM_GAME, USER_DATA, LOGIN, SET_ROOM_DATA, SET_POINTS, GAME_DATA, CLEAN_STATE } from '../actions/actionsType'

const initialState = {
    game: '',
    userData: {},
    roomCode: '',
    isLoggedIn: false,
    isSetResult: false,
    roomData: {},
    roomDataUsers: [],
    setPoints: false,
    gameData: {}
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
        case SET_POINTS: {
            alert(`SET_POINTS - ${action.setPoints}`)
            return {
                ...state,
                setPoints: action.points
            }
        }
        case GAME_DATA: {
            return {
                ...state,
                gameData: action.gameData
            }
        }
        case CLEAN_STATE: {
            return {
                ...state,
                roomData: [],
                roomDataUsers: [],
                isLoggedIn: false,
                isSetResult: false
            }
        }
        default:
            return state;
    }
};