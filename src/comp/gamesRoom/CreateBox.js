import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CreateBoxStyles';

const CreateBox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxCreate}>
        <Text style={styles.text}>Create Room</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreateRoom')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          You will get the PIN room at your email,{'\n'}sent it to your friend to join!
        </Text>
        <View style={styles.circle}></View>
        <View style={styles.square}></View>
      </View>
    </View>
  );
};

CreateBox.propTypes = {
  navigation: PropTypes.object
};

export default CreateBox;
