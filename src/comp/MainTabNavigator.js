import React from 'react';
import { StyleSheet } from 'react-native';
import GamesRoom from './gamesRoom/GamesRoom'
import Livescore from './liveScore/Livescore'
import Prediction from './prediction/Prediction'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            labeled={false}
            initialRouteName="GamesRoom"
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