import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import DataContainerStyles from '../../styles';
import Form from 'react-native-form';
import { setUserData } from '../actions/roomsActions';
import { Dropdown } from 'react-native-material-dropdown';
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';

const score = [];
for (let i = 0; i < 10; ++i) {
  const num = {
    value: i
  };
  score.push(num);
}

const JoinRoomResult = ({ gameData, roomCode, userScore, fullName, setUserData }) => {
  const submitForm = () => {
    if (userScore.home >= 0 && userScore.away >= 0) setUserData(roomCode, userScore, fullName);
  };
  return (
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
            <Image style={styles.teamLogo} source={{ uri: gameData.homeLogo }} />
            <Text style={styles.teamName}>{gameData.away}</Text>
            <Text style={styles.scoreJoin}>
              {gameData.goalsHome}
              {gameData.minute === 0 ? 'VS' : '-'}
              {gameData.goalsAway}
            </Text>
            <Text style={styles.teamName}>{gameData.home}</Text>
            <Image style={styles.teamLogo} source={{ uri: gameData.awayLogo }} />
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
              }}
            />
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => submitForm()}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </View>
  );
};

JoinRoomResult.propTypes = {
  roomCode: PropTypes.string,
  gameData: PropTypes.object,
  fullName: PropTypes.string,
  userScore: PropTypes.object,
  setUserData: PropTypes.func
};

const mapStateToProps = ({ rooms }) => {
  return {
    gameData: rooms.gameData
  };
};

export default connect(mapStateToProps, { setUserData })(JoinRoomResult);
