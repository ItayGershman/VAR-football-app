import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { cleanState } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles';
import { IconButton, Colors } from 'react-native-paper';
import DataContainerStyles from '../../styles';
import RoomTable from './RoomTable';
import RoomMatch from './RoomMatch';

const Room = ({ navigation, roomCode, cleanState }) => {
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
      <View>
        <RoomMatch roomCode={roomCode} />
        <RoomTable roomCode={roomCode} />
      </View>
    </View>
  );
};

Room.propTypes = {
  navigation: PropTypes.object,
  roomCode: PropTypes.string,
  cleanState: PropTypes.func
};

const mapStateToProps = ({ rooms }) => {
  return {
    isLoading: rooms.isLoading
  };
};

export default connect(mapStateToProps, { cleanState })(Room);
