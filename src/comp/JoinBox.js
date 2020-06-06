import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Modal from 'react-native-modal';

const JoinBox = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const moveAndHide = ({ navigation }) => {
        navigation.navigate('JoinRoom')
        setModalVisible(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxJoin}>
                <Text style={styles.text}>Join Room</Text>
                <TouchableOpacity
                    style={styles.joinButton}
                    title=""
                    onPress={toggleModal}
                >
                    <Icon name="play-arrow" color="#3DD598" />
                </TouchableOpacity>
                <Text style={styles.infoText}>Enter the PIN you got from your{"\n"}friend and join!</Text>
                <Modal isVisible={isModalVisible} style={styles.modal}>
                    <View style={styles.msgContainer}>
                        <Text style={styles.titleRoom}>Enter the room code:</Text>
                        <Input
                            style={styles.inputText}
                            placeholder=''
                            inputStyle={{color:'white', justifyContent:'center',textAlign:'center',fontFamily:'sans-serif-thin'}}
                        />
                        <TouchableOpacity style={styles.enterButton} title="LETS PLAY!" onPress={() => moveAndHide({ navigation })}>
                            <Text style={styles.enterButtonText}>LET'S PLAY!</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View >
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
        borderColor: '#3ED598',
        backgroundColor: '#286053',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 125,
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
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    modal: {
        flex: 1,
        color: 'white',
        justifyContent: 'space-around'
    },
    titleRoom: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },
    enterButton: {
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
        height:30,
        borderRadius:4
    },
    msgContainer: {
        flex: 1,
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    inputText: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center'
    },
    enterButtonText: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
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
        height:30,
        borderRadius:4,
        alignItems:'center',
        marginTop:11
    }
});

export default JoinBox;