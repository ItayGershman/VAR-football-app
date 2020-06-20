import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';
import { getGame, setUserResult } from '../actions/roomsActions'
import { connect } from 'react-redux';

let score = []
for (let i = 0; i < 10; ++i) {
    let num = {
        value: i
    }
    score.push(num)
}

const JoinRoom = ({ navigation, getGame, match, roomCode }) => {//props is roomCode,
    useEffect(() => {
        //action -> call an action with roomCode and match from state will be displayed
        getGame(roomCode)
    }, [])
    let userScore = {
        nickname: '',
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
                    <Form forwardRef="form">
                        <View>
                            <Text style={styles.matchText}>{match} - Will need to display the room match</Text>
                        </View>
                        <Text style={styles.joinText}>Your Result</Text>

                        <View style={styles.score}>
                            <Dropdown
                                style={styles.scoreHome}//?
                                label='Enter nickname'
                                data={score}
                                containerStyle={{ width: 64 }}
                                textColor={'rgb(255, 197, 66)'}
                                baseColor={'rgb(255, 197, 66)'}
                                dropdownPosition={-5.2}
                                pickerStyle={{ backgroundColor: '#2A3C44' }}
                                shadeOpacity={0.20}
                                onChangeText={(name) => {
                                    userScore.nickname(name)
                                    //login with nickname - if not exist display rest of dropdown
                                }}
                            />
/*after set nickname check if the user entered Result
* if yes display list component
* if not display rest of Dropdown of result
*/
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
                        <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => setUserResult(roomCode, userScore)}>
                            <Text style={styles.buttonText} >SUBMIT</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </View>
        </View>
    );
}

JoinRoom.propTypes = {
    navigation: PropTypes.object,
    match: PropTypes.string,
    getGame: PropTypes.func,
    roomCode: PropTypes.string
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22343C',
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 105
    },
    joinText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'sans-serif-thin',
        marginTop: 25,
        marginRight: 140,
        position: 'relative',
    },
    matchText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'sans-serif-thin',
        marginTop: 25,
        marginRight: 75,
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'center'
    },
    formContainer: {
        position: 'relative',
        marginLeft: 80,
        marginTop: 15,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    },
    pickerContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    },
    league: {
        fontFamily: 'sans-serif-thin',
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 50
    },
    score: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginRight: 35,
        alignItems: 'center',
        marginLeft: 90
    },
    submit: {
        position: 'relative',
        borderColor: '#3ED598',
        backgroundColor: '#286053',
        width: 120,
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 65,
        marginLeft: 40,
        shadowColor: 'rgb(255, 197, 66)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    buttonText: {
        fontFamily: 'sans-serif-thin',
        fontSize: 20,
        color: 'white'
    },
    modal: {
        flex: 1,
        color: 'white',
        justifyContent: 'space-around'
    },
    msgContainer: {
        flex: 1,
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    titleRoom: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },
    titleCode: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25
    },
    roomCode: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20
    },
    copyCode: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    goBackButton: {
        marginTop: 50,
        marginLeft: 100,
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#286053',
        width: 120,
        shadowColor: 'rgb(255, 197, 66)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
});


const mapStateToProps = ({ rooms }) => {
    return {
        match: rooms.match
    };
};

export default connect(mapStateToProps, { getGame, setUserResult })(JoinRoom);