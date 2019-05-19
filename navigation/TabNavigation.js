import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';


const TabNavigator = createBottomTabNavigator({
    welcome: { screen: WelcomeScreen},
    auth: { screen: AuthScreen}
  });
  
  export default createAppContainer(TabNavigator);