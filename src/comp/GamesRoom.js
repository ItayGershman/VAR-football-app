import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'
// import Content from './Content';

const GamesRoom = (props) => {
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <Text style={styles.text}> Games Room</Text>
            <View style={DataContainerStyles.dataContainer}>
                <View style={styles.box}>
                    <Text>
                        + Create Room
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text>
                        Join Room
                    </Text>
                </View>
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
    // dataContainer: {
    //     width: '100%',
    //     marginTop: '4%',
    //     height: '100%',
    //     backgroundColor: '#2A3C44',
    //     borderTopRightRadius: 40,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 12,
    //     },
    //     shadowOpacity: 0.58,
    //     shadowRadius: 16.00,
    //     elevation: 24,
    //     flex: 1
    // },
    text: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    },
    box: {
        margin: '6%',
        width: '90%',
        height: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});

export default GamesRoom;
