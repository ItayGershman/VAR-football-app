import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const JoinBox = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxJoin}>
                <Text style={styles.text}>Join Room</Text>
                <Button style={styles.joinButton} title="">
                </Button>
                <Icon style={styles.playIcon} name="play-arrow" color="#3DD598"/>
                <Text style={styles.infoText}>Enter the PIN you got from your{"\n"}friend and join!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxJoin: {
        margin: '6%',
        width: 319,
        height: 187,
        backgroundColor: '#3ED598',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    text: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        marginLeft: 110,
        marginTop: 20,
    },
    joinButton: {
        position: 'absolute',
        width: 20,
        height: 60,
        backgroundColor: '#286053',
        borderRadius: 40,
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 121,
    },
    buttonText: {
        position: 'absolute',
        color: 'white',
        fontSize: 34,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif-thin'
    },
    infoText:{
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        marginTop: 120,
        marginLeft: 50,
        zIndex: 5,
        fontWeight: 'bold'
    },
    playIcon:{
        marginTop: 65,
        marginRight: 10
    },
});

export default JoinBox;
