import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxJoin: {
    margin: '6%',
    width: 319,
    height: 187,
    backgroundColor: '#3ED598',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  text: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginLeft: 110,
    marginTop: 20
  },
  joinButton: {
    position: 'absolute',
    borderColor: '#3ED598',
    backgroundColor: '#286053',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 125
  },
  infoText: {
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: 120,
    marginLeft: 50,
    zIndex: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin'
  },
  modal: {
    flex: 1,
    color: 'white',
    justifyContent: 'space-around'
  },
  titleRoom: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  enterButton: {
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
    elevation: 24,
    height: 30,
    borderRadius: 4
  },
  msgContainer: {
    flex: 1,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  inputText: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  enterButtonText: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#286053',
    width: 120,
    shadowColor: 'rgb(255, 197, 66)',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 11
  },
  inputStyle: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif-thin'
  }
});

export default styles;
