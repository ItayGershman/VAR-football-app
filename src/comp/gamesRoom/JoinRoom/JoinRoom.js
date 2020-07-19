import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../JoinRoomStyle';
import PropTypes from 'prop-types';
import Header from '../../Header';
import DataContainerStyles from '../../../styles';
import Room from '../Room/Room';
import { getGame, login, gamePreview } from '../../actions/roomsActions';
import { connect } from 'react-redux';
import { OutlinedTextField } from 'react-native-material-textfield';
import JoinRoomResult from '../JoinRoomResult';
import JoinRoomGameData from '../JoinRoomGameData';
import Loader from '../../Loader';

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
  login,
  isLoading,
  gamePreview,
  gameData,
  gamesData,
  fullName
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
      {!isLoggedIn || !isSetResult ? (
        <View style={DataContainerStyles.dataContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <View>
              <Text style={styles.text}>Join Room</Text>
              <View style={styles.formContainer}>
                {gameData && <JoinRoomGameData />}
                {!isLoggedIn ? (
                  <View style={styles.nameStyleContainer}>
                    <OutlinedTextField
                      containerStyle={styles.nameStyle}
                      textColor={'rgb(255, 197, 66)'}
                      baseColor={'rgb(255, 197, 66)'}
                      tintColor={'rgb(255, 197, 66)'}
                      lineWidth={0}
                      activeLineWidth={0}
                      shadeOpacity={0.2}
                      label="Enter full name"
                      returnKeyType="go"
                      onSubmitEditing={(event) => {
                        login(roomCode, event.nativeEvent.text);
                      }}
                    />
                  </View>
                ) : (
                  !isSetResult && (
                    <JoinRoomResult roomCode={roomCode} userScore={userScore} fullName={fullName} />
                  )
                )}
              </View>
            </View>
          )}
        </View>
      ) : (
        <Room roomCode={roomCode} navigation={navigation} />
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
  login: PropTypes.func,
  gamePreview: PropTypes.func,
  gameData: PropTypes.object,
  gamesData: PropTypes.object,
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

export default connect(mapStateToProps, { getGame, login, gamePreview })(JoinRoom);
