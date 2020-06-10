import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
// import SvgUri from 'react-native-svg';

function GameView({ matches }) {
  console.log(`inside comp${JSON.stringify(matches)}`)
  return (
    <View style={styles.flatListMatch}>
      <View style={styles.minuteContainer}>
        <Text style={styles.minute}>{matches.minute}</Text>
      </View>
      <View style={styles.matchRow}>
        <Image
          style={styles.homeLogo}
          source={{ uri: matches.matchHome.logo }}
        />
        <Text style={styles.leagueName}>{matches.matchHome.team_name}</Text>
        <Text style={styles.score}>{matches.goalsHomeTeam}-{matches.goalsAwayTeam}</Text>
        <Text style={styles.leagueName}>{matches.matchAway.team_name}</Text>
        <Image
          style={styles.awayLogo}
          source={{ uri: matches.matchAway.logo }}
        />
      </View>
    </View>
  );
}

const Livescore = ({ navigation, getLiveGames, matches }) => {
  console.log('LiveScore')
  useEffect(() => {
    getLiveGames('germen')
  }, []);
  console.log('after useEffect')

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Livescore</Text>
        <View style={styles.leagueBox}>
          <View style={styles.leagueAndFlag}>

            <Text style={styles.leagueName}>{matches[0].matchLeague}</Text>
            {/* <SvgUri
                  style={styles.flag}
                  width="20"
                  height="20"
                  source={{ uri: this.state.leagueFlag }} /> */}
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={matches}
            numColumns={1}
            renderItem={({ item }) => (
              <GameView
                matches={item}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
Livescore.propTypes = {
  navigation: PropTypes.object,
  matchLeague: PropTypes.array,
  matchHome: PropTypes.array,
  matchAway: PropTypes.array,
  leagueFlag: PropTypes.array
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
  leagueName: {
    fontFamily: 'sans-serif-thin',
    // color: 'rgb(255, 197, 66)',
    color: 'white',
    position: 'relative',
    marginRight: 20,
    marginTop: 10
  },
  leagueBox: {
    marginTop: '6%',
    marginLeft: '5%',
    width: '90%',
    height: '100%',
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
  flag: {
    position: 'relative',
    width: 100,
    height: 100,
    // backgroundColor: 'red',
  },
  homeLogo: {
    position: 'relative',
    width: 20,
    height: 20,
  },
  awayLogo: {
    position: 'relative',
    width: 20,
    height: 20,
  },
  matchRow: {
    marginTop: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  leagueAndFlag: {
    flexDirection: 'row-reverse'
  },
  minute: {
    color: "#FF8A34",
    fontSize: 9,
    textAlign: 'center',
  },
  minuteContainer: {
    justifyContent: 'center',
    position: 'relative',
  },
  score: {
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    // color: 'white',
    position: 'relative',
    marginRight: 20,
    marginTop: 10,
    textAlign:'center',
    justifyContent:'center'
  },
  flatListMatch:{
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center',
    alignItems:'center'
  }
});

const mapStateToProps = ({ liveScore }) => {
  return {
    matches: liveScore.matches
  };
};

export default connect(mapStateToProps, { getLiveGames })(Livescore);
