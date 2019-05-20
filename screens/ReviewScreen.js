import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


class ReviewScreen extends Component {

     static navigationOptions = { 
        title: 'Review Jobs',
       // headerRight:  <Button title="Settings" onPress={ () => navigation ('settings')} /> 
       header: ({ navigate }) => {   
        return { 
         // right: <Button title="Settings" onPress={ () => {}} />
         headerRight: <Text>Go Right</Text>
        };}
       /*  header: ({ navigate }) => {  // old reactnavigation not in version 3.0
            return { 
              right: <Button title="Settings" onPress={ () => {}} />
                right: <Text>Go Right</Text>
            };
        } */ 

    }


    render() {
        return(
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }

}

export default ReviewScreen;