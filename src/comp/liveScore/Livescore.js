import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
import GameView from './GameView'
import liveStyles from './liveStyles'
import Image from 'react-native-remote-svg'

const Livescore = ({ navigation, getLiveGames, leagues }) => {
  console.log('LiveScore')
  useEffect(() => {
    getLiveGames('germen')
  }, []);
  console.log('after useEffect')
  return (
    <View style={liveStyles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={liveStyles.text}> Livescore</Text>
        <ScrollView>
          {
            leagues.map((league, key) => {
              return (
                <View key={key} style={liveStyles.leagueBox}>
                  <View style={liveStyles.leagueAndFlag}>
                    <Text style={liveStyles.leagueName}>{league.league}</Text>
                    <Image
                      source={{ uri: league.games[0].leagueFlag }}
                      style={liveStyles.flag}
                    />
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
    leagues: liveScore.leagues
  };
};

export default connect(mapStateToProps, { getLiveGames })(Livescore);
