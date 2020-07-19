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
    marginTop: 10,
    marginLeft: 125
  },
  joinText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'sans-serif-thin',
    marginTop: 25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  matchText: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },
  pickerContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'white'
  },
  league: {
    fontFamily: 'sans-serif-thin',
    fontSize: 15,
    color: '#FFFFFF'
  },
  score: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '40%'
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3ED598',
    backgroundColor: '#286053',
    width: 120,
    height: 50,
    borderRadius: 7,
    marginTop: 8,
    shadowColor: 'rgb(255, 197, 66)',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  buttonText: {
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
    color: 'white'
  },
  modal: {
    flex: 1,
    color: 'white',
    justifyContent: 'space-around'
  },
  msgContainer: {
    flex: 1,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  titleRoom: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  titleCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  roomCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  copyCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  goBackButton: {
    marginTop: 50,
    marginLeft: 100,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#286053',
    width: 120,
    shadowColor: 'rgb(255, 197, 66)',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  matchTextContainer: {
    justifyContent: 'center'
  },
  inputResultContainer: {
    justifyContent: 'center',
    alignItems: 'center'
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
  matchView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20
  },
  matchRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    position: 'relative',
    marginBottom: '8%'
  },
  teamName: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '40%',
    textAlign: 'center',
    fontSize: 13
  },
  scoreJoin: {
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
    justifyContent: 'center'
  },
  teamLogo: {
    position: 'relative',
    width: 20,
    height: 20
  },
  nameStyle: {
    width: 235,
    height: 43,
    borderBottomColor: 'rgb(255, 197, 66)',
    borderBottomWidth: 1
  },
  nameStyleContainer: {
    justifyContent: 'center',
    marginBottom: '20%'
  },
  dropDownWidth: {
    width: 64
  },
  dropDownBackground: {
    backgroundColor: '#2A3C44'
  },
  submitContainer: {
    marginLeft: '6%',
    marginTop: 65,
    width: 120,
    height: 50,
  },
  inputStyle: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default styles;
