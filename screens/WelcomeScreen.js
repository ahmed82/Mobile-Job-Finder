import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a jop', color: '#009688' },
    { text: 'Set Your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    onSlideComplete(){
        this.props.navigation.navigate('auth');
    }

    /* onSlideComplete = () => {} // with arrow function we dont need to bind the props in the component */
    
    render() {
        return(
           <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete.bind(this)} />
            );
    }

}

export default WelcomeScreen;