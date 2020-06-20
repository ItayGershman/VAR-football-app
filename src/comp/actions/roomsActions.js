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

import { ROOM_DATA, ROOM_GAME, USER_DATA } from './actionsType';
import getCurrentDate from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';

export const setGame = (roomCode, match) => async (dispatch) => {
    try {
        // await AsyncStorage.setItem(roomCode, value)
        await AsyncStorage.mergeItem(roomCode, JSON.stringify({ match: match }))
        dispatch({
            type: ROOM_DATA,
        })
    } catch (e) {
        console.log(`Error${e}`)
    }
}

export const getGame = (roomCode) => async (dispatch) => {
    try {
        let roomData = await AsyncStorage.getItem(roomCode)
        console.log(JSON.stringify(roomData))
        dispatch({
            type: ROOM_GAME,
            match: roomData.match
        })
    } catch (error) {
        console.log(error)
    }
}

export const setUserData = (roomCode, userData) => async (dispatch) => {
    try {
        // await AsyncStorage.setItem(roomCode, value)
        await AsyncStorage.mergeItem(roomCode, JSON.stringify({ userData: userData }))
        dispatch({
            type: USER_DATA,
            userData: userData
        })
    } catch (e) {
        console.log(`Error${e}`)
    }
}

export const login = (roomCode, nickname) => async (dispatch) => {
    try {
        let data = await AsyncStorage.getItem(roomCode)
        console.log(data)
        //check if the nickname exist
    } catch (error) {
        console.log(error)
    }
}

