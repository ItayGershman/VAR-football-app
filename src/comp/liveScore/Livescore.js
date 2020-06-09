import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
// import SvgUri from 'react-native-svg';

const Livescore = ({ navigation, matchLeague, getLiveGames, matchHome, matchAway, leagueFlag }) => {
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
            <Text style={styles.leagueName}>{matchLeague}</Text>
            {/* <SvgUri
                style={styles.flag}
                width="20"
                height="20"
                source={{ uri: this.state.leagueFlag }} /> */}
          </View>
          <View style={styles.matchRow}>
            <Image
              style={styles.homeLogo}
              source={{ uri: matchHome.logo }}
            />
            <Text style={styles.leagueName}>{matchHome.team_name} vs {matchAway.team_name}</Text>
            <Image
              style={styles.awayLogo}
              source={{ uri: matchAway.logo }}
            />
          </View>
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
    justifyContent: 'center'
  },
  leagueAndFlag: {
    flexDirection: 'row-reverse'
  }
});

const mapStateToProps = ({ liveScore }) => {
  return {
    matchLeague: liveScore.matchLeague,
    matchHome: liveScore.matchHome,
    matchAway: liveScore.matchAway,
    leagueFlag: liveScore.leagueFlag
  };
};

export default connect(mapStateToProps, { getLiveGames })(Livescore);
