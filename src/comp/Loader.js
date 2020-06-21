import React, { useEffect } from 'react'
import {
    View,
    Animated,
    Image,
    Easing
} from 'react-native';



const Loader = () => {
    let spinValue = new Animated.Value(0)
    useEffect(() => {
        spin()
    })

    const spin = () => {
        spinValue.setValue(0)
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => spin())
    }

    const spin2 = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const movingMargin = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 280, 0]
    })
    const opacity = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.2, 1, 0.2]
    })
    const shadowWidth = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [40, 60, 40]
    })
    const shadowHeight = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [20, 30, 20]
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View>
                <Animated.Image
                    source={require('../Assets/ball.gif')}
                    style={{
                        // marginBottom: movingMargin,
                        width: 150,
                        height: 150,
                        // backgroundColor: 'white',
                        // borderRadius: 50,
                        // transform: [{ rotate: spin2 }]
                    }}
                />
            </View>
            {/* <Animated.View
                style={{
                    opacity,
                    position: 'absolute',
                    marginTop: 30,
                    height: shadowHeight,
                    width: shadowWidth,
                    borderRadius: 50,
                    backgroundColor: 'black'
                }} /> */}
        </View>
    )
}

export default Loader