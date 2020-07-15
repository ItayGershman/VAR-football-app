import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData, gamePreview, cleanState, setPoints } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles';
import { IconButton, Colors } from 'react-native-paper';
import DataContainerStyles from '../../styles';
import Image from 'react-native-remote-svg';

const Room = ({
  navigation,
  getRoomData,
  gamePreview,
  roomCode,
  roomDataUsers,
  gamesData,
  gameData,
  cleanState,
  setPoints
}) => {
  //props is roomCode
  useEffect(() => {
    getRoomData(roomCode);
    gamePreview(roomCode, gamesData);
    setPoints(roomCode, gamesData);
  }, []);
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
      {roomDataUsers.length > 0 && (
        <View>
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
                <Text style={styles.score}>
                  {gameData.goalsHome}
                  {gameData.minute === 0 ? 'VS' : '-'}
                  {gameData.goalsAway}
                </Text>
                <Text style={styles.teamName}>{gameData.home}</Text>
                <Image style={styles.teamLogo} source={{ uri: gameData.awayLogo }} />
              </View>
            </View>
          )}
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
      )}
    </View>
  );
};

Room.propTypes = {
  navigation: PropTypes.object,
  getRoomData: PropTypes.func,
  gamePreview: PropTypes.func,
  roomCode: PropTypes.string,
  roomDataUsers: PropTypes.array,
  cleanState: PropTypes.func,
  gameData: PropTypes.object,
  gamesData: PropTypes.object,
  setPoints: PropTypes.func
};

const mapStateToProps = ({ rooms, prediction }) => {
  return {
    // roomData: rooms.roomData,
    roomDataUsers: rooms.roomDataUsers,
    gameData: rooms.gameData,
    gamesData: prediction.gamesData
  };
};

export default connect(mapStateToProps, { getRoomData, gamePreview, cleanState, setPoints })(Room);
