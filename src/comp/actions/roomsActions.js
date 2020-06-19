            /**
 * value should be {
 *      roomCode:roomCode,
 *      participants:[{
 *          nickname:israel israeli,
 *          result: '3-1',
 *          points: 0
 *      },{
 *          nickname:israel israeli,
 *          result: '3-1'
 *      }
 * ]
 * }
 */

import { ROOM_DATA } from './actionsType';
import getCurrentDate from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';

export const setRoomData = () => async (dispatch)=>{

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem(roomCode, value)
        } catch (e) {
            // saving error
        }
    }

    dispatch({
        type:ROOM_DATA
    })
}

