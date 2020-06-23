import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getRoomData } from '../actions/roomsActions';
import { connect } from 'react-redux';
import styles from './RoomStyles'

const Room = ({ navigation, getRoomData, roomCode, roomData, roomDataUsers }) => { //props is roomCode
    useEffect(() => {
        getRoomData(roomCode)
    }, [])
    return (
        <View >
            <Text style={styles.text}>Your Room</Text>
            {
                roomDataUsers.length > 0 &&
                <View>
                    <Text>{roomData.game}</Text>
                    <View style={{ width:'70%',flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>NAME</Text>
                        <Text>HOME</Text>
                        <Text>AWAY</Text>
                    </View>
                    <FlatList
                        data={roomDataUsers}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={{ width:'60%',flexDirection: 'row', justifyContent: 'space-between' }}>
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
    roomDataUsers: PropTypes.array
};

const mapStateToProps = ({ rooms }) => {
    return {
        roomData: rooms.roomData,
        roomDataUsers: rooms.roomDataUsers
    };
};

export default connect(mapStateToProps, { getRoomData })(Room);