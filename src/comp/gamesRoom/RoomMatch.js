import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { gamePreview } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles';
import Image from 'react-native-remote-svg';
import Loader from '../Loader';

const RoomMatch = ({ roomCode, gameData, gamesData, gamePreview, isLoading }) => {
  useEffect(() => {
    gamePreview(roomCode, gamesData);
  }, []);
  return (
    <View>
      {isLoading ? (
        <Loader />
      ) : (
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
            <Text style={styles.score}>
              {gameData.goalsHome}
              {gameData.minute === 0 ? 'VS' : '-'}
              {gameData.goalsAway}
            </Text>
            <Text style={styles.teamName}>{gameData.away}</Text>
            <Image style={styles.teamLogo} source={{ uri: gameData.homeLogo }} />
          </View>
        </View>
      )}
    </View>
  );
};

RoomMatch.propTypes = {
  gamePreview: PropTypes.func,
  roomCode: PropTypes.string,
  gameData: PropTypes.object,
  gamesData: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    gameData: rooms.gameData,
    gamesData: prediction.gamesData,
    isLoading: rooms.isLoading
  };
};

export default connect(mapStateToProps, { gamePreview })(RoomMatch);
