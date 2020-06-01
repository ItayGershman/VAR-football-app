import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Content />
      </View>
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.object
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C'
  },
  navBar:{
    flex: 1,
  }
});
export default Home;
