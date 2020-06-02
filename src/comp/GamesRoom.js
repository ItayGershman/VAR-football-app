import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'
import CreateBox from './CreateBox'
import JoinBox from './JoinBox';

const GamesRoom = (props) => {
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <Text style={styles.text}> Games Room</Text>
            <View style={DataContainerStyles.dataContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.createText}>Create Room</Text>
                </View>
                <CreateBox />
                <JoinBox />
            </View>
        </View>
    );
}

GamesRoom.propTypes = {
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
        textAlign: 'center'
    },
    createText: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    },
    textContainer: {
        zIndex: 1,
        position: 'absolute',
        top: '7%',
        left: '35%'
    }

});

export default GamesRoom;
