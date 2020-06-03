import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';

let league = [{
    value: 'Spain',
}, {
    value: 'England',
}, {
    value: 'Italy',
}];

let games = [{
    value: 'Real Madrid VS Barcelona',
}, {
    value: 'Sevillia VS Valencia',
}, {
    value: 'Espanyol VS Bilbao',
}];

let score = [{
    value: 0,
}, {
    value: 1,
}, {
    value: 2,
}, {
    value: 3,
}, {
    value: 4,
}, {
    value: 5,
}, {
    value: 6,
}];

const CreateRoom = (props) => {
    // const [selectedValue, setSelectedValue] = useState("Spain");
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={DataContainerStyles.dataContainer}>
                <Text style={styles.text}>Create Room</Text>
                <View style={styles.formContainer}>
                    <Form forwardRef="form">
                        <View>
                            <View>
                                <TextInput type="TextInput" name="myTextInput" />
                            </View>
                        </View>
                        <Dropdown
                            label='Please Choose Leauge'
                            data={league}
                            containerStyle={{ width: 235 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.3}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                        />
                        <Dropdown
                            label='Choose a game from today'
                            data={games}
                            containerStyle={{ width: 235 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.3}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                        />
                        <Dropdown
                        style={styles.score}
                            label='Home'
                            data={score}
                            containerStyle={{ width: 50 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.3}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                        />
                        <Dropdown
                                                style={styles.score}
                            label='Away'
                            data={score}
                            containerStyle={{ width: 50 }}
                            textColor={'rgb(255, 197, 66)'}
                            baseColor={'rgb(255, 197, 66)'}
                            dropdownPosition={-4.3}
                            pickerStyle={{ backgroundColor: '#2A3C44' }}
                            shadeOpacity={0.20}
                        />
                    </Form>
                </View>
            </View>
        </View>
    );
}

CreateRoom.propTypes = {
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
    },
    formContainer: {
        // height: 200,
        // width: 200,
        // backgroundColor: 'white',
        position: 'relative',
        marginLeft: 80,
        marginTop: 15,
        textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize: 20
    },
    pickerContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    },
    league: {
        fontFamily: 'sans-serif-thin',
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 50
    },
    score:{
        flexDirection:'row'
    }
});

export default CreateRoom;