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
        marginLeft: 105
    },
    joinText: {
        fontSize: 16,
        color: 'white',
        // fontFamily: 'sans-serif-thin',
        marginTop: 25,
        marginRight: 140,
        position: 'relative',
    },
    matchText: {
        fontSize: 16,
        color: 'white',
        // fontFamily: 'sans-serif-thin',
        marginTop: 25,
        marginRight: 75,
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'center'
    },
    formContainer: {
        position: 'relative',
        marginLeft: 80,
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
        // fontFamily: 'sans-serif-thin',
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 50
    },
    score: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginRight: 35,
        alignItems: 'center',
        marginLeft: 90
    },
    submit: {
        position: 'relative',
        borderColor: '#3ED598',
        backgroundColor: '#286053',
        width: 120,
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 65,
        marginLeft: 40,
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
        // fontFamily: 'sans-serif-thin',
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
        // fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    titleRoom: {
        // fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },
    titleCode: {
        // fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25
    },
    roomCode: {
        // fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20
    },
    copyCode: {
        // fontFamily: 'sans-serif-thin',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    goBackButton: {
        marginTop: 50,
        marginLeft: 100,
        // fontFamily: 'sans-serif-thin',
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
    nameHomeAway: {
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row-reverse',
        width: '100%',
        marginBottom: '2%',
        position: 'relative',
        width: '100%',
        marginTop: '1%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        marginBottom:'5%'
    },
    columnsTitle: {
        fontFamily: 'sans-serif-thin',
        fontSize: 12,
        color: 'rgb(255, 197, 66)',
    },
    rowFlatList: {
        fontFamily: 'sans-serif-thin',
        fontSize: 10,
        color: 'white',
    },
    rowContent: {
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row-reverse',
        width: '100%',
        marginBottom: '2%',
        position: 'relative',
        width: '100%',
        marginTop: '1%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
    },
    titleAndArrow:{
        flexDirection:'row',
        marginLeft:'5%',
        justifyContent:'space-between'
    }
});

export default styles