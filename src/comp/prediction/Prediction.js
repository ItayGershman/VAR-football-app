import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import CreateBox from '../gamesRoom/CreateBox'
import styles from './predictionStyle'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
import Livescore from '../liveScore/Livescore';

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

const Prediction = ({ getLiveGames, navigation, matchLeague }) => {
  console.log('prediction')
  useEffect(() => {
    getLiveGames('germen')
  }, []);
  console.log('after germen')
  // if (matchLeague.length != 0) {
  //   console.log(`matchLeague[0]:${matchLeague[0]}`)
  // }
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
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
        {/* <View style={styles.boxCreate}>
          {
            matchLeague.length == 0 ?
              <Text style={styles.league}>
                Another league...
              </Text>
              :
              <Text style={styles.league}>
                from Redux -> {matchLeague[0]}
              </Text>
          }
          <Text style={styles.league}>

            Another league...
        </Text>
        </View> */}
      </View>
    </View>
  );
}
Prediction.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = ({ liveScore }) => {
  return {
    matchLeague: liveScore.matchLeague,
  };
};

export default connect(mapStateToProps, { getLiveGames })(Prediction);
// export default Prediction;
