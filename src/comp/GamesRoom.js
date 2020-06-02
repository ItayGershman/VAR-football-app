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
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}> Games Room</Text>
                <CreateBox>
                    <Text style={styles.createText}>Create Room
                </Text>
                </CreateBox>
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
        backgroundColor: '#22343C'
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 30,
        marginRight: -125,
        marginTop: 10
    },
    createText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    }

});

export default GamesRoom;
