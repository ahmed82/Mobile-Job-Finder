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

}, {
    navigationOptions: {
    tabBarVisible: false,
    header: null
  },  
  lazyLoad:true
}); 

/* MainNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}; */

const AppContainer = createAppContainer(MainNavigator);

export default  class App extends Component {
  render() {
    return (
      <Provider store={store}>
          < AppContainer />
      </Provider>
    );
  }
}

 //export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
