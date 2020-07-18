import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles';
import CreateBox from './CreateBox';
import JoinBox from './JoinBox';
import styles from './GamesRoomStyle';

const GamesRoom = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}>Games Room</Text>
        <View style={styles.textContainer}></View>
        <CreateBox navigation={props.navigation} />
        <JoinBox navigation={props.navigation} />
      </View>
    </View>
  );
};

GamesRoom.propTypes = {
  navigation: PropTypes.object
};

export default GamesRoom;
