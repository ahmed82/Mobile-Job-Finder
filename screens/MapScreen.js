import React, { Component } from 'react';
import { View, TextInput , ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect} from 'react-redux';
import { Button, Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardShift from '../components/KeyboardShift';
import { Location } from 'expo';

import * as actions from '../actions';

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        text: 'Useless Placeholder',
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        location: null,    
    }

  /*   componentWillMount() {
        this._getLocationAsync();
    } */

    componentDidMount() {
        this.setState({ mapLoaded: true});
       /*  if (!Location.hasServicesEnabledAsync()){
            Location.getCurrentPositionAsync(options)
        } */
        
    }

    onRegionChangeComplete = (region) => {
        this.setState({region});
        console.log(region)
    }

    onButtonPress = () => {
       // this.props.fetchJobs(this.state.region);
        this.props.fetchGitHubJobs(this.state.region);
    }

   /*  _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      }; */


    render() {
        if(! this.state.mapLoaded) {
            <View style = {{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" />
            </View>

        }
        return(
              /* ref: https://codeburst.io/react-native-keyboard-covering-inputs-72a9d3072689 */
                <KeyboardShift>
                {() => ( 
            <View style={{ flex: 1 }}>
                               
                
                <MapView
                    style={{ flex: 1 }}
                    /* initialRegion={{ */
                Region = {this.state.region}
                onRegionChangeComplete={this.onRegionChangeComplete}
                />

                <View style={styles.inputContainer}>
                    <Input 
                            placeholder='What job you looking for?'
                            errorStyle={{ color: 'red' }}
                            leftIcon={ <Icon
                                name='user'
                                size={24}
                                color='blue'
                                    /> }
                    />
                </View>
                
                    <View style={styles.buttonContainer}>
                        <Button 
                            large
                            title="Search this Area"
                            backgroundColor="#009688"
                            icon={{name: 'search'}}
                            onPress={this.onButtonPress} // if older syntax function like runder() we should use .bind(this)
                        />
                    </View>
                   
            </View>
              )}
            </KeyboardShift>  
        );
    }
 
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom:20,
        left: 0,
        right:0
    },
    inputContainer: {
        position: 'absolute',
        top:60,
        left: 0,
        right:0
    }
}

export default connect(null, actions) (MapScreen);