import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import styles from './predictionStyle'
import { connect } from 'react-redux';
import { getOdds, getLiveGames, getLeagues } from '../actions/predictionActions'
import Form from 'react-native-form'
import { Dropdown } from 'react-native-material-dropdown';
import PredictionGameView from './PredictionGameView'
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../comp/Loader'

const Prediction = ({ navigation, predictedScore, winningPercent, h2hGames, leagues, selectedGames, gamesData, getOdds, getLeagues, match, advice, getLiveGames, isLoading }) => {
  useEffect(() => {
    getLeagues()
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Prediction</Text>
        {
          isLoading ?
            <Loader />
            :
            <View>
              <View>
                <Form forwardRef="form">
                  <Dropdown
                    label='Please Choose League'
                    data={leagues}
                    containerStyle={{ width: 235 }}
                    textColor={'rgb(255, 197, 66)'}
                    baseColor={'rgb(255, 197, 66)'}
                    dropdownPosition={-4.3}
                    pickerStyle={{ backgroundColor: '#2A3C44' }}
                    shadeOpacity={0.20}
                    onChangeText={(value) => {
                      getLiveGames(value)
                    }}
                  />
                  <Dropdown
                    label='Choose a game from today'
                    data={selectedGames}
                    containerStyle={{ width: 235 }}
                    textColor={'rgb(255, 197, 66)'}
                    baseColor={'rgb(255, 197, 66)'}
                    dropdownPosition={-4.8}
                    pickerStyle={{ backgroundColor: '#2A3C44' }}
                    shadeOpacity={0.20}
                    onChangeText={(value) => {
                      getOdds(value, gamesData)
                    }}
                  />
                </Form>
              </View>
              {
                advice.length > 0 &&
                <View style={{ height: '63%' }}>
                  <ScrollView >
                    <PredictionGameView
                      predictedScore={predictedScore}
                      winningPercent={winningPercent}
                      h2hGames={h2hGames}
                      advice={advice}
                      match={match}
                    />
                  </ScrollView>
                </View>
              }
            </View>
        }
      </View>
    </View >
  );
}
Prediction.propTypes = {
  navigation: PropTypes.object,
  getOdds: PropTypes.func,
  odds: PropTypes.object,
  match: PropTypes.object,
  advice: PropTypes.string,
  getLeagues: PropTypes.func,
  isLoading: PropTypes.bool
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
