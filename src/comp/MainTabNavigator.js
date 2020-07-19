import React from 'react';
import GamesRoom from './gamesRoom/GamesRoom';
import Livescore from './liveScore/Livescore';
import Prediction from './prediction/Prediction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PropTypes from 'prop-types';
import styles from './MainTabNavigatorStyles';

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Livescore"
      activeColor="#3DD598"
      inactiveColor="#FFFFFF"
      barStyle={styles.barStyle}
      navigation={navigation}
    >
      <Tab.Screen
        name="GamesRoom"
        component={GamesRoom}
        navigation={navigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="controller-classic-outline" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Prediction"
        component={Prediction}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Livescore"
        component={Livescore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alarm-multiple" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

MainTabNavigator.propTypes = {
  navigation: PropTypes.object,
  color: PropTypes.object
};

MainTabNavigator.displayName = 'MainTabNavigator';

export default MainTabNavigator;
