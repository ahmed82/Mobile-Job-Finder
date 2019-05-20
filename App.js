import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingsScreen';

const stcknavigator = createStackNavigator({
  review: { screen: ReviewScreen},
  setting: { screen: SettingScreen}

})

const  subScreen = createBottomTabNavigator({
  map: { screen: MapScreen },
  deck: { screen: DeckScreen },
  review: {
    screen: stcknavigator
  }

})
const TabNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen},
  auth: { screen: AuthScreen},
  main: subScreen
   
   
});

  class App extends React.Component {
  render() {
   

    //const tab = createAppContainer(TabNavigator);
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}
export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
