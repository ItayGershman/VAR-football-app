import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import Header from '../Header';
import Room from './Room';
import { getGame, setUserData, login, gamePreview } from '../actions/roomsActions';
import { connect } from 'react-redux';
import Loader from '../Loader';
import JoinRoomLogin from './JoinRoomLogin';
import JoinRoomResult from './JoinRoomResult';

const score = [];
for (let i = 0; i < 10; ++i) {
  const num = {
    value: i
  };
  score.push(num);
}

const JoinRoom = ({
  route,
  navigation,
  isSetResult,
  isLoggedIn,
  gamePreview,
  gamesData,
  fullName,
  isLoading
}) => {
  const { roomCode } = route.params;
  useEffect(() => {
    gamePreview(roomCode, gamesData);
  }, []);
  const userScore = {
    home: -1,
    away: -1,
    points: 0
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          {!isLoggedIn ? (
            <JoinRoomLogin roomCode={roomCode} />
          ) : !isSetResult ? (
            <JoinRoomResult roomCode={roomCode} userScore={userScore} fullName={fullName} />
          ) : (
            <Room roomCode={roomCode} navigation={navigation} />
          )}
        </View>
      )}
    </View>
  );
};

JoinRoom.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  roomCode: PropTypes.string,
  isSetResult: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  gamePreview: PropTypes.func,
  gamesData: PropTypes.array,
  fullName: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    game: rooms.game,
    isSetResult: rooms.isSetResult,
    isLoggedIn: rooms.isLoggedIn,
    gameData: rooms.gameData,
    gamesData: prediction.gamesData,
    fullName: rooms.fullName,
    isLoading: rooms.isLoading
  };
};

export default connect(mapStateToProps, {
  getGame,
  setUserData,
  login,
  gamePreview
})(JoinRoom);
