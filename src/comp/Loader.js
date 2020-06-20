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
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => spin())
    }

    const spin2 = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })
    const movingMargin = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 250, 0]
    })
    const opacity = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.5, 1, 0.5]
    })
    const shadowWidth = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [30, 40, 30]
    })
    const shadowHeight = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [30, 35, 30]
    })
    const borderRadius = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [30, 60, 30]
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50
        }}>
            <Animated.Image
                style={{
                    marginBottom: movingMargin,
                    width: 72,
                    height: 72,
                    borderRadius: 50,
                    transform: [{ rotate: spin2 }]
                }}
                source={{ uri: 'https://www.freeiconspng.com/uploads/soccer-ball-png-2.png' }}
            />
            <Animated.View
                style={{
                    opacity,
                    position: 'absolute',
                    bottom: 80,
                    marginTop: 30,
                    height: shadowHeight,
                    borderRadius: 30,
                    borderWidth: 2,
                    transform: [
                        { scaleX: 2 }
                    ],
                    width: shadowWidth,
                    backgroundColor: 'black'
                }} />
        </View>
    )
}

export default Loader