import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CreateBox = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxCreate}>
                <View style={styles.circle}></View>
                <View style={styles.square}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },  
    boxCreate: {
        margin: '6%',
        width: 319,
        height: 187,
        backgroundColor: '#FFC542',
        // alignItems: 'center',
        // justifyContent: 'center',
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
    }
});

export default CreateBox;
