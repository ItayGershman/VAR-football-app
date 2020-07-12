// import 'react-native-gesture-handler';
import React from 'react';

//Screens
import CreateRoom from './src/comp/gamesRoom/CreateRoom';
import JoinRoom from './src/comp/gamesRoom/JoinRoom';

//Tab screens
import MainTabNavigator from './src/comp/MainTabNavigator';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/rootReducer';

const Stack = createStackNavigator();

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, compose(middleware));

export default function App() {
  return (
    <Provider store={store}>
      <Var />
    </Provider>
  );
}

function Var() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="tabScreens" component={MainTabNavigator} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />
        <Stack.Screen name="JoinRoom" component={JoinRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
