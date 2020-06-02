import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const JoinBox = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxJoin}>
                <Text style={styles.text}>Join Room</Text>
                <TouchableOpacity style={styles.joinButton} title="">
                    <Icon name="play-arrow" color="#3DD598" />
                </TouchableOpacity>
                {/* <Icon style={styles.playIcon} name="play-arrow" color="#3DD598" /> */}
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
        borderColor: '#286053',
        backgroundColor: '#286053',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 121,
    },
    buttonText: {
        position: 'relative',
        color: 'white',
        fontSize: 34,
    },
    infoText: {
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        marginTop: 120,
        marginLeft: 50,
        zIndex: 5,
        fontWeight: 'bold'
    },
});

export default JoinBox;
