import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles'
import { setPoints } from '../actions/roomsActions'

const Room = ({ navigation, getRoomData, roomCode, roomData, roomDataUsers, gamesData, setPoints }) => { //props is roomCode
    useEffect(() => {
        getRoomData(roomCode)
        // if (roomDataUsers.length > 0) setPoints(roomCode, roomData.game, gamesData)
        setPoints(roomCode, roomData.game, gamesData)// check this
    }, [])
    return (
        <View >
            <Text style={styles.text}>Your Room</Text>
            {
                roomDataUsers.length > 0 &&
                <View>
                    <Text>{roomData.game}</Text>
                    <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>NAME</Text>
                        <Text>HOME</Text>
                        <Text>AWAY</Text>
                    </View>
                    <FlatList
                        data={roomDataUsers}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>{item.fullName}</Text>
                                <Text>{item.home}</Text>
                                <Text>{item.away}</Text>
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
    setPoints: PropTypes.func
};

const mapStateToProps = ({ rooms, prediction }) => {
    return {
        roomData: rooms.roomData,
        roomDataUsers: rooms.roomDataUsers,
        gamesData: prediction.gamesData
    };
};

export default connect(mapStateToProps, { getRoomData, setPoints })(Room);