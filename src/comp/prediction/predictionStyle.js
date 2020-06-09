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
    ratio: {
      width: '27%',
      justifyContent: 'space-between',
      marginLeft: '35%',
      flexDirection: 'row',
      marginTop: '5%'
    },
    ratioText: {
      color: '#FFFFFF',
      fontSize: 12,
    },
    match:{
      flexDirection:'row'
    },
    matchRatio:{
      color:'#DC143C'
    }
  });
  
  export default styles