import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles';
import Form from 'react-native-form';
import Room from './Room';
import { Dropdown } from 'react-native-material-dropdown';
import { getGame, setUserData, login, gamePreview } from '../actions/roomsActions';
import { connect } from 'react-redux';
import { OutlinedTextField } from 'react-native-material-textfield';
import Image from 'react-native-remote-svg';

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
  setUserData,
  gamePreview,
  gameData,
  gamesData
}) => {
  const { roomCode } = route.params;
  useEffect(() => {
    gamePreview(roomCode, gamesData);
  }, []);
  const userScore = {
    home: 0,
    away: 0,
    points: 0
  };
  const [inputScoreHome, setInputScoreHome] = useState(false);
  const [inputScoreAway, setInputScoreAway] = useState(false);

  const homeScore = (inputScoreHome) => {
    setInputScoreHome(!inputScoreHome);
  };
  const awayScore = (inputScoreAway) => {
    setInputScoreAway(!inputScoreAway);
    userScore.away = awayResult;
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {!isLoggedIn ? (
        <View style={DataContainerStyles.dataContainer}>
          <View>
            <Text style={styles.text}>Join Room</Text>
            <View style={styles.formContainer}>
              {gameData !== undefined && (
                <View style={styles.matchView}>
                  <View style={styles.minuteContainer}>
                    {gameData.minute === 0 ? (
                      <Text style={styles.minute}>{gameData.gameTime}</Text>
                    ) : (
                        <Text style={styles.minute}>{gameData.minute}</Text>
                      )}
                  </View>
                  <View style={styles.matchRow}>
                    <Image style={styles.teamLogo} source={{ uri: gameData.awayLogo }} />
                    <Text style={styles.teamName}>{gameData.home}</Text>
                    <Text style={styles.scoreJoin}>
                      {gameData.goalsHome}
                      {gameData.minute === 0 ? 'VS' : '-'}
                      {gameData.goalsAway}
                    </Text>
                    <Text style={styles.teamName}>{gameData.away}</Text>
                    <Image style={styles.teamLogo} source={{ uri: gameData.homeLogo }} />
                  </View>
                </View>
              )}
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
            </View>
          </View>
        </View>
      ) : !isSetResult ? (
        <View style={DataContainerStyles.dataContainer}>
          <View style={styles.inputResultContainer}>
            <Text style={styles.joinText}>Your Result</Text>
            <View style={styles.matchView}>
              <View style={styles.minuteContainer}>
                {gameData.minute === 0 ? (
                  <Text style={styles.minute}>{gameData.gameTime}</Text>
                ) : (
                    <Text style={styles.minute}>{gameData.minute}</Text>
                  )}
              </View>
              <View style={styles.matchRow}>
                <Image style={styles.teamLogo} source={{ uri: gameData.awayLogo }} />
                <Text style={styles.teamName}>{gameData.home}</Text>
                <Text style={styles.scoreJoin}>
                  {gameData.goalsHome}
                  {gameData.minute === 0 ? 'VS' : '-'}
                  {gameData.goalsAway}
                </Text>
                <Text style={styles.teamName}>{gameData.away}</Text>
                <Image style={styles.teamLogo} source={{ uri: gameData.homeLogo }} />
              </View>
            </View>
            <Form forwardRef="form">
              <View style={styles.score}>
                <Dropdown
                  label="Home"
                  data={score}
                  containerStyle={styles.dropDownWidth}
                  textColor={'rgb(255, 197, 66)'}
                  baseColor={'rgb(255, 197, 66)'}
                  dropdownPosition={-5.2}
                  pickerStyle={styles.dropDownBackground}
                  shadeOpacity={0.2}
                  onChangeText={(homeResult) => {
                    userScore.home = homeResult;
                    homeScore(inputScoreHome);
                  }}
                />
                <Dropdown
                  label="Away"
                  data={score}
                  containerStyle={styles.dropDownWidth}
                  textColor={'rgb(255, 197, 66)'}
                  baseColor={'rgb(255, 197, 66)'}
                  dropdownPosition={-5.2}
                  pickerStyle={styles.dropDownBackground}
                  shadeOpacity={0.2}
                  onChangeText={(awayResult) => {
                    userScore.away = awayResult;
                    awayScore(inputScoreAway);
                  }}
                />
              </View>
              <View style={styles.submitContainer}>
                <TouchableOpacity
                  disabled={inputScoreAway === true && inputScoreHome === true ? false : true}
                  style={styles.submit}
                  title="SUBMIT"
                  onPress={() => setUserData(roomCode, userScore)}
                >
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </View>
        </View>
      ) : (
            <Room roomCode={roomCode} navigation={navigation} />
          )
      }
    </View >
  );
};

JoinRoom.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  roomCode: PropTypes.string,
  isSetResult: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  setUserData: PropTypes.func,
  login: PropTypes.func,
  gamePreview: PropTypes.func,
  gameData: PropTypes.object,
  gamesData: PropTypes.object
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    game: rooms.game,
    isSetResult: rooms.isSetResult,
    isLoggedIn: rooms.isLoggedIn,
    gameData: rooms.gameData,
    gamesData: prediction.gamesData
  };
};

export default connect(mapStateToProps, { getGame, setUserData, login, gamePreview })(JoinRoom);
