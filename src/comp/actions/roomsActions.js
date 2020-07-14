import {
  ROOM_CODE,
  ROOM_GAME,
  USER_DATA,
  LOGIN,
  SET_ROOM_DATA,
  SET_POINTS,
  GAME_DATA,
  CLEAN_STATE
} from './actionsType';
import AsyncStorage from '@react-native-community/async-storage';
import { API_KEY, API_HOST } from 'react-native-dotenv';
const randomString = require('random-string');

export const setGame = (game) => async (dispatch) => {
  const roomCode = randomString();
  try {
    const jsonObj = {
      game
    };
    await AsyncStorage.setItem(roomCode, JSON.stringify(jsonObj));
    dispatch({
      type: ROOM_CODE,
      roomCode
    });
  } catch (e) {
    console.log(`Error${e}`);
  }
};

export const getGame = (roomCode) => async (dispatch) => {
  AsyncStorage.getItem(roomCode)
    .then((data) => {
      dispatch({
        type: ROOM_GAME,
        game: JSON.parse(data).game
      });
    })
    .catch((e) => console.log(e));
};

export const setUserData = (roomCode, userData) => async (dispatch) => {
  let newObj = {};
  AsyncStorage.getItem(roomCode)
    .then((data) => {
      newObj = JSON.parse(data);
      userData.fullName = newObj.fullName;
      if (newObj.userData === undefined) {
        newObj.userData = [];
      }
      newObj.userData.push(userData);

      alert(`setUserData newObj:${newObj}`);
      //signup with newObj
      //signup(newObj) in server side

      AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
        .then(() => {
          dispatch({
            type: USER_DATA,
            isSetResult: true
          });
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

export const login = (roomCode, fullName) => async (dispatch) => {
  let newObj = {};

  AsyncStorage.getItem(roomCode)
    .then((data) => {
      newObj = JSON.parse(data);
      fetch(`http://var-football-prediction.herokuapp.com/routes/login`, {
        method: 'POST',
        body: JSON.stringify({ roomCode, fullName }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          alert(json);
          dispatch({
            type: LOGIN,
            isSetResult: true,
            isLoggedIn: true
          });
        })
        .catch((e) => console.log(e));
      /*
      if (newObj.userData !== undefined) {
        for (let i = 0; i < newObj.userData.length; ++i) {
          if (fullName === newObj.userData[i].fullName) {
            dispatch({
              type: LOGIN,
              isSetResult: true,
              isLoggedIn: true
            });
            return;
          }
        }
      }
      */
      newObj.fullName = fullName;
      AsyncStorage.setItem(roomCode, JSON.stringify(newObj))
        .then(() => {
          dispatch({
            type: LOGIN,
            isSetResult: false,
            isLoggedIn: true
          });
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

export const getRoomData = (roomCode) => async (dispatch) => {
  let data = await AsyncStorage.getItem(roomCode);
  data = JSON.parse(data);
  const post_data = {
    method: 'POST',
    body: JSON.stringify({
      game: data.game,
      userData: data.userData,
      roomCode
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  fetch(`http://var-football-prediction.herokuapp.com/routes/room_data`, post_data)
    .then((response) => response.json())
    .then((json) => {
      const roomData = {
        game: json.game,
        userData: json.userData
      };
      dispatch({
        type: SET_ROOM_DATA,
        roomData
      });
    })
    .catch((e) => console.log(e));
};

export const setPoints = (roomCode, match, gamesData) => async (dispatch) => {
  //insert user points into DB
  AsyncStorage.getItem(roomCode)
    .then((data) => {
      let newObj = {};
      newObj = JSON.parse(data);
      for (let i = 0; i < gamesData.length; ++i) {
        if (match.includes(gamesData[i].home) && match.includes(gamesData[i].away)) {
          if (gamesData[i].fulltime !== null) {
            for (let j = 0; j < JSON.parse(data).userData.length; ++i) {
              let pointsReceived = 0;
              if (
                newObj.userData[i].home === gamesData[i].goalsHome &&
                newObj.userData[i].away === gamesData[i].goalsAway
              ) {
                //user got the result
                pointsReceived = 3;
              } else if (
                newObj.userData[i].home > newObj.userData[i].away &&
                gamesData[i].goalsHome > gamesData[i].goalsAway
              ) {
                pointsReceived = 1;
              } else if (
                newObj.userData[i].away > newObj.userData[i].home &&
                gamesData[i].goalsAway > gamesData[i].goalsHome
              ) {
                pointsReceived = 1;
              } else if (
                newObj.userData[i].away === newObj.userData[i].home &&
                gamesData[i].goalsAway === gamesData[i].goalsHome
              ) {
                pointsReceived = 1;
              } else {
                pointsReceived = 0;
              }
              newObj.userData[i].points = pointsReceived;
            }
          }
          alert(`newObj data:${JSON.stringify(newObj)}`);
          //insert newObj to DB
          dispatch({
            type: SET_POINTS,
            setPoints: true
          });
          return;
        }
      }
      dispatch({
        type: SET_POINTS,
        setPoints: false
      });
    })
    .catch((e) => console.log(e));
};

export const gamePreview = (roomCode, gamesData) => async (dispatch) => {
  //Instead of get roomCode with AsyncStorage - we need to get it from mongo
  AsyncStorage.getItem(roomCode)
    .then(async (data) => {
      const match = {};
      for (let i = 0; i < gamesData.length; ++i) {
        if (
          JSON.parse(data).game.includes(gamesData[i].home) &&
          JSON.parse(data).game.includes(gamesData[i].away)
        ) {
          const logos = await getTeamsLogo(gamesData[i].fixtureID);
          match.home = gamesData[i].home;
          match.homeLogo = logos.homeLogo;
          match.away = gamesData[i].away;
          match.awayLogo = logos.awayLogo;
          match.minute = gamesData[i].minute;
          match.goalsHome = gamesData[i].goalsHome;
          match.goalsAway = gamesData[i].goalsAway;
          match.gameTime = gamesData[i].date;

          //insert match gameData into DB
          fetch(`http://var-football-prediction.herokuapp.com/routes/game_preview`, {
            method: 'POST',
            body: JSON.stringify({ match, roomCode }),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then((response) => response.json())
            .then(() => {
              dispatch({
                type: GAME_DATA,
                gameData: match
              });
            })
            .catch((e) => console.log(e));
          return;
        }
      }
    })
    .catch((e) => console.log(e));
};

export const cleanState = () => (dispatch) => {
  dispatch({
    type: CLEAN_STATE
  });
};

const getTeamsLogo = (fixture_id) => {
  const teamsLogo = {};
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${fixture_id}?timezone=Asia/Jerusalem`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {
      teamsLogo.homeLogo = data.api.fixtures[0].homeTeam.logo;
      teamsLogo.awayLogo = data.api.fixtures[0].awayTeam.logo;
      return teamsLogo;
    })
    .catch((error) => {
      console.error(`error:${error}`);
      return 'No logos for this teams';
    });
};