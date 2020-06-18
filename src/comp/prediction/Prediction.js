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

//from API
// let league = [{ value: 'Spain' }, { value: 'England' }, { value: 'Italy' },{ value: 'Germen' }];
// let games = [{ value: 'Real Madrid VS Barcelona', }, { value: 'Sevillia VS Valencia', }, { value: 'Espanyol VS Bilbao', }];

const Prediction = ({ navigation, predictedScore, winningPercent, h2hGames, leagues, selectedGames, gamesData, getOdds, getLeagues, match, advice, getLiveGames }) => {
  useEffect(() => {
    // getOdds('')
    // getLiveGames('Germen')
    getLeagues()

  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Prediction</Text>
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
              //get live games by league for prediction!
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
              // alert(JSON.stringify(gamesData))
              getOdds(value, gamesData)
            }}
          />
        </Form>
        {predictedScore ?
          <View style={styles.boxCreate}>
            <Text>home {predictedScore.home} - {predictedScore.away} away</Text>
            <Text>Home: {winningPercent.home}</Text>
            <Text>Draw: {winningPercent.draw}</Text>
            <Text>Away: {winningPercent.away}</Text>
            <Text>Head 2 Head Below!</Text>
            <View>
              {
                h2hGames.games.map(game => {
                  return (
                    <Text>{game.home.replace(/"/g, '')} {game.score.replace(/"/g, '')} {game.away.replace(/"/g, '')} </Text>
                  )
                })
              }
            </View>
            {/* <Text>Home: {JSON.stringify(h2hGames.games[0].home).replace(/"/g, '')}</Text>
            <Text>Away: {JSON.stringify(h2hGames.games[0].away).replace(/"/g, '')}</Text>
            <Text>Score: {JSON.stringify(h2hGames.games[0].score).replace(/"/g, '')}</Text> */}
            {/* <Text style={styles.league}>La Liga</Text>
          <View style={styles.ratio}>
            <Text style={styles.ratioText}>1</Text>
            <Text style={styles.ratioText}>X</Text>
            <Text style={styles.ratioText}>2</Text>
          </View>
          <View style={styles.match}>
            <Text style={styles.predictionText}>{match.home}</Text>
            <Text style={styles.matchRatio}>    {odds.homeODDS}    {odds.drawODDS}    {odds.awayODDS}</Text>
            <Text style={styles.predictionText}>{match.away}</Text>
          </View> */}
            <Text>Our advice:{advice}</Text>
          </View> :
          <View></View>
        }

      </View>
    </View>
  );
}
Prediction.propTypes = {
  navigation: PropTypes.object,
  getOdds: PropTypes.func,
  odds: PropTypes.object,
  match: PropTypes.object,
  advice: PropTypes.string,
  getLeagues: PropTypes.func
};

const mapStateToProps = ({ prediction }) => {
  return {
    // odds: prediction.odds,
    match: prediction.match,
    advice: prediction.advice,
    matchId: prediction.matchId,
    leagues: prediction.leagues,
    selectedGames: prediction.selectedGames,
    gamesData: prediction.gamesData,
    predictedScore: prediction.predictedScore,
    winningPercent: prediction.winningPercent,
    h2hGames: prediction.h2hGames
  };
};

export default connect(mapStateToProps, { getLiveGames, getOdds, getLeagues })(Prediction);
