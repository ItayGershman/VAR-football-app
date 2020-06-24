import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData, gamePreview, cleanState } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles'
import { IconButton, Colors } from 'react-native-paper'
import DataContainerStyles from '../../styles'

const Room = ({ navigation, getRoomData, gamePreview, roomCode, roomData, roomDataUsers, gamesData, gameData, cleanState }) => { //props is roomCode
    useEffect(() => {
        getRoomData(roomCode)
        gamePreview(roomCode, gamesData)
    }, [])
    return (
        <View style={DataContainerStyles.dataContainer}>
            <View style={styles.titleAndArrow}>
                <Text style={styles.text}>Your Room</Text>
                <View>
                    <IconButton
                        icon="chevron-left"
                        color={Colors.grey100}
                        onPress={() => {
                            cleanState()
                            navigation.navigate('GamesRoom')
                        }}
                        size={30}
                    />
                </View>

            </View>
            {
                roomDataUsers.length > 0 &&
                <View>
                    {
                        gameData != undefined &&
                        <View style={styles.matchRow}>
                            <Text style={styles.teamName}>{gameData.home}</Text>
                            <Text style={styles.score}>{gameData.goalsHome}
                                {
                                    gameData.minute == 0 ? 'VS' : '-'
                                }
                                {gameData.goalsAway}
                            </Text>
                            <Text style={styles.teamName}>{gameData.away}</Text>
                        </View>
                    }
                    <View style={{ marginBottom: '20%' }}>
                        <View style={styles.nameHomeAway}>
                            <Text style={styles.columnsTitle}>NAME</Text>
                            <Text style={styles.columnsTitle}>HOME</Text>
                            <Text style={styles.columnsTitle}>AWAY</Text>
                            {/* <Text style={styles.columnsTitle}>POINTS</Text> */}
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
                </View>
            }
        </View>
    );
}

Room.propTypes = {
    navigation: PropTypes.object,
    getRoomData: PropTypes.func,
    gamePreview: PropTypes.func,
    roomCode: PropTypes.string,
    roomData: PropTypes.object,
    roomDataUsers: PropTypes.array,
    cleanState: PropTypes.func,
    gameData: PropTypes.object
};

const mapStateToProps = ({ rooms }) => {
    return {
        roomData: rooms.roomData,
        roomDataUsers: rooms.roomDataUsers,
        gameData: rooms.gameData,
        // gamesData: prediction.gamesData
    };
};

export default connect(mapStateToProps, { getRoomData, gamePreview, cleanState })(Room);