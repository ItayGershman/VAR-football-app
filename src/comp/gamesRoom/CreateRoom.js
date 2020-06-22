import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard } from 'react-native';
import styles from './CreateRoomStyle'
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { setGame } from '../actions/roomsActions'
import { getLeagues, getLiveGames } from '../actions/predictionActions'
// const randomString = require('random-string');

const CreateRoom = ({ navigation, getLiveGames, getLeagues, leagues, selectedGames, setGame, roomCode }) => {
    useEffect(() => {
        getLeagues()
    }, []);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const copyToClipboard = () => {
        Clipboard.setString(roomCode)
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}>Create Room</Text>
                <View style={styles.formContainer}>
                    <Form forwardRef="form">
                        <View>
                            <View>
                                <TextInput type="TextInput" name="myTextInput" />
                            </View>
                        </View>
                        <Dropdown
                            label='Please Choose League'
                            data={leagues}
                            containerStyle={{ width: 235 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.3}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                            onChangeText={(league) => {
                                getLiveGames(league)
                            }}
                        />
                        <Dropdown
                            label='Choose a game from today'
                            data={selectedGames}
                            containerStyle={{ width: 235 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.8}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                            onChangeText={(match) => {
                                setGame(match)
                            }}
                        />
                        <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={toggleModal}>
                            <Text style={styles.buttonText} >SUBMIT</Text>
                        </TouchableOpacity>
                        <Modal isVisible={isModalVisible} style={styles.modal}>
                            <View style={styles.msgContainer}>
                                <Text style={styles.titleRoom}>The Room has been created!</Text>
                                <Text style={styles.titleCode}>Room Code:</Text>
                                <Text style={styles.roomCode}>{roomCode}</Text>
                                <TouchableOpacity onPress={() => copyToClipboard()}>
                                    <Text style={styles.copyCode}>Click here to copy to Clipboard</Text>
                                </TouchableOpacity>
                                <Button
                                    style={styles.goBackButton}
                                    title="Hide modal"
                                    onPress={() => {
                                        toggleModal()
                                        navigation.navigate('JoinRoom', { roomCode: roomCode })
                                    }}>
                                    <Text style={styles.goBackButton}>Good Luck!</Text>
                                </Button>
                            </View>
                        </Modal>
                    </Form>
                </View>
            </View>
        </View>
    );
}

CreateRoom.propTypes = {
    navigation: PropTypes.object,
    leagues: PropTypes.array,
    selectedGames: PropTypes.array,
    setGame: PropTypes.func
};

const mapStateToProps = ({ prediction, rooms }) => {
    return {
        leagues: prediction.leagues,
        selectedGames: prediction.selectedGames,
        roomCode: rooms.roomCode
    };
};

export default connect(mapStateToProps, { getLiveGames, getLeagues, setGame })(CreateRoom);