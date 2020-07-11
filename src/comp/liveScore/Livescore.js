import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
import GameView from './GameView'
import liveStyles from './liveStyles'
import Image from 'react-native-remote-svg'
import Loader from '../Loader'
import { ScrollView } from 'react-native-gesture-handler';
import getCurrentDate from '../../constants'

const Livescore = ({ navigation, getLiveGames, leagues, isLoading }) => {
  const date = getCurrentDate();
  useEffect(() => {
    getLiveGames()
  }, []);
  console.log(isLoading)
  return (
    <View style={liveStyles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <View style={liveStyles.headlineAndDate}>
          <Text style={liveStyles.text}> Livescore</Text>
          <Text style={liveStyles.date}>{date.replace(/-/g, '.')}</Text>
        </View>
        <ScrollView>
          {
            isLoading ?
              <Loader />
              : leagues.map((league, key) => {
                return (
                  <View key={key} style={liveStyles.leagueBox}>
                    <View style={liveStyles.leagueAndFlag}>
                      <Text style={liveStyles.leagueName}>{league.league}</Text>
                      <Image
                        source={{ uri: league.games[0].leagueFlag }}
                        style={liveStyles.flag}
                      />
                    </View>
                    <View style={liveStyles.homeAway}>
                      <Text style={liveStyles.homeAwayText}>HOME</Text>
                      <Text style={liveStyles.homeAwayText}>AWAY</Text>
                    </View>
                    <FlatList
                      data={league.games}
                      numColumns={1}
                      renderItem={({ item }) => (
                        <GameView
                          game={item}
                          key={item.id}
                        />
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                )
              })
          }
        </ScrollView>
      </View>
    </View>
  );
}

Livescore.propTypes = {
  navigation: PropTypes.object,
  leagues: PropTypes.array,
  getLiveGames: PropTypes.func
};

const mapStateToProps = ({ liveScore }) => {
  return {
    leagues: liveScore.leagues,
    isLoading: liveScore.isLoading
  };
};

export default connect(mapStateToProps, { getLiveGames })(Livescore);
