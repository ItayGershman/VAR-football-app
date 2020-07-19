import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './RoomStyles';
import Image from 'react-native-remote-svg';

const RoomMatch = ({ gameData }) => {
  return (
    <View>
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
    </View>
  );
};

RoomMatch.propTypes = {
  gameData: PropTypes.object
};

export default RoomMatch;
