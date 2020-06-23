import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData, cleanState } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles'
import { IconButton, Colors } from 'react-native-paper'

const Room = ({ navigation, getRoomData, roomCode, roomData, roomDataUsers, gameData, cleanState }) => { //props is roomCode
    useEffect(() => {
        getRoomData(roomCode)
    }, [])
    return (
        <View >
            <View style={styles.titleAndArrow}>
                <Text style={styles.text}>Your Room</Text>
                <View>
                    <IconButton
                        icon="chevron-left"
                        color={Colors.white}
                        onPress={() => {
                            cleanState()
                            navigation.navigate('GamesRoom')
                        }}
                        size={30}
                    />
                </View>
                {
                    gameData != undefined &&
                    <View style={{ margin: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text style={styles.matchText}>{gameData.home}</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.minute}>{gameData.minute}</Text>
                            <Text style={styles.matchText}>{gameData.goalsHome}-{gameData.goalsAway}</Text>
                        </View>
                        <Text style={styles.matchText}>{gameData.away}</Text>
                    </View>
                }
            </View>
            {
                roomDataUsers.length > 0 &&
                <View>
                    {/* <Text>{roomData.game}</Text> */}
                    {/* <View style={{ width:'70%',flexDirection: 'row-reverse', justifyContent: 'space-between' }}> */}
                    <View style={styles.nameHomeAway}>
                        <Text style={styles.columnsTitle}>NAME</Text>
                        <Text style={styles.columnsTitle}>HOME</Text>
                        <Text style={styles.columnsTitle}>AWAY</Text>
                    </View>
                    <FlatList
                        data={roomDataUsers}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={styles.rowContent}>
                                <Text style={styles.rowFlatList}>{item.fullName}</Text>
                                <Text style={styles.rowFlatList}>{item.home}</Text>
                                <Text style={styles.rowFlatList}>{item.away}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            }
        </View>
    );
}

Room.propTypes = {
    navigation: PropTypes.object,
    getRoomData: PropTypes.func,
    roomCode: PropTypes.string,
    roomData: PropTypes.object,
    roomDataUsers: PropTypes.array,
    cleanState:PropTypes.func
};

const mapStateToProps = ({ rooms }) => {
    return {
        roomData: rooms.roomData,
        roomDataUsers: rooms.roomDataUsers
    };
};

export default connect(mapStateToProps, { getRoomData, cleanState })(Room);