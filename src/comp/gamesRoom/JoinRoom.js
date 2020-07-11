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
import Image from 'react-native-remote-svg'

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
            {
                !isLoggedIn ?
                    <View style={DataContainerStyles.dataContainer}>
                        <View >
                            <Text style={styles.text}>Join Room</Text>
                            <View style={styles.formContainer}>
                                {
                                    gameData != undefined &&
                                    <View style={styles.matchRow}>
                                        {/* <Image
                                            style={styles.teamLogo}
                                            source={{ uri: gameData.home.logo }}
                                        /> */}
                                        <Text style={styles.teamName}>{gameData.home}</Text>
                                        <Text style={styles.scoreJoin}>{gameData.goalsHome}
                                            {
                                                gameData.minute == 0 ? 'VS' : '-'
                                            }
                                            {gameData.goalsAway}
                                        </Text>
                                        <Text style={styles.teamName}>{gameData.away}</Text>
                                        {/* <Image
                                            style={styles.teamLogo}
                                            source={{ uri: gameData.away.logo }}
                                        /> */}
                                    </View>
                                }
                                <View style={{ justifyContent: 'center', marginBottom: '20%' }}>
                                    <OutlinedTextField
                                        containerStyle={{ width: 235, height: 43, borderBottomColor: 'rgb(255, 197, 66)', borderBottomWidth: 1 }}
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
                            </View>
                        </View>
                    </View>
                    :
                    !isSetResult ?
                        <View style={DataContainerStyles.dataContainer}>
                            <View style={styles.inputResultContainer}>
                                <Text style={styles.joinText}>Your Result</Text>
                                <View style={styles.matchRow}>
                                    {/* <Image
                                        style={liveStyles.teamLogo}
                                        source={{ uri: game.matchHome.logo }}
                                    /> */}
                                    <Text style={styles.teamName}>{gameData.home}</Text>
                                    <Text style={styles.scoreJoin}>{gameData.goalsHome}
                                        {
                                            gameData.minute == 0 ? 'VS' : '-'
                                        }
                                        {gameData.goalsAway}
                                    </Text>
                                    <Text style={styles.teamName}>{gameData.away}</Text>
                                    {/* <Image
                                        style={liveStyles.teamLogo}
                                        source={{ uri: game.matchAway.logo }}
                                    /> */}
                                </View>
                                <Form forwardRef="form">
                                    <View style={styles.score}>
                                        <Dropdown
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
                                    <View style={{ marginBottom: '7%', marginLeft: '6%' }}>
                                        <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => setUserData(roomCode, userScore)}>
                                            <Text style={styles.buttonText} >SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Form>
                            </View>
                        </View>
                        :
                        <Room roomCode={roomCode} navigation={navigation} />
            }
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