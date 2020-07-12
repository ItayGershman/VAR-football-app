import { StyleSheet } from 'react-native';

const liveStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C'
  },
  text: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: '5%'
  },
  leagueName: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    fontSize: 16,
    marginTop: 10,
    marginRight: 15
  },
  teamName: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '40%',
    textAlign: 'center',
    fontSize: 16
  },
  leagueBox: {
    marginBottom: 30,
    marginTop: 10,
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#2A3C44',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    justifyContent: 'space-between'
  },
  flag: {
    position: 'relative',
    width: 25,
    height: 20,
    marginRight: 5,
    marginTop: 5
  },
  teamLogo: {
    position: 'relative',
    width: 20,
    height: 20
  },
  matchRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
  },
  leagueAndFlag: {
    flexDirection: 'row-reverse',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // width: '100%',
    height: 48,
    marginBottom: '2%'
  },
  minute: {
    color: '#FF8A34',
    fontSize: 9,
    marginTop: 20
  },
  minuteContainer: {
    justifyContent: 'center',
    position: 'relative'
  },
  score: {
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
    justifyContent: 'center'
  },
  flatListMatch: {
    // justifyContent:'center',
    // textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20
  },
  headlineAndDate: {
    flexDirection: 'row-reverse',
    // justifyContent:'center',
    textAlign: 'center'
  },
  date: {
    color: 'rgb(255, 197, 66)',
    fontFamily: 'sans-serif-thin',
    justifyContent: 'space-around',
    marginTop: '7%',
    marginRight: '30%'
  },
  homeAway: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    marginLeft: '25%'
  },
  homeAwayText: {
    color: '#FF8A34'
  }
});

export default liveStyles;
