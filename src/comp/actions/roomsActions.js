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

import { ROOM_CODE, ROOM_GAME, USER_DATA, LOGIN, SET_ROOM_DATA, SET_POINTS, GAME_DATA, CLEAN_STATE } from './actionsType';
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
        console.log(`Error${e}`)
    }
}

export const getGame = (roomCode) => async (dispatch) => {
    AsyncStorage.getItem(roomCode)
        .then((data) => {
            dispatch({
                type: ROOM_GAME,
                game: JSON.parse(data).game
            })
        })
        .catch(e => console.log(e))
}


export const setUserData = (roomCode, userData) => async (dispatch) => {
    let newObj = {}
    AsyncStorage.getItem(roomCode)
        .then(data => {
            newObj = JSON.parse(data)
            userData.fullName = newObj.fullName
            if (newObj.userData === undefined) {
                newObj.userData = []
            }
            newObj.userData.push(userData)
            AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
                .then(() => {
                    dispatch({
                        type: USER_DATA,
                        isSetResult: true,
                    })
                })
                .catch(e => console.log(e))

        })
        .catch(e => console.log(e))
}

export const login = (roomCode, fullName) => async (dispatch) => {
    let newObj = {}
    AsyncStorage.getItem(roomCode)
        .then(data => {

            newObj = JSON.parse(data)
            if (newObj.userData !== undefined) {
                for (let i = 0; i < newObj.userData.length; ++i) {
                    if (fullName === newObj.userData[i].fullName) {
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
                .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
}

export const getRoomData = (roomCode) => async (dispatch) => {
    let data = await AsyncStorage.getItem(roomCode)
    dispatch({
        type: SET_ROOM_DATA,
        roomData: JSON.parse(data)
    })
}

export const setPoints = (roomCode, match, gamesData) => async (dispatch) => {
    alert(JSON.stringify(gamesData))
    AsyncStorage.getItem(roomCode)
        .then(data => {
            let newObj = {}
            newObj = JSON.parse(data)
            for (let i = 0; i < gamesData.length; ++i) {
                if (match.includes(gamesData[i].home) && match.includes(gamesData[i].away)) {
                    if (gamesData[i].fulltime !== null) {
                        for (let j = 0; j < JSON.parse(data).userData.length; ++i) {
                            let pointsReceived = 0
                            if (newObj.userData[i].home === gamesData[i].goalsHome && newObj.userData[i].away === gamesData[i].goalsAway) {//user got the result
                                alert(`${newObj.userData[i].fullName} receive 3 point`)
                                pointsReceived = 3
                            }
                            else if (newObj.userData[i].home > newObj.userData[i].away && gamesData[i].goalsHome > gamesData[i].goalsAway) {//user got the winner
                                // alert(`Home won - ${newObj.userData[i].fullName} receive 1 point`)
                                pointsReceived = 1
                            }//Home wins
                            else if (newObj.userData[i].away > newObj.userData[i].home && gamesData[i].goalsAway > gamesData[i].goalsHome) {//user got the winner
                                // alert(`Away won - ${newObj.userData[i].fullName} receive 1 point`)
                                pointsReceived = 1
                            }//Away wins
                            else if (newObj.userData[i].away === newObj.userData[i].home && gamesData[i].goalsAway === gamesData[i].goalsHome) {//user got the draw
                                alert(`Draw - ${newObj.userData[i].fullName} receive 1 point`)
                                pointsReceived = 1
                            }//Draw
                            else {
                                // alert(`You don't deserve any points`)
                                pointsReceived = 0
                            }
                            newObj.userData[i].points = pointsReceived
                        }
                    }
                    dispatch({
                        type: SET_POINTS,
                        setPoints: true
                    })
                    return//found 1 match
                }
            }
            dispatch({
                type: SET_POINTS,
                setPoints: false
            })

        })
        .catch(e => console.log(e))
}

export const gamePreview = (roomCode, gamesData) => async (dispatch) => {
    AsyncStorage.getItem(roomCode)
        .then((data) => {
            let newObj = {}
            for (let i = 0; i < gamesData.length; ++i) {
                if (JSON.parse(data).game.includes(gamesData[i].home) && JSON.parse(data).game.includes(gamesData[i].away)) {
                    newObj.home = gamesData[i].home
                    newObj.away = gamesData[i].away
                    newObj.minute = gamesData[i].minute
                    newObj.goalsHome = gamesData[i].goalsHome
                    newObj.goalsAway = gamesData[i].goalsAway
                    dispatch({
                        type: GAME_DATA,
                        gameData: newObj
                    })
                    return
                }
            }
        })
        .catch(e => console.log(e))
}

export const cleanState = () => (dispatch) => {
    dispatch({
        type: CLEAN_STATE
    })
}