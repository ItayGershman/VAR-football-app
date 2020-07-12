import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

const Loader = () => {
  const spinValue = new Animated.Value(0);
  useEffect(() => {
    spin();
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => spin());
  };
  return (
    <View style={styles.animatedStyleContainer}>
      <View>
        <Animated.Image source={require('../Assets/ball.gif')} style={styles.animatedStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedStyleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatedStyle: {
    width: 150,
    height: 150
  }
});

export default Loader;
