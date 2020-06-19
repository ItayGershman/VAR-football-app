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
        outputRange: [0, 300, 0]
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.Image
                style={{
                    marginBottom: movingMargin,
                    width: 72,
                    height: 72,
                    transform: [{ rotate: spin2 }]
                }}
                source={{ uri: 'https://image.flaticon.com/icons/svg/33/33736.svg' }}
            />
        </View>
    )
}

export default Loader