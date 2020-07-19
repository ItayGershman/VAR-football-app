import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxCreate: {
    margin: '6%',
    width: 319,
    height: 187,
    backgroundColor: '#FFC542',
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
  circle: {
    height: 72,
    width: 74,
    backgroundColor: '#FFBC25',
    borderRadius: 42,
    marginTop: 85
  },
  square: {
    height: 110,
    width: 112,
    backgroundColor: '#FFBC25',
    borderRadius: 25,
    marginLeft: 207,
    marginTop: -82
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
  createButton: {
    position: 'absolute',
    borderColor: '#286053',
    backgroundColor: '#3ED598',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 125
  },
  buttonText: {
    position: 'relative',
    color: 'white',
    fontSize: 34,
    fontFamily: 'sans-serif-thin'
  },
  infoText: {
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: 120,
    marginLeft: 20,
    zIndex: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin'
  }
});

export default styles;
