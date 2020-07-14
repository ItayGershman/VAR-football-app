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
  fetch(`http://var-football-prediction.herokuapp.com/routes/createRoom`, {
    method: 'POST',
    body: JSON.stringify({ roomCode, game }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: ROOM_CODE,
        roomCode
      });
    })
    .catch((e) => alert(`ERROR: ${e}`));
};

export const getGame = (roomCode) => async (dispatch) => {
  fetch(`http://var-football-prediction.herokuapp.com/routes/game/${roomCode}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((result) => {
      dispatch({
        type: ROOM_GAME,
        game: result
      });
    });
};

export const setUserData = (roomCode, userData, fullName) => async (dispatch) => {
  const newObj = {};
  //signup with newObj
  //signup(newObj) in server side
  userData.fullName = fullName;
  fetch(`http://var-football-prediction.herokuapp.com/routes/signup`, {
    method: 'POST',
    body: JSON.stringify({ roomCode, userData }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(() => {
      dispatch({
        type: USER_DATA,
        isSetResult: true
      });
    })
    .catch((e) => alert(`ERROR: ${e}`));
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
        .then((res) => {
          //check if user exist
          if (res) {
            dispatch({
              // Login
              type: LOGIN,
              isSetResult: true,
              isLoggedIn: true,
              fullName
            });
          } else {
            dispatch({
              // Save name and afterwards sign up
              type: LOGIN,
              isSetResult: false,
              isLoggedIn: true,
              fullName
            });
          }
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

export const getRoomData = (roomCode) => async (dispatch) => {
  fetch(`http://var-football-prediction.herokuapp.com/routes/room_data/${roomCode}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((json) => {
      const roomData = {
        game: json.game,
        userData: json.userData
      };
      dispatch({
        type: SET_ROOM_DATA,
        roomData
      });
    });
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
          // alert(`newObj data:${JSON.stringify(newObj)}`);
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
  fetch(`http://var-football-prediction.herokuapp.com/routes/room_data/${roomCode}`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then(async (result) => {
      if (result.match === undefined) {
        const match = {};
        for (let i = 0; i < gamesData.length; ++i) {
          if (
            result.matchString.includes(gamesData[i].home) &&
            result.matchString.includes(gamesData[i].away)
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
              .catch((e) => alert(e));
            return;
          }
        }
      } else {
        dispatch({
          type: GAME_DATA,
          gameData: result.match
        });
      }
    });
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
