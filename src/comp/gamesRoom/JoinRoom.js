import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './JoinRoomStyle'
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import Form from 'react-native-form'
import Room from './Room'
import { Dropdown } from 'react-native-material-dropdown';
import { getGame, setUserData, login, gamePreview } from '../actions/roomsActions'
import { connect } from 'react-redux';
import { OutlinedTextField } from 'react-native-material-textfield'

let score = []
for (let i = 0; i < 10; ++i) {
    let num = {
        value: i
    }
    score.push(num)
}

const JoinRoom = ({ route, navigation, isSetResult, isLoggedIn, login, setUserData, gamePreview, gameData, gamesData }) => {//props is roomCode,
    const { roomCode } = route.params
    useEffect(() => {
        // getGame(roomCode)
        gamePreview(roomCode, gamesData)
    }, [])
    let userScore = {
        home: 0,
        away: 0,
        points: 0
    }
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}>Join Room</Text>
                <View style={styles.formContainer}>
                    {
                        gameData != undefined &&
                        <View style={{ width:'100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.matchText}>{gameData.home}</Text>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.minute}>{gameData.minute}</Text>
                                <Text style={styles.matchText}>{gameData.goalsHome}-{gameData.goalsAway}</Text>
                            </View>
                            <Text style={styles.matchText}>{gameData.away}</Text>
                        </View>
                    }
                    <View>
                        {
                            !isLoggedIn ?
                                <View style={{ justifyContent: 'center',marginBottom:'20%' }}>
                                    <OutlinedTextField
                                        containerStyle={{ width: 235,height:43, borderBottomColor: 'rgb(255, 197, 66)', borderBottomWidth: 1 }}
                                        textColor={'rgb(255, 197, 66)'}
                                        baseColor={'rgb(255, 197, 66)'}
                                        tintColor={'rgb(255, 197, 66)'}
                                        lineWidth={0}
                                        activeLineWidth={0}
                                        shadeOpacity={0.20}
                                        label='Enter full name'
                                        returnKeyType="go"
                                        textColor='rgb(255, 197, 66)'
                                        onSubmitEditing={(event) => {
                                            login(roomCode, event.nativeEvent.text)
                                        }}
                                    />
                                </View>
                                :
                                !isSetResult ?
                                    <View style={styles.inputResultContainer}>
                                        <Text style={styles.joinText}>Your Result</Text>
                                        <Form forwardRef="form">
                                            <View style={styles.score}>
                                                <Dropdown
                                                    style={styles.scoreHome}
                                                    label='Home'
                                                    data={score}
                                                    containerStyle={{ width: 64 }}
                                                    textColor={'rgb(255, 197, 66)'}
                                                    baseColor={'rgb(255, 197, 66)'}
                                                    dropdownPosition={-5.2}
                                                    pickerStyle={{ backgroundColor: '#2A3C44' }}
                                                    shadeOpacity={0.20}
                                                    onChangeText={(homeResult) => {
                                                        userScore.home = homeResult
                                                    }}
                                                />
                                                <Dropdown
                                                    style={styles.scoreAway}
                                                    label='Away'
                                                    data={score}
                                                    containerStyle={{ width: 64 }}
                                                    textColor={'rgb(255, 197, 66)'}
                                                    baseColor={'rgb(255, 197, 66)'}
                                                    dropdownPosition={-5.2}
                                                    pickerStyle={{ backgroundColor: '#2A3C44' }}
                                                    shadeOpacity={0.20}
                                                    onChangeText={(awayResult) => {
                                                        userScore.away = awayResult
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => setUserData(roomCode, userScore)}>
                                                <Text style={styles.buttonText} >SUBMIT</Text>
                                            </TouchableOpacity>
                                        </Form>
                                    </View>
                                    :
                                    <Room roomCode={roomCode} navigation={navigation} />
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

JoinRoom.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
    game: PropTypes.string,
    getGame: PropTypes.func,
    roomCode: PropTypes.string,
    isSetResult: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    setUserData: PropTypes.func,
    login: PropTypes.func,
    gamePreview: PropTypes.func,
    gameData: PropTypes.object
};


const mapStateToProps = ({ rooms, prediction }) => {
    return {
        game: rooms.game,
        isSetResult: rooms.isSetResult,
        isLoggedIn: rooms.isLoggedIn,
        gameData: rooms.gameData,
        gamesData: prediction.gamesData
    };
};

export default connect(mapStateToProps, { getGame, setUserData, login, gamePreview })(JoinRoom);