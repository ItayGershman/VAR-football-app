// import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles';
import styles from './predictionStyle';
import { connect } from 'react-redux';
import { getOdds, getLiveGames, getLeagues } from '../actions/predictionActions';
import Form from 'react-native-form';
import { Dropdown } from 'react-native-material-dropdown';
import PredictionGameView from './PredictionGameView';

import Loader from '../../comp/Loader';

const Prediction = ({
  navigation,
  predictedScore,
  winningPercent,
  h2hGames,
  leagues,
  selectedGames,
  gamesData,
  getOdds,
  getLeagues,
  match,
  advice,
  getLiveGames,
  isLoading
}) => {
  useEffect(() => {
    getLeagues();
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Prediction</Text>
        {isLoading ? (
          <Loader />
        ) : (
          //predictionStyle.dropdown in <View style={predictionStyle.dropdown}>
          <View>
            <View style={styles.dropdown}>
              <Form forwardRef="form">
                <Dropdown
                  label="Please Choose League"
                  data={leagues}
                  containerStyle={styles.containerStyle}
                  textColor={styles.textColor.color}
                  baseColor={styles.textColor.color}
                  dropdownPosition={-4.2}
                  pickerStyle={styles.pickerStyle}
                  shadeOpacity={0.2}
                  onChangeText={(value) => {
                    getLiveGames(value);
                  }}
                />
                <Dropdown
                  label="Choose a game from today"
                  data={selectedGames}
                  containerStyle={styles.containerStyle}
                  textColor={styles.textColor.color}
                  baseColor={styles.textColor.color}
                  dropdownPosition={-2.3}
                  pickerStyle={styles.pickerStyle}
                  shadeOpacity={0.2}
                  onChangeText={(value) => {
                    getOdds(value, gamesData);
                  }}
                />
              </Form>
            </View>
            {advice.length > 0 && (
              <View style={styles.gameViewContainer}>
                <ScrollView>
                  <PredictionGameView
                    predictedScore={predictedScore}
                    winningPercent={winningPercent}
                    h2hGames={h2hGames}
                    advice={advice}
                    match={match}
                  />
                </ScrollView>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
Prediction.propTypes = {
  navigation: PropTypes.object,
  getOdds: PropTypes.func,
  // odds: PropTypes.object,
  match: PropTypes.object,
  advice: PropTypes.string,
  getLeagues: PropTypes.func,
  isLoading: PropTypes.bool,
  getLiveGames: PropTypes.func,
  gamesData: PropTypes.array,
  predictedScore: PropTypes.object,
  winningPercent: PropTypes.object,
  h2hGames: PropTypes.object,
  leagues: PropTypes.array,
  selectedGames: PropTypes.array
};

const mapStateToProps = ({ prediction }) => {
  return {
    match: prediction.match,
    advice: prediction.advice,
    matchId: prediction.matchId,
    leagues: prediction.leagues,
    selectedGames: prediction.selectedGames,
    gamesData: prediction.gamesData,
    predictedScore: prediction.predictedScore,
    winningPercent: prediction.winningPercent,
    h2hGames: prediction.h2hGames,
    isLoading: prediction.isLoading
  };
};

export default connect(mapStateToProps, { getLiveGames, getOdds, getLeagues })(Prediction);
