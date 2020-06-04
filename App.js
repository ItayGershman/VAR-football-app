import 'react-native-gesture-handler';
import React from 'react';
import GamesRoom from './src/comp/GamesRoom'
import Livescore from './src/comp/Livescore'
import Prediction from './src/comp/Prediction'
import CreateRoom from './src/comp/CreateRoom'
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator({navigation}) {
  return(
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
              ),
              
            }}
            
          />
          <Tab.Screen
            name="Prediction"
            component={Prediction}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chart-line" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Livescore"
            component={Livescore}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="alarm-multiple" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name='tabScreens'
            component={MainTabNavigator}
          />
          <Stack.Screen 
            name='CreateRoom'
            component={CreateRoom}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#30444E',
    width: '100%',
    height: '8%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  }
})