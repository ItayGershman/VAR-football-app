import { StyleSheet } from 'react-native';

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
  boxCreate: {
    marginTop: '6%',
    marginLeft: '5%',
    width: '90%',
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
  league: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '3%'
  },
  predictionText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: '4%',
  },
  match: {
    flexDirection: 'row-reverse'
  },
  matchRatio: {
    color: '#DC143C'
  },
  flatListMatch: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10
  },
  minuteContainer: {
    justifyContent: 'center',
    position: 'relative',
  },
  minute: {
    color: "#FF8A34",
    fontSize: 9,
    marginTop: 20
  },
  matchRow: {
    marginBottom: '1.5%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
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
  teamName: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '40%',
    textAlign: 'center',
    fontSize: 10
  },
  score: {
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
    justifyContent: 'center'
  },
  lastH2H: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10
  },
  percent: {
    marginBottom: '1.5%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
  },
  predictedScore: {
    marginBottom: '1.5%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
  },
  homeAway:{
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems:'center',
    flex:1,
    flexDirection:'row-reverse',
    width:'100%',
    marginBottom:'2%',
    position:'relative'
  },
  h2hTitle:{
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '40%',
    textAlign: 'center',
    fontSize: 12,
  },
  percentNumber:{
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
  },
  homeTitle:{
    color: 'rgb(255, 197, 66)',
    fontFamily: 'sans-serif-thin',
  },
  winningPercent:{
    fontFamily: 'sans-serif-thin',
    color: 'white',
    marginTop: 5,
    fontSize: 12,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:'100%'
  },
  advice:{
    marginBottom: '1.5%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
  },
  ourAdvice:{
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
  },
  adviceText:{
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
    width: '80%',
    textAlign: 'center',
    fontSize: 12
  },
  percentTitle:{
    fontFamily: 'sans-serif-thin',
    fontSize: 8,
    color:'white'
  },
  homeDrawAway:{
    textAlign: 'center',
    alignItems:'center',
    flex:1,
    flexDirection:'row-reverse',
    width:'100%',
    marginBottom:'2%',
    position:'relative',
    width:'100%',
    marginTop:'1%',
    // flexDirection: 'row-revers',
    justifyContent: 'space-evenly',
  },
  dropdown:{
    alignItems:'center',
    justifyContent:'center'
  }
});

export default styles