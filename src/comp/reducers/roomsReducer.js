import { ROOM_DATA } from '../actions/actionsType'

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case ROOM_DATA: {
            console.log('ROOM_DATA')
            //Ill make get request from AsyncStorage
            return {
                ...state,

            }
        }
        default:
            return state;
    }
};