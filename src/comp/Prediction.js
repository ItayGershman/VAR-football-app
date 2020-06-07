import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'
import CreateBox from './CreateBox'

const data = { username: 'example' };

// fetch('https://api-football-v1.p.rapidapi.com/v2/predictions/157462', {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
//   },
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

const Prediction = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Prediction</Text>
        <View style={styles.boxCreate}>
          <Text style={styles.league}>La Liga</Text>
          <View style={styles.ratio}>
            <Text style={styles.ratioText}>1</Text>
            <Text style={styles.ratioText}>X</Text>
            <Text style={styles.ratioText}>2</Text>
          </View>
          <View style={styles.match}>
            <Text style={styles.predictionText}>Real Madrid</Text>
            <Text style={styles.matchRatio}>    1.79    1.5    2.00</Text>
            <Text style={styles.predictionText}>FC Barcleona</Text>
          </View>
        </View>
        <View style={styles.boxCreate}>
          <Text style={styles.league}>
            Another league...
        </Text>
        </View>
      </View>
    </View>
  );
}
Prediction.propTypes = {
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
    fontSize: 30,
    marginRight: -160,
    marginTop: 10
  },
  boxCreate: {
    marginTop: '6%',
    marginLeft: '7%',
    width: '85%',
    height: '40%',
    backgroundColor: '#2A3C44',
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
  league: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '3%'
  },
  predictionText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: '4%',
  },
  ratio: {
    width: '27%',
    justifyContent: 'space-between',
    marginLeft: '35%',
    flexDirection: 'row',
    marginTop: '5%'
  },
  ratioText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  match:{
    flexDirection:'row'
  },
  matchRatio:{
    color:'#DC143C'
  }
});
export default Prediction;
