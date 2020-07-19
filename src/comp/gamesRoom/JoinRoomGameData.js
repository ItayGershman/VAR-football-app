import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './JoinRoomStyle';
import PropTypes from 'prop-types';
import { setUserData } from '../actions/roomsActions';
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';

const JoinRoomGameData = ({ gameData }) => {
  return (
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
  );
};

JoinRoomGameData.propTypes = {
  gameData: PropTypes.object
};

const mapStateToProps = ({ rooms }) => {
  return {
    gameData: rooms.gameData
  };
};

export default connect(mapStateToProps, { setUserData })(JoinRoomGameData);
