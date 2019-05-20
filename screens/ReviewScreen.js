import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';


class ReviewScreen extends Component {

     static navigationOptions = (obj) => { 
         const { navigation } = obj;
         console.log(JSON.stringify(obj, null, 2));
         return {
        title: 'Review Jobs',
        headerRight:  <Button 
            title="Settings"
            onPress={ () => navigation.navigate('settings')} 
            type="clear"
            color="rgba(0, 122, 255, 1)"
            
            /> 
  
       /*  header: ({ navigate }) => {  // old reactnavigation not in version 3.0
            return { 
              right: <Button title="Settings" onPress={ () => {}} />
                right: <Text>Go Right</Text>
            };
        } */ 
     }
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