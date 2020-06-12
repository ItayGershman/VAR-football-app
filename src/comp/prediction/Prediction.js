import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import styles from './predictionStyle'
import { connect } from 'react-redux';
import getOdds from '../actions/predictionActions'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';

const data = { username: 'example' };

//from API
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

const Prediction = ({ navigation, odds, getOdds, match, advice }) => {
  useEffect(() => {
    getOdds('')
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Prediction</Text>
        <Form forwardRef="form">
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
            dropdownPosition={-4.8}
            pickerStyle={{ backgroundColor: '#2A3C44' }}
            shadeOpacity={0.20}
          />
        </Form>
        <View style={styles.boxCreate}>
          <Text style={styles.league}>La Liga</Text>
          <View style={styles.ratio}>
            <Text style={styles.ratioText}>1</Text>
            <Text style={styles.ratioText}>X</Text>
            <Text style={styles.ratioText}>2</Text>
          </View>
          <View style={styles.match}>
            <Text style={styles.predictionText}>{match.home}</Text>
            <Text style={styles.matchRatio}>    {odds.homeODDS}    {odds.drawODDS}    {odds.awayODDS}</Text>
            <Text style={styles.predictionText}>{match.away}</Text>
          </View>
          <Text>Our advice:{advice}</Text>
        </View>
      </View>
    </View>
  );
}
Prediction.propTypes = {
  navigation: PropTypes.object,
  getOdds: PropTypes.func, 
  odds: PropTypes.object, 
  match:PropTypes.object, 
  advice:PropTypes.string
};

const mapStateToProps = ({ prediction }) => {
  return {
    odds: prediction.odds,
    match: prediction.match,
    advice: prediction.advice
  };
};

export default connect(mapStateToProps, { getOdds })(Prediction);
