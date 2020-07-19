import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import DataContainerStyles from '../../styles';
import { login } from '../actions/roomsActions';
import { OutlinedTextField } from 'react-native-material-textfield';
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';

const JoinRoomLogin = ({ gameData, roomCode, login }) => {
  return (
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
                // alert(event.nativeEvent.text)
                login(roomCode, event.nativeEvent.text);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

JoinRoomLogin.propTypes = {
  gameData: PropTypes.object,
  roomCode: PropTypes.string,
  login: PropTypes.func
};

const mapStateToProps = ({ rooms }) => {
  return {
    gameData: rooms.gameData
  };
};

export default connect(mapStateToProps, { login })(JoinRoomLogin);

// export default JoinRoomLogin;
