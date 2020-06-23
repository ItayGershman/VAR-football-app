/**
* value should be {
*      roomCode:roomCode,
*      participants:[{
*          fullName:israel israeli,
*          result: '3-1',
*          points: 0
*      },{
*          fullName:israel israeli,
*          result: '3-1'
*      }
* ]
* }
*/

import { ROOM_CODE, ROOM_GAME, USER_DATA, LOGIN, SET_ROOM_DATA } from './actionsType';
import getCurrentDate from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';
const randomString = require('random-string');

export const setGame = (game) => async (dispatch) => {
    const roomCode = randomString()
    try {
        let jsonObj = {
            game: game
        }
        await AsyncStorage.setItem(roomCode, JSON.stringify(jsonObj))

        dispatch({
            type: ROOM_CODE,
            roomCode: roomCode
        })
    } catch (e) {
        alert(`Error${e}`)
    }
}

export const getGame = (roomCode) => async (dispatch) => {
    try {
        AsyncStorage.getItem(roomCode)
            .then((data) => {
                dispatch({
                    type: ROOM_GAME,
                    game: JSON.parse(data).game
                })
            })
            .catch(e => alert(e))
    } catch (error) {
        console.log(error)
    }
}

export const setUserData = (roomCode, userData) => async (dispatch) => {
    let newObj = {}
    try {
        AsyncStorage.getItem(roomCode)
            .then(data => {
                alert(`data:${data}`)
                newObj = JSON.parse(data)
                // newObj.game = data.game
                // newObj.fullName = data.fullName
                userData.fullName = newObj.fullName
                if (newObj.userData === undefined) {
                    newObj.userData = []
                }
                alert(JSON.stringify(newObj.userData[0]))
                newObj.userData.push(userData)
                // newObj.userData = [...newObj.userData, userData]
                alert(`newObj:${JSON.stringify(newObj)}`)
                AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
                    .then(() => {
                        dispatch({
                            type: USER_DATA,
                            isSetResult: true,
                        })
                    })
                    .catch(e => alert(e))

            })
            .catch(e => alert(e))

    } catch (error) {
        alert(`error:${error}`)
    }
}

export const login = (roomCode, fullName) => async (dispatch) => {
    let newObj = {}
    try {
        AsyncStorage.getItem(roomCode)
            .then(data => {
                alert(data.userData)

                newObj = JSON.parse(data)
                if (newObj.userData !== undefined) {
                    for (let i = 0; i < newObj.userData.length; ++i) {
                        if (fullName === newObj.userData[i].fullName) {
                            alert("yes!")
                            dispatch({
                                type: LOGIN,
                                isSetResult: true,
                                isLoggedIn: true
                            })
                            return
                        }
                    }
                }
                newObj.fullName = fullName
                AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
                    .then(() => {
                        dispatch({
                            type: LOGIN,
                            isSetResult: false,
                            isLoggedIn: true
                        })
                    })
                    .catch(e => alert(e))

                // }
                // else {
                //     dispatch({
                //         type: LOGIN,
                //         isSetResult: false,
                //         isLoggedIn: true
                //     })
                // }
            })
            .catch(e => alert(e))

    } catch (error) {
        alert(`error:${error}`)
    }
}

export const getRoomData = (roomCode) => async (dispatch) => {
    try {
        let data = await AsyncStorage.getItem(roomCode)

        dispatch({
            type: SET_ROOM_DATA,
            roomData: JSON.parse(data)
        })
    }
    catch (err) {
        alert(err)
    }
}