import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const CreateBox = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxCreate}>
                <Text style={styles.text}>Create Room</Text>
                <Button style={styles.createButton}>
                    <Text style={styles.buttonText}>+</Text>
                </Button>
                <Text style={styles.infoText}>You will get the PIN room at your email,{"\n"}sent it to your friend to join!</Text>
                <View style={styles.circle}></View>
                <View style={styles.square}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxCreate: {
        margin: '6%',
        width: 319,
        height: 187,
        backgroundColor: '#FFC542',
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
    circle: {
        height: 72,
        width: 74,
        backgroundColor: '#FFBC25',
        borderRadius: 42,
        marginTop: 85,
    },
    square: {
        height: 110,
        width: 112,
        backgroundColor: '#FFBC25',
        borderRadius: 25,
        marginLeft: 207,
        marginTop: -82,
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
    createButton: {
        position: 'absolute',
        width: 20,
        height: 60,
        borderColor: '#286053',
        backgroundColor: '#3ED598',
        borderRadius: 40,
        borderWidth: 6,
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
        marginLeft: 20,
        zIndex: 5,
        fontWeight: 'bold'

    },
});

export default CreateBox;
