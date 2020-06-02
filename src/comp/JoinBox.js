import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const JoinBox = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxJoin}>
                <View style={styles.circle}></View>
                <View style={styles.square}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxJoin: {
        margin: '6%',
        width: 319,
        height: 187,
        backgroundColor: '#3ED598',
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default JoinBox;
