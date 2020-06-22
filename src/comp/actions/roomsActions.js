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

import { ROOM_DATA, ROOM_GAME, USER_DATA, LOGIN } from './actionsType';
import getCurrentDate from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';
const randomString = require('random-string');

export const setGame = (game) => async (dispatch) => {
    // alert(`game:${game}`)
    const roomCode = randomString()
    try {

        let jsonObj = {
            game: game
        }
        alert(JSON.stringify(jsonObj))
        await AsyncStorage.setItem(roomCode, JSON.stringify(jsonObj))

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
            .then((game) => {
                dispatch({
                    type: ROOM_GAME,
                    game: game
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
    // alert(nickname)
    let newObj = {}

    try {

        AsyncStorage.getItem(roomCode)
            .then(data => {
                alert(JSON.parse(data).game)
                newObj.game = JSON.parse(data).game
                alert(JSON.parse(data).nickname)
                if (JSON.parse(data).nickname === undefined) {
                    newObj.nickname = nickname
                    AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
                        .then(() => {
                            dispatch({
                                type: LOGIN,
                                isSetResult: false,
                                isLoggedIn: true
                            })
                        })
                        .catch(e => alert(e))
                }
                else {
                    dispatch({
                        type: LOGIN,
                        isSetResult: false,
                        isLoggedIn: true
                    })
                }

            })
            .catch(e => alert(e))

    } catch (error) {
        alert(`error:${error}`)
    }
}

    // try {
    //     let data = await AsyncStorage.getItem(roomCode)
    //     alert(JSON.parse(data).game)
    //     newObj.game = JSON.parse(data).game
    //     newObj.nickname = nickname
    // }
    // catch (err) {
    //     alert(err)
    // }
    // try {
    //     await AsyncStorage.setItem(roomCode, newObj)
    //     let result = await AsyncStorage.getItem(roomCode)
    //     alert(`result:${result}`)
    // }
    // catch (err) {
    //     alert(err)
    // }
    // dispatch({
    //     type: LOGIN,
    //     isSetResult: false,
    //     isLoggedIn: true
    // })