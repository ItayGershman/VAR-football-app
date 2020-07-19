import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData, setPoints } from '../../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles';

const RoomTable = ({ roomCode, getRoomData, roomDataUsers, setPoints, gamesData }) => {
  useEffect(() => {
    setPoints(roomCode, gamesData);
    getRoomData(roomCode);
  }, []);
  return (
    <View>
      <View style={styles.headlines}>
        <View style={styles.tableBox}>
          <View style={styles.nameHomeAway}>
            <Text style={styles.columnsTitle}>NAME</Text>
            <Text style={styles.columnsTitle}>HOME</Text>
            <Text style={styles.columnsTitle}>AWAY</Text>
            <Text style={styles.columnsTitle}>POINTS</Text>
          </View>
          <FlatList
            data={roomDataUsers}
            numColumns={1}
            renderItem={({ item }) => (
              <View keyExtractor={item.id} style={styles.rowContent}>
                <Text style={styles.rowFlatList}>{item.fullName}</Text>
                <Text style={styles.rowFlatList}>{item.home}</Text>
                <Text style={styles.rowFlatList}>{item.away}</Text>
                <Text style={styles.rowFlatList}>{item.points}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

RoomTable.propTypes = {
  roomCode: PropTypes.string,
  roomDataUsers: PropTypes.array,
  getRoomData: PropTypes.func,
  gamesData: PropTypes.array,
  setPoints: PropTypes.func
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    roomDataUsers: rooms.roomDataUsers,
    gamesData: prediction.gamesData
  };
};

export default connect(mapStateToProps, { getRoomData, setPoints })(RoomTable);
