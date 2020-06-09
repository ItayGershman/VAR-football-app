import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'
// import SvgUri from 'react-native-svg';


// const data = fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live/754', { //live games of the german league
//   // fetch('https://api-football-v1.p.rapidapi.com/v2/leagues', { // all the leagues
//   // fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/754/2020-06-07', { //all the games by date in the german league
//   // fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/754/30', { //all the games in the 30 round of the german league - NOT WORKING
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//     console.log(data.api.fixtures[0].league.name)
//     this.setState({
//       matchData: data,
//     })
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

class Livescore extends React.Component {
  _isMounted = false
  constructor() {
    super()
    this.state = {
      matchData: [],
      matchHome: [],
      matchAway: [],
      leagueFlag: [],
      // homeLogo: [],
      // awayLogo:[],
    };
  }

  componentDidMount() {
    this._isMounted = true
    // fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live/754', {
    fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        console.log(data.api.fixtures[0].league.name)
        console.log(data.api.fixtures[0].homeTeam.logo)
        if (this._isMounted) {
          this.setState({
            matchLeague: data.api.fixtures[0].league.name,
            leagueFlag: data.api.fixtures[0].league.flag,
            matchHome: data.api.fixtures[0].homeTeam,
            matchAway: data.api.fixtures[0].awayTeam
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={DataContainerStyles.dataContainer}>
          <Text style={styles.text}> Livescore</Text>
          <View style={styles.leagueBox}>
            <View style={styles.leagueAndFlag}>
              <Text style={styles.leagueName}>{this.state.matchLeague}</Text>
              {/* <SvgUri
                style={styles.flag}
                width="20"
                height="20"
                source={{ uri: this.state.leagueFlag }} /> */}
            </View>
            <View style={styles.matchRow}>
              <Image
                style={styles.homeLogo}
                source={{ uri: this.state.matchHome.logo }}
              />
              <Text style={styles.leagueName}>{this.state.matchHome.team_name} vs {this.state.matchAway.team_name}</Text>
              <Image
                style={styles.awayLogo}
                source={{ uri: this.state.matchAway.logo }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
Livescore.propTypes = {
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
  leagueAndFlag:{
    flexDirection:'row-reverse'
  }
});
export default Livescore;
