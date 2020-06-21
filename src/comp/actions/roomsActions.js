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
const randomString = require('random-string');

export const setGame = (match) => async (dispatch) => {

    const roomCode = randomString()
    try {

        const jsonObj = JSON.stringify(match)
        await AsyncStorage.setItem(roomCode, jsonObj)

        dispatch({
            type: ROOM_DATA,
            roomCode: roomCode
        })
    } catch (e) {
        alert(`Error${e}`)
    }
}

export const getGame = (roomCode) => async (dispatch) => {
    
    try {
        // const roomData = await AsyncStorage.getItem(roomCode)
        // alert(`roomData:${roomData}`)

        AsyncStorage.getItem(roomCode)
            .then((match) => {
                dispatch({
                    type: ROOM_GAME,
                    match: match
                })
            })
            .catch(e => alert(e))

        // alert(`match:${roomData.match}`)

    } catch (error) {
        console.log(error)
    }
}

export const setUserData = (roomCode, userData) => async (dispatch) => {
    try {
        // await AsyncStorage.setItem(roomCode, value)
        await AsyncStorage.mergeItem(roomCode, JSON.stringify({ userData: userData }))
        alert(`roomCode - ${roomCode}`)
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
        //should check if this user already exist, if he/she exists check if there is a result
        //check if the nickname exist
        /*
        dispatch({
            type:LOGIN,
            //isSetResult:true,
            isLoggedIn:true
        })
        */
    } catch (error) {
        console.log(error)
    }
}

