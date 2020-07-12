import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../Assets/logo.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginLeft: '72%',
    marginTop: '8%'
  }
});
export default Header;
