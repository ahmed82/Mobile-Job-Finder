import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
 
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
const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen},
  auth: { screen: AuthScreen},
  main: subScreen
   
   
}); 

 class App extends Component {
  render() {
   

    //const tab = createAppContainer(TabNavigator);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Hi From Ahmed Al-Salih</Text>
        </View>
      </Provider>
    );
  }
}

export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
