import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22343C',
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
        marginBottom:10,
        // marginRight: 140,
        // position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    matchText: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        // marginTop: 25,
        // marginRight: 75,
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
        // marginLeft: 80,
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
        color: '#FFFFFF',
        // marginRight: 50
    },
    score: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width:'40%',
    },
    submit: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: '#3ED598',
        backgroundColor: '#286053',
        width: 120,
        height: 50,
        borderRadius: 7,
        marginTop: 65,
        // marginLeft: 40,
        shadowColor: 'rgb(255, 197, 66)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
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
        justifyContent: 'center',
    },
    titleRoom: {
        fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
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
        justifyContent: 'center',
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
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    matchTextContainer: {
        justifyContent: 'center'
    },
    inputResultContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    minute: {
        color: "#FF8A34",
        fontSize: 9,
        marginTop: 20,
        marginBottom: 30
    },
    matchRow: {
        // marginBottom:'1.5%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        position: 'relative',
        marginBottom:'8%'
        // width: '70%'
    },
    teamName: {
        fontFamily: 'sans-serif-thin',
        // color: 'rgb(255, 197, 66)',
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
        height: 20,
    }
});

export default styles