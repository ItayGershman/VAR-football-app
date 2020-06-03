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
                <Text style={styles.text}>Games Room</Text>
                <View style={styles.textContainer}>
                </View>
                <CreateBox
                    navigation={props.navigation}
                />
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
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 105
    },
    createText: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    }
});

export default GamesRoom;