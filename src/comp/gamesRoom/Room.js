import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData, gamePreview, cleanState, setPoints } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles';
import { IconButton, Colors } from 'react-native-paper';
import DataContainerStyles from '../../styles';
import RoomMatch from './RoomMatch';
import RoomTable from './RoomTable';

const Room = ({ navigation, roomCode, gameData, cleanState }) => {
  //props is roomCode
  return (
    <View style={DataContainerStyles.dataContainer}>
      <View style={styles.titleAndArrow}>
        <Text style={styles.text}>Your Room</Text>
        <View>
          <IconButton
            icon="chevron-left"
            color={Colors.grey100}
            onPress={() => {
              cleanState();
              navigation.navigate('GamesRoom');
            }}
            size={30}
          />
        </View>
      </View>
      <RoomMatch gameData={gameData} />
      <RoomTable roomCode={roomCode} />
    </View>
  );
};

Room.propTypes = {
  navigation: PropTypes.object,
  roomCode: PropTypes.string,
  cleanState: PropTypes.func,
  gameData: PropTypes.object
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    roomDataUsers: rooms.roomDataUsers,
    gameData: rooms.gameData,
    gamesData: prediction.gamesData,
    isLoading: rooms.isLoading
  };
};

export default connect(mapStateToProps, {
  getRoomData,
  gamePreview,
  cleanState,
  setPoints
})(Room);
