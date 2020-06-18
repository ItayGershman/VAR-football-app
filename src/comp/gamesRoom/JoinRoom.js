import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';


let score = [{
    value: 0,
}, {
    value: 1,
}, {
    value: 2,
}, {
    value: 3,
}, {
    value: 4,
}, {
    value: 5,
}, {
    value: 6,
}];

const JoinRoom = (props) => {//props is roomCode,
    useEffect(()=>{
        //action -> call an action with roomCode and match from state will be displayed
    },[])

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}>Join Room</Text>
                <View style={styles.formContainer}>
                    <Form forwardRef="form">
                        <View>
                        <Text style={styles.matchText}>Will need to display the room match</Text>
                        </View>
                        <Text style={styles.joinText}>Your Result</Text>
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
                            />
                        </View>
                        <TouchableOpacity style={styles.submit} title="SUBMIT" onPress={() => console.log('submit result to nickname obj')}>
                            <Text style={styles.buttonText} >SUBMIT</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </View>
        </View>
    );
}

JoinRoom.propTypes = {
    navigation: PropTypes.object
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
        justifyContent:'center',
        textAlign:'center'
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

export default JoinRoom;