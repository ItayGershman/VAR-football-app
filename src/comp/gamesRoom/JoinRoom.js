import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './JoinRoomStyle'
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';
import { getGame, setUserData } from '../actions/roomsActions'
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';

let score = []
for (let i = 0; i < 10; ++i) {
    let num = {
        value: i
    }
    score.push(num)
}

const JoinRoom = ({ route, navigation, getGame, match, isSetResult, isLoggedIn }) => {//props is roomCode,
    const { roomCode } = route.params
    useEffect(() => {
        getGame(roomCode)
    }, [])
    let userScore = {
        nickname: 'John Doe',
        home: 0,
        away: 0,
        setResult: false
    }
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}>Join Room</Text>
                <View style={styles.formContainer}>

                    <View>
                        <Text style={styles.matchText}>{match.replace(/"/g, '')}</Text>
                    </View>
                    <View>
                        {
                            //check if user is logged in
                            //if he/she is then check if the user entered result
                            //if yes display data, if not display dropdown
                            !isLoggedIn ?
                                <TextField
                                    placeholder="Enter nickname"
                                    returnKeyType="next"
                                    onSubmitEditing={(value) => alert(value)}
                                    blurOnSubmit={false}
                                    onChangeText={(name) => {
                                        userScore.nickname = name
                                        login(roomCode, userScore.nickname)
                                    }}
                                />
                                :
                                !isSetResult ?
                                    <View>
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
                                                        userScore.home(homeResult)
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
                                                        userScore.away(awayResult)
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => setUserData(roomCode, userScore)}>
                                                <Text style={styles.buttonText} >SUBMIT</Text>
                                            </TouchableOpacity>
                                        </Form>
                                    </View>
                                    :
                                    //<Room/>
                                    <View>
                                        <Text>Display list of friends results and match data</Text>
                                    </View>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

JoinRoom.propTypes = {
    navigation: PropTypes.object,
    match: PropTypes.string,
    getGame: PropTypes.func,
    roomCode: PropTypes.string,
    isSetResult: PropTypes.bool,
    isLoggedIn: PropTypes.bool
};


const mapStateToProps = ({ rooms }) => {
    return {
        match: rooms.match,
        isSetResult: rooms.isSetResult,
        isLoggedIn: rooms.isLoggedIn
    };
};

export default connect(mapStateToProps, { getGame, setUserData })(JoinRoom);