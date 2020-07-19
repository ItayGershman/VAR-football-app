import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import Form from 'react-native-form';
import { setUserData } from '../../actions/roomsActions';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';

const score = [];
for (let i = 0; i < 10; ++i) {
  const num = {
    value: i
  };
  score.push(num);
}

const JoinRoomResult = ({ roomCode, fullName, setUserData }) => {
  const userScore = {
    home: -1,
    away: -1,
    points: 0
  };
  const submitForm = () => {
    if (userScore.home >= 0 && userScore.away >= 0) {
      setUserData(roomCode, userScore, fullName);
    }
  };

  return (
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
  );
};

JoinRoomResult.propTypes = {
  roomCode: PropTypes.string,
  fullName: PropTypes.string,
  setUserData: PropTypes.func
};

const mapStateToProps = ({ rooms }) => {
  return {
    gameData: rooms.gameData
  };
};

export default connect(mapStateToProps, { setUserData })(JoinRoomResult);
