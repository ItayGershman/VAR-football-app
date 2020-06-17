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
        marginRight: -160,
        marginTop: 10,
        marginBottom:'5%'
    },
    leagueName: {
        fontFamily: 'sans-serif-thin',
        // color: 'rgb(255, 197, 66)',
        color: 'white',
        position: 'relative',
        // marginRight: 20,
        // width: '25%',
        // textAlign:'center',
        fontSize: 12,
        // fontWeight:'bold',
        marginTop: 10,
        marginRight: 15
    },
    teamName: {
        fontFamily: 'sans-serif-thin',
        // color: 'rgb(255, 197, 66)',
        color: 'white',
        position: 'relative',
        marginTop: 5,
        width: '40%',
        textAlign: 'center',
        fontSize: 10
    },
    leagueBox: {
        // paddingBottom:'5%',
        // marginBottom:'5%',
        marginTop:'3%',
        // marginBottom:'3%',
        marginLeft: '5%',
        width: '90%',
        // height: '100%',
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
        justifyContent: 'space-between'
    },
    flag: {
        position: 'relative',
        width: 25,
        height: 20,
        marginRight: 5,
        marginTop: 5
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
        marginBottom:'1.5%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        position: 'relative',
        width: '100%'
    },
    leagueAndFlag: {
        flexDirection: 'row-reverse',
        marginBottom:'3%'
    },
    minute: {
        color: "#FF8A34",
        fontSize: 9,
        // textAlign: 'center',
        marginTop: 20
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
        // marginRight: 20,
        marginTop: 5,
        // textAlign: 'center',
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
    }
});

export default liveStyles