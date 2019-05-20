import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const stcknavigator = createStackNavigator({
  review: { screen: ReviewScreen},
  settings: { screen: SettingsScreen}
})

const  subScreen = createBottomTabNavigator({
  map: { screen: MapScreen },
  deck: { screen: DeckScreen },
  review: {
    screen: stcknavigator
  }
})
const TabNavigators = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen},
  auth: { screen: AuthScreen},
  main: subScreen
});




//const MainNavigator = createAppContainer(TabNavigators);
export default TabNavigators;
