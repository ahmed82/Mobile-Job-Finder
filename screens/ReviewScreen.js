import React, { Component } from 'react';
import { View, Text } from 'react-native';


class ReviewScreen extends Component {

    static navigationOptions = { 
        title: 'Review Jobs' ,
        headerRight: <Text>Go Right</Text>
       /*  header: () => {  // old reactnavigation not in version 3.0
            return { 
                right: <Text>Go Right</Text>
            };
        } */ 

    }


    render() {
        return(
            <View>
                <Text>ReviewScreen</Text>
            </View>
        );
    }

}

export default ReviewScreen;