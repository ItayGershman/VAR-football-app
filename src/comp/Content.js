import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>+ Create Room</Text>
        </View>
        <View style={styles.box1}>
          <Text>Join Room</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: '4%',
    height: '100%',
    backgroundColor: '#2A3C44',
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    flex: 1
  }
});
export default Content;
